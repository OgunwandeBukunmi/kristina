import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";
import { calculateReadingTime } from "../../../../lib/readingTime";


export async function POST(req: NextRequest) {
    const { space, title, description, savedData } = await req.json()

    try {
        const client = await clientPromise
        const db = client.db("kristina")
        const doc = await db.collection("posts").insertOne({ space, title, description, content: savedData, createdAt: new Date() })
        if (!doc) return;
        return NextResponse.json({ succes: true, data: doc })

    } catch (err: unknown) {
        let message = "An unexpected error occurred";
        if (err instanceof Error) message = err.message;

        console.error("❌ Upload failed:", message);
        return NextResponse.json({ success: false, message }, { status: 500 });
    }


}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("kristina")
        const docs = await db.collection("posts").find({}).sort({ createdAt: -1 }).toArray()

        if (!docs) return NextResponse.json({ success: false, message: "Something Went Wrong" }, { status: 500 })
        
        // Add reading time to each post
        const postsWithReadingTime = docs.map(doc => ({
            ...doc,
            readingTime: calculateReadingTime(doc.content)
        }));

        return NextResponse.json({
            success: true, data: postsWithReadingTime,
        })

    } catch (err: unknown) {
        let message = "An unexpected error occurred";
        if (err instanceof Error) message = err.message;

        console.error("❌ Upload failed:", message);
        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json()
        console.log(id)
        const client = await clientPromise;
        const db = client.db("kristina")
        const doc = await db.collection("posts").deleteOne({ _id: id })
        console.log(doc)
        if (!doc) return NextResponse.json({ success: false, message: "Something Went Wrong" }, { status: 500 })
        return NextResponse.json({ success: true, data: doc })
    } catch (err: unknown) {
        let message = "An unexpected error occurred";
        if (err instanceof Error) message = err.message;

        console.error("❌ Upload failed:", message);
        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}