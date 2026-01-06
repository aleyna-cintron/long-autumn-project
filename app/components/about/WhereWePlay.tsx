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
    <div className="max-w-7xl mx-auto py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Where We Play</h2>
      <p className="text-gray-400 text-sm mb-12">
        Shows within a 4-hour radius of Boston
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {regions.map(region => (
          <div
            key={region}
            className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm
              hover:border-brutal-red hover:text-white transition-colors duration-300"
          >
            {region}
          </div>
        ))}
      </div>
    </div>
  );
}
