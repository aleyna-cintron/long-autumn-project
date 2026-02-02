"use server";
const nodemailer = require("nodemailer");

export async function sendEmail(formData: FormData): Promise<{ success: boolean; message: string }> {
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  // Check if email credentials are configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Email credentials not configured. Form data received:", { name, email, subject, message });
    return { success: false, message: "Email service not configured. Please contact us directly." };
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
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}