const amenities = [
  {
    title: "Infinity Pool",
    description: "A glass-edge pool with panoramic skyline views.",
  },
  {
    title: "Sky Lounge",
    description: "A rooftop social club designed for elegant evenings.",
  },
  {
    title: "Wellness Studio",
    description: "Yoga decks, spa rooms, and a premium fitness studio.",
  },
  {
    title: "Green Courtyard",
    description: "Lush gardens and walking trails within a peaceful enclave.",
  },
  {
    title: "Family Pavilion",
    description: "Play areas and lounge zones for all ages.",
  },
  {
    title: "Private Dining",
    description: "Chef-curated event spaces for intimate celebrations.",
  },
];

function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 bg-[#040404] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Amenities</p>
        <h2 className="text-5xl font-black mb-16">Everything for the life you deserve</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
