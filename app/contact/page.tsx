import { Mail, Instagram, Twitter } from 'lucide-react';
import ContactForm from "../components/ui/ContactForm";
import { PanelCard } from "../components/ui/PanelCard";
import PageHero from "../components/ui/PageHeader";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
            <PageHero
                title="Get In Touch"
                subtitle="Bookings, press inquiries, or just to say hello"
            />

            {/* Contact Form & Info Section */}
            <section className="py-12 lg:py-16 2xl:py-12 3xl:py-16">
                <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-350 4xl:max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 3xl:gap-10">
                        {/* Contact Form */}
                        <div className="flex flex-col">
                            <PanelCard title="Send Us a Message" fillParent>
                                <ContactForm />
                            </PanelCard>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 lg:space-y-6 2xl:space-y-4 3xl:space-y-6">
                            {/* All Inquiries */}
                            <PanelCard title="All Inquiries">
                                <p className="text-text-secondary mb-6 leading-relaxed text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl">
                                    Booking requests, collaborations, general questions, or just want to say hello?
                                    Reach out to us — we play within a 4-hour radius of Boston and are always
                                    looking for new opportunities.
                                </p>
                                <div className="flex items-center text-text-secondary p-4 bg-muted/30 rounded-sm border border-border text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl">
                                    <Mail className="mr-3 text-brutal-red shrink-0 w-5 h-5 3xl:w-6 3xl:h-6" />
                                    <a
                                        href="mailto:contact@longautumn.com"
                                        className="hover:text-brutal-red transition-colors break-all"
                                    >
                                        contact@longautumn.com
                                    </a>
                                </div>
                            </PanelCard>

                            {/* Follow Us */}
                            <PanelCard title="Follow Us">
                                <p className="text-text-secondary mb-6 leading-relaxed text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl">
                                    Stay connected and catch our latest updates, show announcements, and behind-the-scenes content.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href="https://instagram.com/longautumnmusic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-text-secondary hover:text-brutal-red transition-colors p-4 bg-muted/30 rounded-sm border border-border hover:border-brutal-red text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl"
                                    >
                                        <Instagram className="mr-3 flex-shrink-0 w-5 h-5 3xl:w-6 3xl:h-6" />
                                        @longautumnmusic
                                    </a>
                                    <a
                                        href="https://twitter.com/longautumnmusic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-text-secondary hover:text-brutal-red transition-colors p-4 bg-muted/30 rounded-sm border border-border hover:border-brutal-red text-base md:text-base lg:text-lg 3xl:text-lg 4xl:text-xl"
                                    >
                                        <Twitter className="mr-3 flex-shrink-0 w-5 h-5 3xl:w-6 3xl:h-6" />
                                        @longautumnmusic
                                    </a>
                                </div>
                            </PanelCard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
