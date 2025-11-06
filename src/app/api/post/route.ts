import { NextRequest,NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";
import { Network } from "lucide-react";

export async function POST(req:NextRequest) {
    const { title,savedData} = await req.json()

    try{
        const client = await clientPromise
        const db = client.db("kristina")
        const doc = await db.collection("posts").insertOne({title, content : savedData})
        if(!doc ) return;
        return NextResponse.json({succes : true, data: doc})

    }catch(err : unknown){
        let message = "An unexpected error occurred";
        if (err instanceof Error) message = err.message;
    
        console.error("❌ Upload failed:", message);
        return NextResponse.json({ success: false, message }, { status: 500 });
      }


}

export async function GET(req:NextRequest) {
    try{
        const client = await clientPromise;
        const db = client.db("kristina")
        const doc = await db.collection("posts").find({}).toArray()

        if(doc) return NextResponse.json({success:false,message : "Something Went Wrong"} , {status : 500})
        return NextResponse.json({
            success : true, data : doc,
        })

    }catch(err:unknown){
        let message = "An unexpected error occurred";
        if (err instanceof Error) message = err.message;
    
        console.error("❌ Upload failed:", message);
        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}