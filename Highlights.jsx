function Highlights() {
  const items = [
    "2 to 4 BHK Luxury High-Rise Residences",
    "38 Acre Integrated Global Lifestyle Township",
    "Smart Investment Hub With High ROI Potential",
    "Multi-Level Parking With Podium Lifestyle Spaces",
    "75,000 Sq.ft Club Vegas Clubhouse",
    "50+ Lifestyle, Leisure & Wellness Amenities",
    "Prime Panvel Location With Excellent Connectivity",
    "Developed By Paradise Group",
  ];

  return (
    <section className="py-24 px-6 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Sai World City Panvel - Highlights</p>
            <h2 className="text-4xl md:text-5xl font-black">The perfect harmony of luxury, convenience, and lifestyle</h2>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 text-sm text-gray-300 max-w-md">
            <p className="font-semibold text-white mb-2">Luxury 2, 2.5, 3 & 4 BHK Starts at</p>
            <p className="text-3xl font-black text-yellow-400">₹ 89 Lakhs* Onwards</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="w-3 h-3 mt-2 rounded-full bg-yellow-400"></div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
