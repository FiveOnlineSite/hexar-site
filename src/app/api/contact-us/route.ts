import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sgMail.send({
  to: process.env.CONTACT_RECEIVER!,
  from: "helpdesk@fiveonline.in",
  replyTo: email,
  subject: `Hexar Contact Form Submission`,
  text: `
    Hexar Contact Request

    Name: ${name}
    Email: ${email}
    Company: ${company}
    Message: ${message}
  `,
  html: `
    <h3>Hexar Contact Request</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});

    return NextResponse.json({ success: true });
  }  catch (err: any) {
  console.error("MAIL ERROR =>", err);
  return NextResponse.json({ error: err.message }, { status: 500 });
}
}
