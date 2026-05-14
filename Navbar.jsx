import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-400 grid place-items-center text-black font-black">P</div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-300">Paradise</p>
            <h1 className="text-lg font-black text-white">Sai World City</h1>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 text-white text-sm font-medium">
          <a href="#home" className="transition hover:text-yellow-400">Home</a>
          <a href="#highlights" className="transition hover:text-yellow-400">Highlights</a>
          <a href="#pricing" className="transition hover:text-yellow-400">Pricing</a>
          <a href="#plans" className="transition hover:text-yellow-400">Floor Plan</a>
          <a href="#amenities" className="transition hover:text-yellow-400">Amenities</a>
          <a href="#gallery" className="transition hover:text-yellow-400">Gallery</a>
          <a href="#location" className="transition hover:text-yellow-400">Location</a>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-sm">
          <FaPhoneAlt /> Enquire
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
