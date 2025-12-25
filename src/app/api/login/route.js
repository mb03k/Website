import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { password } = body;
  const CORRECT_PASSWORD = process.env.PASSWORD;

  if (password === CORRECT_PASSWORD) {
    return NextResponse.json({ success: true, message: "Zugriff erlaubt!" });
  } else {
    return NextResponse.json(
      { success: false, message: "Falsches Passwort!" },
      { status: 401 }
    );
  }
}
