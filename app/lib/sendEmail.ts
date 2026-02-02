"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData): Promise<void> {
  const name = formData.get('name') as string | null
  const email = formData.get('email') as string | null
  const subject = formData.get('subject') as string | null
  const message = formData.get('message') as string | null

  // Check if email credentials are configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Email credentials not configured. Form data received:", { name, email, subject, message });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `${name} <${process.env.SMTP_USER}>`,
      to: process.env.BAND_EMAIL,
      subject: subject || `Contact from ${name}`,
      text: String(message),
      replyTo: String(email),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    console.log("Message sent:", info);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}