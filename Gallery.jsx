function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-[#030303] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Gallery</p>
        <h2 className="text-5xl font-black mb-16">Sai World City Panvel Gallery</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
