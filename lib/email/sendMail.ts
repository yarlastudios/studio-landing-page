import nodemailer from "nodemailer";
import { thankYouHtml } from "./thankYouHtml";

let cachedTransport: nodemailer.Transporter | null = null;

function getTransport() {
  if (cachedTransport) return cachedTransport;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("Missing SMTP env: SMTP_HOST, SMTP_USER, SMTP_PASSWORD");
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  cachedTransport = nodemailer.createTransport({
    pool: true,
    maxConnections: 3,
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return cachedTransport;
}

export async function sendContactEmails(input: {
  name: string;
  email: string;
  brief: string;
  type?: string;
}): Promise<void> {
  const from = process.env.EMAIL_FROM?.trim();
  if (!from) {
    throw new Error("Missing EMAIL_FROM");
  }

  const transporter = getTransport();

  const brandLine = process.env.SITE_EMAIL_BRAND?.trim() ?? "Yarla Studios";

  const guestMail = transporter.sendMail({
    from,
    to: input.email,
    replyTo: process.env.CONTACT_REPLY_TO ?? from,
    subject: `Thanks for reaching out to ${brandLine} - we got your note`,
    html: thankYouHtml({
      name: input.name,
      brandLine,
    }),
    text: `Hi ${input.name},\n\nThanks for reaching out to ${brandLine} - we received your message and will get back soon.\n\n— ${brandLine}`,
  });

  const notify = process.env.CONTACT_NOTIFY_EMAIL?.trim();
  const notifyMail = notify
    ? transporter.sendMail({
        from,
        to: notify,
        subject: `New contact: ${input.name}`,
        text: [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          input.type ? `Type: ${input.type}` : "",
          "",
          input.brief,
        ]
          .filter(Boolean)
          .join("\n"),
      })
    : Promise.resolve();

  await Promise.all([guestMail, notifyMail]);
}
