"use server";
const nodemailer = require("nodemailer");
// Create a Nodemailer test account
const testAccount = await nodemailer.createTestAccount();
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

export async function sendEmail(formData: FormData): Promise<void> {
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

  const info = await transporter.sendMail({
    from: email,
    to: testAccount.user, // sending to the test inbox
    subject: "Hello ✔",
    text: message, // plain‑text body
  });

  console.log("Message sent:", info);
}