import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import cloudinary from "../../../../lib/cloudinary";
import { Readable } from "stream";
import clientPromise from "../../../../lib/mongodb";


export async function POST(req: NextRequest) {
  try {// file sent from frontend
    const formData = await req.formData()
    const file = formData.get("file")


    if (!file || typeof file === "string") {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

     // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary using upload_stream
  const uploadResult: UploadApiResponse = await new Promise(
  (resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "writing_space",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result as UploadApiResponse);
      }
    );

    Readable.from(buffer).pipe(uploadStream);
  }
);

    console.log("✅ Uploaded by Writing Space Picture");

    return NextResponse.json({
      url: uploadResult.secure_url,
    });
  } catch (err: unknown) {
    let message = "An unexpected error occurred";
    if (err instanceof Error) message = err.message;

    console.error("❌ Upload failed:", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}