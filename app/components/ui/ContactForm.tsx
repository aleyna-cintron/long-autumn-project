import { sendEmail } from '@/app/lib/sendEmail';

export default function ContactForm() {
  return (
    <form
      action={sendEmail}
      className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col gap-4"
    >
      {/* Name */}
      <label htmlFor="name" className="text-white font-semibold">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-gray-400"
      />

      {/* Email */}
      <label htmlFor="email" className="text-white font-semibold">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-gray-400"
      />

      {/* Contact Reason */}
      <label htmlFor="reason" className="text-white font-semibold">
        Contact Reason
      </label>
      <select
        id="reason"
        name="reason"
        className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
      >
        <option value="booking">Booking Inquiry</option>
        <option value="label-rep">Label / A&R Inquiry</option>
        <option value="radio-promo">Radio / Press Inquiry</option>
        <option value="fan-message">Fan Message</option>
        <option value="collaboration">Collaboration Request</option>
        <option value="business">Business Inquiry</option>
      </select>

      {/* Message */}
      <label htmlFor="message" className="text-white font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        rows={5}
        className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white resize-none placeholder-gray-400"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}
