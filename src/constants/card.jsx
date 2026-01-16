import React from "react";

const artists = [
  {
    name: "Anthony Beastmode",
    genre: "Electronic • Viral",
    image: "/images/anthony.jpg",
    gradient: "from-orange-500/60 to-pink-500/60",
  },
  {
    name: "Kev Train ",
    genre: "EDM • Festival",
    image: "/images/kev train.jpg",
    gradient: "from-yellow-400/60 to-orange-500/60",
  },
  {
    name: "Mike Chandler",
    genre: "Indie • Alt",
    image: "/images/mike.jpg",
    gradient: "from-pink-400/60 to-orange-500/60",
  },
  {
    name: "Brian",
    genre: "Rap • Street",
    image: "/images/brian.png",
    gradient: "from-amber-400/60 to-orange-600/60",
  },
  {
    name: "ty march",
    genre: "Chill • Ambient",
    image: "/images/ty march.png",
    gradient: "from-orange-400/60 to-red-500/60",
  },
  {
    name: "jankster",
    genre: "Lo-Fi • Night",
    image: "/images/jank.png",
    gradient: "from-orange-500/60 to-pink-600/60",
  },
];

export default function ArtistGrid() {
  return (
    <section className="py-28 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Artists on <span className="text-orange-500">TokTub</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Discover creators shaping sound, culture, and moments right now.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-black cursor-pointer"
            >
              {/* Image */}
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Color Tint */}
              <div
                className={`absolute inset-0  ${artist.gradient}`}
              />

              {/* Dark Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-5">
                <div className="space-y-1">
                  <p className="text-white font-semibold text-lg leading-tight">
                    {artist.name}
                  </p>
                  <p className="text-white/70 text-sm">
                    {artist.genre}
                  </p>
                </div>

                <button className="mt-4 w-full rounded-full bg-orange-500 py-2.5 text-sm font-bold text-black opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  View Artist
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
