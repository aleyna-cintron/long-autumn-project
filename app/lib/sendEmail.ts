"use server";
const nodemailer = require("nodemailer");

// Create a Nodemailer test account
// const testAccount = await nodemailer.createTestAccount();

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(formData: FormData): Promise<void> {
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

  const info = await transporter.sendMail({
    from: `${name} <${process.env.SMTP_USER}>`,
    to: process.env.BAND_EMAIL, // sending to the test inbox
    subject: name,
    text: message, // plain‑text body
    replyTo: email,
    html: `<p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong><br/>${message}</p>`
  });

  console.log("Message sent:", info);
}