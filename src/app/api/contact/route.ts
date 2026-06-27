import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import cloudinary from "../../../../lib/cloudinary";
import { Readable } from "stream";
import clientPromise from "../../../../lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const reason = formData.get("reason") as string;
    const projectDetails = formData.get("projectDetails") as string;
    const time = formData.get("time") as string;

    const file = formData.get("file");

    let file_url: string = "";

    const client = await clientPromise;
    const db = client.db("kristina");

    console.log(name, "Working Start Now!!");

    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult: UploadApiResponse = await new Promise(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: "contact_uploads",
            },
            (error, result) => {
              if (error) {
                reject(error);
              } else if (result) {
                resolve(result);
              } else {
                reject(new Error("Cloudinary returned no result."));
              }
            }
          );

          Readable.from(buffer).pipe(uploadStream);
        }
      );

      console.log("✅ Uploaded by:", name);
      console.log("🌐 File URL:", uploadResult.secure_url);

      if (uploadResult.secure_url) {
        file_url = uploadResult.secure_url;
      }
    }

    await db.collection("contacts").insertOne({
      name,
      email,
      reason,
      projectDetails,
      time,
      url: file_url,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        name,
        url: file_url,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred";

    console.error("❌ Upload failed:", message);

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("kristina");

    const docs = await db.collection("contacts").find({}).toArray();

    return NextResponse.json(
      {
        success: true,
        data: docs,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred";

    console.error("❌ Fetch failed:", message);

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}