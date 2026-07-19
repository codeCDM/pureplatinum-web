import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const recipientEmail = "peter@pureplatinumcleaning.com.au";

function buildTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("Email service is not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const firstName = body?.firstName?.trim();
    const lastName = body?.lastName?.trim();
    const email = body?.email?.trim();
    const message = body?.message?.trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const transporter = buildTransport();
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from: fromAddress,
      to: recipientEmail,
      replyTo: email,
      subject: `New website enquiry from ${firstName} ${lastName}`,
      text: [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New website enquiry</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);

    return NextResponse.json(
      { error: "Unable to send your enquiry at the moment." },
      { status: 500 },
    );
  }
}
