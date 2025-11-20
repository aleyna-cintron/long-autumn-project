'use server';
import { sendEmail } from '@/app/lib/sendEmail';

export default async function ContactForm() {
  return (
    <form action={sendEmail}>
      <input name="name" type="text" placeholder="Your Name" />
      <input name="email" type="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
