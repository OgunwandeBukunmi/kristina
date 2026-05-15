import { NextResponse } from "next/server";
import clientPromise from "../../../../../lib/mongodb";
import { calculateReadingTime } from "../../../../../lib/readingTime";

export async function GET(
  request: Request,
  context: { params: Promise<{ space: string }> }) {
  try {
    const { space } = await context.params;

    const client = await clientPromise;
    const db = client.db("kristina");

    // Always await your MongoDB query
    const docs = await db.collection("posts").find({ space }).sort({ createdAt: -1 }).toArray();

    // Add reading time to each post
    const postsWithReadingTime = docs.map(doc => ({
      ...doc,
      readingTime: calculateReadingTime(doc.content)
    }));

    return NextResponse.json({ success: true, data: postsWithReadingTime }, { status: 200 });
  } catch (err) {
    console.error(err);

    const message =
      err instanceof Error ? err.message : "Something went wrong";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
