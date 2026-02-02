import { Send } from 'lucide-react';
import { sendEmail } from '@/app/lib/sendEmail';

export default function ContactForm() {
  return (
    <form action={sendEmail} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-foreground mb-2 uppercase tracking-wide">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-3 bg-background border-2 border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:border-brutal-red focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-foreground mb-2 uppercase tracking-wide">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 bg-background border-2 border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:border-brutal-red focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-foreground mb-2 uppercase tracking-wide">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className="w-full px-4 py-3 bg-background border-2 border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:border-brutal-red focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-foreground mb-2 uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us more..."
          className="w-full px-4 py-3 bg-background border-2 border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:border-brutal-red focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brutal-red hover:bg-foreground text-background border-2 border-brutal-red hover:border-foreground transition-all h-12 uppercase tracking-wide font-bold flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
}
