import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { password } = body;

  if (password === process.env.PORTFOLIO_PASSWORD) {
    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set("portfolio-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ error: "Falsches Passwort" }, { status: 401 });
}
