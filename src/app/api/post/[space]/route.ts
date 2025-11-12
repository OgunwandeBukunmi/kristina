import { NextResponse } from "next/server";
import clientPromise from "../../../../../lib/mongodb";

export async function GET(
  request: Request,
 context: { params: Promise<{ space: string }> }) {
  try {
    const { space } = await context.params; 
    console.log(space);
    console.log(space);

    const client = await clientPromise;
    const db = client.db("kristina");

    // Always await your MongoDB query
    const docs = await db.collection("posts").find({ space }).toArray();

    return NextResponse.json({ success: true, data: docs }, { status: 200 });
  } catch (err) {
    console.error(err);

    const message =
      err instanceof Error ? err.message : "Something went wrong";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
