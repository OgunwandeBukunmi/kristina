interface QuillOp {
  insert: string | { image?: string };
}

interface QuillDelta {
  ops: QuillOp[];
}

export function calculateReadingTime(content: string | QuillDelta | unknown): string {
  let text = "";
  let imageCount = 0;

  if (typeof content === "string") {
    // HTML content
    text = content.replace(/<[^>]+>/g, " ").trim();
    imageCount = (content.match(/<img/g) || []).length;
  } else if (content && typeof content === "object" && "ops" in content && Array.isArray((content as QuillDelta).ops)) {
    // Quill Delta content
    (content as QuillDelta).ops.forEach((op: QuillOp) => {
      if (typeof op.insert === "string") {
        text += op.insert;
      } else if (op.insert && typeof op.insert === "object" && "image" in op.insert) {
        imageCount++;
      }
    });
  }

  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  const wordsPerMinute = 200;
  let readingTimeMinutes = wordCount / wordsPerMinute;

  // Image-aware reading time (approx 12s for first image, decreasing to 3s)
  let imageTimeSeconds = 0;
  if (imageCount > 0) {
    for (let i = 1; i <= Math.min(imageCount, 10); i++) {
      imageTimeSeconds += 13 - i;
    }
    if (imageCount > 10) {
      imageTimeSeconds += (imageCount - 10) * 3;
    }
    readingTimeMinutes += imageTimeSeconds / 60;
  }

  const finalTime = Math.max(1, Math.ceil(readingTimeMinutes));
  return `${finalTime} min read`;
}
