const testimonials = [
  {
    quote:
      "Sai World City has become our family’s sanctuary — spacious homes, quiet gardens, and everything within reach.",
    author: "Aarav & Meera",
  },
  {
    quote:
      "The design feels modern, yet warm. Every detail feels premium, and the location is incredibly convenient.",
    author: "Nina Patel",
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Testimonials</p>
        <h2 className="text-5xl font-black mb-16">Words from our residents</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-10 rounded-3xl text-left">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">“{item.quote}”</p>
              <p className="text-yellow-400 font-semibold">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
