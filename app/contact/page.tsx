import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Instagram, FileText } from 'lucide-react';
import { SiLinktree } from 'react-icons/si';
import ContactForm from "../components/ui/ContactForm";
import { PanelCard } from "../components/ui/PanelCard";
import PageHeader from '../components/ui/PageHeader';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Long Autumn — booking inquiries, press requests, collaborations, or just to say hello. Independent indie rock band available for shows within a 4-hour radius of Boston. Email longautumnband@gmail.com or use the contact form.",
  keywords: [
    "contact Long Autumn",
    "book Long Autumn",
    "Long Autumn booking",
    "Long Autumn email",
    "Long Autumn press",
    "hire indie band Boston",
    "book indie band Manchester NH",
    "Long Autumn Instagram",
    "indie band for hire New England",
  ],
  openGraph: {
    title: "Contact — Long Autumn",
    description:
      "Bookings, press inquiries, or just to say hello. Reach out to Long Autumn.",
  },
  alternates: { canonical: "https://longautumnmusic.com/contact" },
};

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 xl:pt-16 2xl:pt-12 3xl:pt-16 pb-20 xl:pb-8 2xl:pb-4 3xl:pb-8">
            <PageHeader title='Get In Touch' subtitle='Bookings, press inquiries, or just to say hello' className="xl:pt-20 xl:pb-10 2xl:pt-16 2xl:pb-6 3xl:pt-20 3xl:pb-10"></PageHeader>

            {/* Contact Form & Info Section */}
            <section className="py-12 lg:py-16 xl:py-6 2xl:py-4 3xl:py-6">
                <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-6 2xl:gap-5 3xl:gap-6">
                        {/* Contact Form */}
                        <div className="flex flex-col">
                            <PanelCard title="Send Us a Message" fillParent>
                                <ContactForm />
                            </PanelCard>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 lg:space-y-6 xl:space-y-4 2xl:space-y-3 3xl:space-y-4 ">
                            {/* All Inquiries */}
                            <PanelCard title="All Inquiries">
                                <p className="text-text-secondary mb-6 xl:mb-4 2xl:mb-3 3xl:mb-4 leading-relaxed text-base md:text-base lg:text-lg xl:text-sm 2xl:text-sm 3xl:text-base 4xl:text-xl p-4 sm:p-0">
                                    Booking requests, collaborations, general questions, or just want to say hello?
                                    Reach out to us — we play within a 4-hour radius of Boston and are always
                                    looking for new opportunities.
                                </p>
                                <div className="flex items-center text-text-secondary p-4 m-2 sm:m-0 bg-muted/30 rounded-sm border border-border text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl ">
                                    <Mail className="mr-3 text-brutal-red shrink-0 w-5 h-5 3xl:w-6 3xl:h-6 " />
                                    <a
                                        href="mailto:contact@longautumn.com"
                                        className="hover:text-brutal-red transition-colors break-all"
                                    >
                                        longautumnband@gmail.com
                                    </a>
                                </div>
                            </PanelCard>

                            {/* Follow Us */}
                            <PanelCard title="Follow Us">
                                <p className="text-text-secondary mb-6 xl:mb-4 2xl:mb-3 3xl:mb-4 leading-relaxed text-base md:text-base lg:text-lg xl:text-sm 2xl:text-sm 3xl:text-base 4xl:text-xl p-4 sm:p-0">
                                    Stay connected and catch our latest updates, show announcements, and behind-the-scenes content.
                                </p>
                                <div className="space-y-3 p-4 sm:p-0">
                                    <a
                                        href="https://instagram.com/longautumnmusic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-text-secondary hover:text-brutal-red transition-colors p-4 bg-muted/30 rounded-sm border border-border hover:border-brutal-red text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl"
                                    >
                                        <Instagram className="mr-3 shrink-0 w-5 h-5 3xl:w-6 3xl:h-6" />
                                        @longautumnmusic
                                    </a>
                                    <a
                                        href="https://linktr.ee/longautumn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-text-secondary hover:text-brutal-red transition-colors p-4 bg-muted/30 rounded-sm border border-border hover:border-brutal-red text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl"
                                    >
                                        <SiLinktree className="mr-3 shrink-0 w-5 h-5 3xl:w-6 3xl:h-6" />
                                        linktr.ee/longautumn
                                    </a>
                                </div>
                            </PanelCard>

                            {/* EPK Link */}
                            <PanelCard title="Press Kit">
                                <div className="p-4 sm:p-0">
                                    <p className="text-text-secondary mb-4 leading-relaxed text-base md:text-base lg:text-lg xl:text-sm 2xl:text-sm 3xl:text-base 4xl:text-xl">
                                        Venue owners, booking agents, and press — check out our electronic press kit.
                                    </p>
                                    <Link
                                        href="/epk"
                                        className="flex items-center text-text-secondary hover:text-brutal-red transition-colors p-4 bg-muted/30 rounded-sm border border-border hover:border-brutal-red text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl"
                                    >
                                        <FileText className="mr-3 shrink-0 w-5 h-5 3xl:w-6 3xl:h-6" />
                                        View Electronic Press Kit
                                    </Link>
                                </div>
                            </PanelCard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
