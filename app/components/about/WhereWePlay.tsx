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
    <div className="max-w-7xl mx-auto py-20 text-center relative">
      {/* Backdrop for better readability */}
      <div className="absolute inset-0 -m-8 bg-black/60 backdrop-blur-sm rounded-2xl" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Where We Play
        </h2>
        <p className="text-gray-300 text-sm mb-12">
          Shows within a 4-hour radius of Boston
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {regions.map(region => (
            <div
              key={region}
              className="px-6 py-3 bg-black/40 border border-gray-500 rounded-full text-gray-200 text-sm
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
