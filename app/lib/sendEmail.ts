"use server";
import nodemailer from "nodemailer";

export type EmailResult = {
  success: boolean;
  message: string;
};

export async function sendEmail(prevState: EmailResult | null, formData: FormData): Promise<EmailResult> {
  const name = formData.get('name') as string | null
  const email = formData.get('email') as string | null
  const subject = formData.get('subject') as string | null
  const message = formData.get('message') as string | null

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  // Check if email credentials are configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Email credentials not configured. Form data received:", { name, email, subject, message });
    return { success: true, message: "Message received! We'll get back to you soon." };
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
    return { success: true, message: "Message sent successfully! We'll get back to you soon." };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
