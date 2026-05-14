import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["content:encoded", "description"],
  },
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");
    const skip = (page - 1) * limit;

    const SUBSTACK_URL = "https://kristinawrites93.substack.com/feed";
    
    // Fetch raw text first to check if it's valid XML/RSS
    const response = await fetch(SUBSTACK_URL);
    if (!response.ok) {
      throw new Error(`Substack returned ${response.status}: ${response.statusText}`);
    }
    
    const xmlText = await response.text();
    
    // Check if it's HTML (indicating a 404 or error page) instead of XML
    if (xmlText.trim().startsWith("<!DOCTYPE html") || xmlText.trim().startsWith("<html")) {
      console.error("Received HTML instead of RSS feed. Check your Substack URL.");
      return NextResponse.json(
        { success: false, message: "Invalid Substack URL or handle" },
        { status: 400 }
      );
    }

    // Sanitize common XML issues like unescaped ampersands
    const sanitizedXml = xmlText.trim().replace(/&(?!(?:amp|lt|gt|quot|apos|#\d+);)/g, '&amp;');

    let feed;
    try {
      feed = await parser.parseString(sanitizedXml);
    } catch (parseError: unknown) {
      const error = parseError as { line?: number; column?: number };
      console.error("RSS Parsing Error at:", error.line, ":", error.column);
      console.error("First 100 chars of feed:", sanitizedXml.slice(0, 100));
      throw parseError;
    }
    
    const posts = feed.items.map((item) => {
      const itemWithEncoded = item as Parser.Item & { "content:encoded"?: string };
      const content = itemWithEncoded["content:encoded"] || item.content || "";
      
      // Extract the first image from content
      const imageMatch = content.match(/<img[^>]+src="([^"]+)"/);
      const image = imageMatch ? imageMatch[1] : null;

      // Clean up description/summary and decode basic HTML entities
      const textContent = (item.description || content)
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .replace(/&#8217;/g, "'")
        .replace(/&#8216;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .trim();
      
      const preview = textContent.slice(0, 200) + (textContent.length > 200 ? "..." : "");

      // Clean Substack platform widgets and buttons
      const cleanedContent = content
        .replace(/<div class="subscription-widget-wrap-editor"[\s\S]*?<\/div><\/div>/g, "")
        .replace(/<p class="button-wrapper"[\s\S]*?<\/p>/g, "")
        .replace(/<div class="image-link-expand"[\s\S]*?<\/div><\/div>/g, "")
        .replace(/<form[\s\S]*?<\/form>/g, "");

      // Extract a clean slug from the link (e.g., 'dont-stop-writing-live')
      const itemLink = item.link || "";
      const slug = itemLink.split("/p/")[1]?.split("?")[0] || item.guid || itemLink;

      // Calculate reading time
      const wordCount = textContent.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Average 200 words per minute

      return {
        _id: slug,
        title: item.title || "Untitled",
        description: preview,
        content: cleanedContent.trim(),
        publishedAt: item.pubDate,
        readingTime: `${readingTime} min read`,
        link: item.link,
        image: image,
        space: "blogs",
        isExternal: true,
      };
    });

    const paginatedPosts = posts.slice(skip, skip + limit);
    
    return NextResponse.json({ 
      success: true, 
      data: paginatedPosts,
      pagination: {
        total: posts.length,
        page,
        limit,
        pages: Math.ceil(posts.length / limit),
        hasMore: skip + limit < posts.length
      }
    });
  } catch (err) {
    console.error("Error fetching Substack posts:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch Substack posts" },
      { status: 500 }
    );
  }
}
