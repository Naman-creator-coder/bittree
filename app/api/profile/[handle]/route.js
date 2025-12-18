import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Profile from "@/models/profile";


export async function GET(req, { params }) {
  await connectDB();

  const { handle } = params;

  const profile = await Profile.findOne({ handle });

  if (!profile) {
    return NextResponse.json(
      { message: "Profile not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(profile);
}
