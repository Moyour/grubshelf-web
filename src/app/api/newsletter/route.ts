import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter service is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    const data = await res.json().catch(() => null);

    if (res.status === 409) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    return NextResponse.json(
      { error: data?.detail ?? "Something went wrong. Please try again." },
      { status: res.status },
    );
  } catch {
    return NextResponse.json(
      { error: "Could not reach the newsletter service. Please try again." },
      { status: 502 },
    );
  }
}
