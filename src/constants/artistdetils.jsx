import React from "react";
import { useParams } from "react-router-dom";
import { artists } from "../constants/artist"; 
import ArtistChat from "./chat";
import Footer from "../pages/nav/footer";
import Header from "../pages/nav/header";

export default function ArtistDetail() {
  const { id } = useParams();
  
  // Find the artist based on the ID in the URL
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return <div className="min-h-screen bg-black text-white p-10">Artist not found.</div>;
  }

  return (
    <>
    <Header></Header>
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-4">Featured Artist</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{artist.name}</h1>
            <p className="text-neutral-300 text-lg max-w-xl mb-8">{artist.bio}</p>
            <div className="flex gap-4">
               <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">Contact</button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-800">
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artist.videos?.map((video, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-neutral-900">
              <div className="aspect-video bg-neutral-800">
                <iframe src={video.url} title={video.title} className="w-full h-full" allowFullScreen />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{video.title}</h3>
                <p className="text-sm text-neutral-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ArtistChat artist={artist} />
    </main>
    <Footer></Footer>
    </>
  );
}