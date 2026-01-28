import React from "react";
import { useParams } from "react-router-dom";
import { artists } from "../constants/artist";
import ArtistChat from "./chat";
import Footer from "../pages/nav/footer";
import Header from "../pages/nav/header";

export default function ArtistDetail() {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        Artist not found.
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-neutral-950 text-neutral-100">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Aura */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-transparent blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
               Tokhubflow Featured Creator
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                {artist.name}
              </h1>

              <p className="text-neutral-300 text-lg max-w-xl mb-8">
                {artist.bio}
              </p>

              <button className="px-7 py-3 rounded-full bg-orange-500 text-black font-semibold hover:scale-105 transition">
                Connect with {artist.name}
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={artist.heroImage}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Featured Clips
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artist.videos?.map((video, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800"
              >
                <div className="w-full h-64 sm:h-72 lg:h-80 relative">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{}</h3>
                  <p className="text-sm text-neutral-400">
                    {}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAN CHAT */}
        <ArtistChat artist={artist} />
      </main>

      <Footer />
    </>
  );
}
