import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Profile from "@/models/profile";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { handle, photo, links } = body;

    if (!handle || !photo || !links?.length) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = await Profile.findOne({ handle });
    if (existing) {
      return NextResponse.json(
        { message: "Handle already exists" },
        { status: 409 }
      );
    }

    await Profile.create({ handle, photo, links });

    // ✅ IMPORTANT: ALWAYS RETURN JSON
    return NextResponse.json(
      { message: "Profile saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("PROFILE SAVE ERROR:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
