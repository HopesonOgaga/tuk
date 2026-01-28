import React from "react";
import Header from "./nav/header";
import Footer from "./nav/footer";
import VideoCarousel from "../constants/carouse";
import AboutTikTub from "../constants/about";
import ArtistGrid from "../constants/card";
import FAQ from "../constants/faq";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HERO SECTION */}
      <section className="px-6 pt-20 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
          {/* Text */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight capitalize">
              listen on <br />
              Tok<span className="text-orange-500">hubflow</span> 🎧
            </h1>

            <p className="text-sm sm:text-base text-slate-700 max-w-md mx-auto md:mx-0 leading-relaxed">
              Discover your favorite TikTok creators, catch trending sounds
              early, and stay tapped into what’s hot every day. Scroll, listen,
              and vibe with viral moments, fresh clips, and creators you love.
              Never miss what everyone’s talking about.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-sm font-bold shadow-lg active:scale-95 transition border-2 border-black">
                Explore now
              </button>

              <button className="bg-white px-8 py-4 rounded-sm font-bold text-slate-800 active:scale-95 transition">
                ▶ Watch clips
              </button>
            </div> */}
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl bg-gradient-to-br from-orange-400 to-pink-400 shadow-2xl rotate-2 overflow-hidden">
              <img
                src="/images/home.jpg"
                alt="TikTok"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-10" id="about">
        <AboutTikTub />
      </section>

      {/* ARTISTS */}
      <section className="mt-10" id="artist">
        <ArtistGrid />
      </section>

      {/* VIDEO CAROUSEL */}
      <section className="mt-16">
        <VideoCarousel />
      </section>

      <section>
        <FAQ></FAQ>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
