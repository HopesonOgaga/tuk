import React from "react";

export default function ArtistGrid() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Artists on <span className="text-orange-500">TokTub</span>
          </h2>
          <p className="mt-3 text-slate-700 max-w-lg mx-auto">
            Meet creators dropping sounds, moments, and culture right now.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {/* Artist Tile */}
          <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Placeholder for image/video */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 opacity-90" />

            {/* Info */}
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-bold text-lg">Nova Ray</p>
              <p className="text-white/70 text-sm">Electronic • Viral</p>

              <button className="mt-3 w-full bg-orange-500 text-black font-bold py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                View Artist
              </button>
            </div>
          </div>

          {/* Repeat Tiles */}
          <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-90" />
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-bold text-lg">Echo Pulse</p>
              <p className="text-white/70 text-sm">EDM • Festival</p>
              <button className="mt-3 w-full bg-orange-500 text-black font-bold py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                View Artist
              </button>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-500 opacity-90" />
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-bold text-lg">Neon Fox</p>
              <p className="text-white/70 text-sm">Indie • Alt</p>
              <button className="mt-3 w-full bg-orange-500 text-black font-bold py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                View Artist
              </button>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-90" />
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-bold text-lg">Vibe City</p>
              <p className="text-white/70 text-sm">Rap • Street</p>
              <button className="mt-3 w-full bg-orange-500 text-black font-bold py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                View Artist
              </button>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-90" />
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-bold text-lg">Solar Drift</p>
              <p className="text-white/70 text-sm">Chill • Ambient</p>
              <button className="mt-3 w-full bg-orange-500 text-black font-bold py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                View Artist
              </button>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 opacity-90" />
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-bold text-lg">Luma Beats</p>
              <p className="text-white/70 text-sm">Lo-Fi • Night</p>
              <button className="mt-3 w-full bg-orange-500 text-black font-bold py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                View Artist
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
