import { escapeHtml } from "./escapeHtml";

function splitBrand(brandRaw: string): { first: string; second: string } {
  const t = brandRaw.trim();
  const i = t.indexOf(" ");
  if (i === -1) return { first: t, second: "" };
  return { first: t.slice(0, i), second: t.slice(i + 1).trim() };
}

export function thankYouHtml(params: {
  name: string;
  /** Optional override; default Yarla Studios */
  brandLine?: string;
}): string {
  const greetingName = escapeHtml(params.name.trim() || "there");
  const brandNorm = params.brandLine?.trim() || "Yarla Studios";
  const brandFull = escapeHtml(brandNorm);
  const brand = splitBrand(brandNorm);
  const w1 = escapeHtml(brand.first || "Yarla");
  const w2Raw = brand.second;
  const w2 = w2Raw ? escapeHtml(w2Raw) : "";

  const ink = "#0a0a12";
  const muted = "#6b6b7a";
  const ink2 = "#1a1a24";
  const blue = "#1f2bff";
  const paper = "#f6f5f1";
  const line = "#d9d6cc";
  const card = "#ffffff";

  const navLine =
    `font-size:16px;font-weight:800;line-height:0.9;letter-spacing:-0.02em;color:${blue};`;
  const wordmarkStack = w2
    ? `<div style="margin:0;${navLine}">${w1}</div><div style="margin:0;${navLine}">${w2}</div>`
    : `<div style="margin:0;${navLine}">${w1}</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Thank you for reaching out to Yarla Studios</title>
</head>
<body style="margin:0;padding:0;background-color:${paper};-webkit-font-smoothing:antialiased;">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
    We received your note and will reply soon.
  </div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background-color:${paper};">
    <tr>
      <td align="center" style="padding:48px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto Helvetica,Arial,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;border-collapse:collapse;">
          <tr>
            <td style="background-color:${card};border:1px solid ${line};border-radius:14px;padding:44px 40px 40px 40px;box-shadow:0 22px 50px rgba(10,10,18,0.06);">

              <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse;margin:0 0 32px;">
                <tr>
                  <td style="padding-bottom:28px;border-bottom:1px solid ${line};">
                    ${wordmarkStack}
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 12px;font-size:13px;line-height:1.4;letter-spacing:0.075em;text-transform:uppercase;font-weight:600;color:${muted};">Thank you</p>
              <h1 style="margin:0 0 22px;font-size:26px;line-height:1.18;font-weight:600;color:${ink};letter-spacing:-0.03em;">
                We\'re grateful you reached out${greetingName !== "there" ? ", " + greetingName : ""}.
              </h1>

              <p style="margin:0 0 18px;font-size:16px;line-height:1.65;color:${ink2};">
                Your brief is with us. Within the next couple of business days someone from the studio will reply -
                typically with thoughtful questions so we fully understand what you are building before we propose next steps.
              </p>

              <p style="margin:0 0 28px;font-size:16px;line-height:1.65;color:${ink2};">
                If timelines shift or anything becomes urgent on your side, just hit&nbsp;<strong style="font-weight:600;color:${ink};">reply</strong>.
                Keeping everything in one thread helps us respond faster.
              </p>

              <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse;background-color:${paper};border-radius:10px;border:1px solid ${line};">
                <tr>
                  <td style="padding:20px 22px;">
                    <p style="margin:0;font-size:14px;line-height:1.55;color:${muted};letter-spacing:-0.01em;">
                      <strong style="color:${ink};display:block;margin-bottom:6px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;">What happens next</strong>
                      We review your note, align internally if needed, and write back with a clear, human reply.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;font-size:15px;line-height:1.55;color:${ink2};">
                Appreciate your time,<br />
                <span style="color:${ink};font-weight:600;">The team</span><span style="font-weight:600;color:${blue};"> &middot; </span><span style="color:${muted};font-weight:500;">${brandFull}</span>
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:36px;">
                <tr>
                  <td style="height:1px;background-color:${line};line-height:1px;font-size:0;">&nbsp;</td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:12px;line-height:1.55;color:${muted};">
                This confirmation was sent because you submitted our contact form. If it was not you, you can ignore this message safely.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 8px 0;text-align:center;">
              <p style="margin:0;font-size:11px;line-height:1.5;letter-spacing:0.055em;text-transform:uppercase;font-weight:500;color:${muted};">
                Independently-owned · Design & engineering
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}