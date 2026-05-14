function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/10 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">About Paradise Group</p>
          <h2 className="text-4xl font-black mb-6">Building tomorrow’s signature residences</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Established in 1990 by Mr. Madh Bhatia, Paradise Group is one of Navi Mumbai’s leading real estate developers. Known for landmark residential and commercial projects, the group has delivered premium spaces with a focus on architecture, luxury, and customer trust.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Agent Reg. No. A00120301991 | RERA No. P52000052218 | P52000052218
          </p>
        </div>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-gray-300">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Project Details</p>
          <ul className="space-y-3 text-sm">
            <li>38 Acre Integrated Global Lifestyle Township</li>
            <li>2, 2.5, 3 & 4 BHK Luxury Residences</li>
            <li>75,000 Sq.ft Club Vegas Clubhouse</li>
            <li>World Class Themed Amenities</li>
            <li>Prime Panvel Location with Excellent Connectivity</li>
          </ul>
        </div>
      </div>
      <div className="mt-14 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        © 2026 Sai World City. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
