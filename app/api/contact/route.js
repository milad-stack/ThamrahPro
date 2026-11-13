// Receives inquiries from the website contact form and emails them via Resend.
// Required environment variable (set in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      API key from https://resend.com
// Optional:
//   CONTACT_TO_EMAIL    where inquiries go (default: info@thamrahpro.com)
//   CONTACT_FROM_EMAIL  sender address on a domain verified in Resend
//                       (default: Thamrah Pro Website <website@thamrahpro.com>)

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = String(data.name || "").trim().slice(0, 100);
  const email = String(data.email || "").trim().slice(0, 150);
  const company = String(data.company || "").trim().slice(0, 150);
  const phone = String(data.phone || "").trim().slice(0, 30);
  const service = String(data.serviceLabel || data.service || "").trim().slice(0, 80);
  const message = String(data.message || "").trim().slice(0, 3000);
  const lang = data.lang === "ar" ? "Arabic" : "English";

  // Spam bots fill the hidden "website" field; pretend success and drop it.
  if (data.website) {
    return Response.json({ ok: true });
  }

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return Response.json({ ok: false, error: "Email service not configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@thamrahpro.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Thamrah Pro Website <website@thamrahpro.com>";

  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Service:</strong> ${escapeHtml(service || "-")}</p>
    <p><strong>Site language:</strong> ${lang}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const text = `New website inquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nPhone: ${phone || "-"}\nService: ${service || "-"}\nSite language: ${lang}\n\n${message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website inquiry${service ? ` [${service}]` : ""}: ${name}${company ? ` (${company})` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Contact form: Resend error", res.status, await res.text());
      return Response.json({ ok: false, error: "Email could not be sent" }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form: request to Resend failed", err);
    return Response.json({ ok: false, error: "Email could not be sent" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
