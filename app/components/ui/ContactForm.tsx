import { sendEmail } from '@/app/lib/sendEmail';

export default function ContactForm() {
  return (
    <form
      action={sendEmail}
      className="bg-black border-2 border-gray-800 p-8 max-w-2xl"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full bg-black text-white p-4 border-2 border-gray-800 focus:outline-none focus:border-brutal-red placeholder-gray-600 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full bg-black text-white p-4 border-2 border-gray-800 focus:outline-none focus:border-brutal-red placeholder-gray-600 transition-colors"
          />
        </div>

        {/* Contact Reason */}
        <div>
          <label htmlFor="reason" className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Contact Reason
          </label>
          <select
            id="reason"
            name="reason"
            className="w-full bg-black text-white p-4 border-2 border-gray-800 focus:outline-none focus:border-brutal-red transition-colors cursor-pointer"
          >
            <option value="booking">Booking Inquiry</option>
            <option value="label-rep">Label / A&R Inquiry</option>
            <option value="radio-promo">Radio / Press Inquiry</option>
            <option value="fan-message">Fan Message</option>
            <option value="collaboration">Collaboration Request</option>
            <option value="business">Business Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={6}
            className="w-full bg-black text-white p-4 border-2 border-gray-800 focus:outline-none focus:border-brutal-red resize-none placeholder-gray-600 transition-colors"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-transparent border-2 border-brutal-red text-brutal-red font-bold py-4 uppercase tracking-wider hover:bg-brutal-red hover:text-white transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
