import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email/sendMail";

export const runtime = "nodejs";

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const brief = typeof body.brief === "string" ? body.brief.trim() : "";
  const type =
    typeof body.type === "string" && body.type.length <= 512
      ? body.type.trim()
      : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }
  if (!email || !emailRx.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (!brief || brief.length > 12000) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  try {
    await sendContactEmails({ name, email, brief, type });

    return NextResponse.json({
      ok: true,
      message: "Email sent.",
    });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "production"
            ? "Could not send email."
            : e instanceof Error
              ? e.message
              : "Error",
      },
      { status: 500 },
    );
  }
}