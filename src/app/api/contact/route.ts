import { NextRequest, NextResponse } from "next/server";
// import clientPromise from "../../../../lib/mongodb";
export async function POST(req:NextRequest){
    const formData = await req.formData()
    const name = formData.get("name") as string;
    try{
        // const client = await clientPromise;
        // const db =  client.db("kristina")
        console.log("Connected",name)
        return NextResponse.json({sucess : true, message : "Message received by backend FormData"})


    }catch (err: unknown) {
  let message = "An unexpected error occurred";

  if (err instanceof Error) {
    message = err.message;
  }

  return NextResponse.json({ success: false, message }, { status: 500 });
}
    

}