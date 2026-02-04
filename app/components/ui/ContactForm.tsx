'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { sendEmail } from '@/app/lib/sendEmail';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await sendEmail(null, formData);
      setIsSuccess(true);
      formRef.current?.reset();
    } catch {
      // If there's an error, the form stays as-is
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground">We'll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="text-brutal-red hover:underline uppercase tracking-wide text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
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
        disabled={isSubmitting}
        className="w-full bg-brutal-red hover:bg-foreground text-background border-2 border-brutal-red hover:border-foreground transition-all h-12 uppercase tracking-wide font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={20} />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
