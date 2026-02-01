import Link from "next/link";
import { Play, Calendar, ShoppingBag } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Play size={32} className="text-brutal-red" />,
      title: "Latest Release",
      description: "Check out our newest tracks on Spotify and Apple Music.",
      linkText: "Listen Now →",
      linkHref: "/music",
    },
    {
      icon: <Calendar size={32} className="text-brutal-red" />,
      title: "Catch Us Live",
      description: "We play regularly throughout New England. See where we're headed next.",
      linkText: "View Dates →",
      linkHref: "/shows",
    },
    {
      icon: <ShoppingBag size={32} className="text-brutal-red" />,
      title: "Band Merch",
      description: "Rep Long Autumn with our exclusive merch. Limited designs available.",
      linkText: "Shop Now →",
      linkHref: "/products",
    },
  ];

  return (
    <section className="bg-deep-black/60 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background border border-neutral-800 p-8 hover:border-brutal-red transition-colors group"
            >
              {/* Icon */}
              <div className="mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-feature text-2xl font-bold text-off-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-off-white/80 text-sm mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Link */}
              <Link
                href={feature.linkHref}
                className="font-body text-brutal-red hover:text-brutal-red/80 text-sm font-bold uppercase tracking-wider transition-colors inline-block"
              >
                {feature.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}