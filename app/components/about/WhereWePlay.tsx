const regions = [
  'New Hampshire',
  'Massachusetts',
  'Maine',
  'Vermont',
  'Connecticut',
  'New York',
];

export default function WhereWePlay() {
  return (
    <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2000px] mx-auto py-12 md:py-16 3xl:py-20 text-center relative">
      {/* Backdrop for better readability */}
      <div className="absolute inset-0 -m-8 3xl:-m-12 bg-black/60 backdrop-blur-sm rounded-2xl" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-4 3xl:mb-6 text-white drop-shadow-lg">
          Where We Play
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-base 2xl:text-lg 3xl:text-lg 4xl:text-xl mb-12 3xl:mb-16">
          Shows within a 4-hour radius of Boston
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 2xl:gap-5 3xl:gap-6 max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto">
          {regions.map(region => (
            <div
              key={region}
              className="px-4 py-2 md:px-6 md:py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 bg-black/40 border border-gray-500 rounded-full text-gray-200 text-xs md:text-sm 2xl:text-base 3xl:text-lg 4xl:text-lg
                hover:border-red-500 hover:text-white hover:bg-red-900/30 transition-all duration-300"
            >
              {region}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
