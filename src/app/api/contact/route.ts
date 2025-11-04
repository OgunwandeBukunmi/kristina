import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import cloudinary from "../../../../lib/cloudinary";
import { Readable } from "stream";
import clientPromise from "../../../../lib/mongodb";


export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string
    const reason = formData.get("reason") as string
    const projectDetails = formData.get("projectDetails") as string
    const time = formData.get("time") as string
    const file = formData.get("file"); // file sent from frontend

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    const client = await clientPromise
    const db = client.db("kristina")
    console.log(name,file, "Working Start Now!!")
     // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary using upload_stream
  const uploadResult: UploadApiResponse = await new Promise(
  (resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "contact_uploads",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result as UploadApiResponse);
      }
    );

    Readable.from(buffer).pipe(uploadStream);
  }
);

    console.log("✅ Uploaded by:", name);
    console.log("🌐 File URL:", uploadResult.secure_url);
    const doc = await db.collection("contacts").insertOne({name,email,reason,projectDetails,time,url:uploadResult.secure_url})
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      name,
      url: uploadResult.secure_url,
    });
  } catch (err: unknown) {
    let message = "An unexpected error occurred";
    if (err instanceof Error) message = err.message;

    console.error("❌ Upload failed:", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function GET(req:NextRequest){
  try{
    const client = await clientPromise
    const db = client.db("kristina")

    const docs = await db.collection("contacts").find({}).toArray()

    return NextResponse.json({
      success :true, data : docs
    },{status : 200})
  }catch(err : unknown){
    let message = "An unexpected error occurred";
    if (err instanceof Error) message = err.message;

    console.error("❌ Upload failed:", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}