function MasterPlan() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Floor Plan</p>
        <h2 className="text-5xl font-black mb-10">Master & Unit Layout</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
            <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-sm uppercase tracking-[0.35em] text-white">Master Plan Layout</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 mb-6">Request the master layout to explore the township and amenity zoning.</p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Request Master Layout Plan
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
            <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-sm uppercase tracking-[0.35em] text-white">Unit Plan Layout</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 mb-6">Review the unit layouts for 2, 3, and 4 BHK residences.</p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Request Unit Layout Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MasterPlan;
