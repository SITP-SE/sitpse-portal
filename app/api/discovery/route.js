import { Resend } from "resend";

const TO_EMAIL = process.env.DISCOVERY_TO_EMAIL;
const FROM_EMAIL = process.env.DISCOVERY_FROM_EMAIL;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9()\-\s]{7,20}$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, company, orgInfo, issues, botcheck } = body ?? {};

  // Honeypot field: bots fill it in, real users never see it.
  if (botcheck) {
    return Response.json({ success: true });
  }

  if (!name || !email || !orgInfo || !issues) {
    return Response.json(
      { success: false, message: "Name, email, organization info, and issues are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(String(email).trim())) {
    return Response.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (phone && !PHONE_PATTERN.test(String(phone).trim())) {
    return Response.json(
      { success: false, message: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
    console.error("Discovery form: missing RESEND_API_KEY, DISCOVERY_TO_EMAIL, or DISCOVERY_FROM_EMAIL env var.");
    return Response.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Discovery Session request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Organization: ${company || "Not provided"}`,
        "",
        "About their organization:",
        orgInfo,
        "",
        "Issues they'd like help with:",
        issues,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Failed to send discovery session email:", err);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
