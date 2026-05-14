const pricing = [
  { type: "2 BHK", area: "620 - 760 Sq.ft", price: "₹ 1.20 - 1.61 Cr" },
  { type: "3 BHK", area: "1234 Sq.ft", price: "₹ 2.41 Cr+" },
  { type: "3.5 BHK", area: "1598 Sq.ft", price: "₹ 2.89 Cr+" },
  { type: "4 BHK", area: "1858 Sq.ft", price: "₹ 3.34 Cr+" },
];

function FloorPlans() {
  return (
    <section id="pricing" className="bg-[#090909] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Area & Pricing</p>
          <h2 className="text-5xl font-black">Sai World City Panvel - Area & Pricing</h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <table className="min-w-full text-left text-sm text-gray-300">
            <thead className="border-b border-white/10 bg-white/5 text-gray-400">
              <tr>
                <th className="px-6 py-5">Type</th>
                <th className="px-6 py-5">Area</th>
                <th className="px-6 py-5">Price (Onwards)</th>
                <th className="px-6 py-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item, index) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-6 py-5 font-semibold">{item.type}</td>
                  <td className="px-6 py-5">{item.area}</td>
                  <td className="px-6 py-5">{item.price}</td>
                  <td className="px-6 py-5">
                    <button className="rounded-full border border-white/20 bg-yellow-400 px-5 py-3 text-black font-semibold hover:bg-white hover:text-black transition-all duration-300">
                      Complete Costing Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FloorPlans;
