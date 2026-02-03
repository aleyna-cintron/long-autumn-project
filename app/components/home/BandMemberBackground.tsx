
export default function BandMemberBackground() {

  return (
    // Apply grayscale ONCE to the entire container instead of 5 times
    <div className="absolute inset-0 overflow-hidden bg-transparent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/thefivever2.webp"
            alt="The Five"
            className="absolute inset-0 w-full h-full object-contain object-center"
            fetchPriority="high"
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
          
          {/* Simplified grain - reduced opacity and simpler SVG */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none z-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='2' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
    </div>
  );
}