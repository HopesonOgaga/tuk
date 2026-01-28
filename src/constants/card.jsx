import React from "react";
import { Link } from "react-router-dom";
import { artists } from "./artist"

export default function ArtistGrid() {
  return (
    <section className="py-28 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-16 text-center">
          Artists on <span className="text-orange-500">Tokhubflow</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-black"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute bottom-0 p-5">
                <p className="text-white font-semibold text-lg">
                  {artist.name}
                </p>
                <p className="text-white/70 text-sm">{artist.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
