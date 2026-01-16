import React from "react";
import Header from "./nav/header";
import Footer from "./nav/footer";
import VideoCarousel from "../constants/carouse";
import AboutTikTub from "../constants/about";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="px-6 pt-16 pb-24">
        <div className=" flex justify-around  ">
          {/* Text */}
          <div className="space-y-5 text-center md:text-left flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight capitalize ">
              listen on <br></br> tok
              <span className="text-orange-500">tub</span> 🎧
            </h1>

            <p className="text-sm  text-slate-700 max-w-md mx-auto md:mx-0 leading-relaxed tracking-normal ">
              Discover your favorite TikTok creators, catch trending sounds
              early, and stay tapped into what’s hot every day. Scroll, listen,
              and vibe with viral moments, fresh clips, and creators you love.
              Never miss a trend, a sound, or a moment everyone’s talking about
            </p>

            <div className="flex flex-col sm:flex-row gap-6  justify-center md:justify-start">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-sm  font-bold shadow-lg active:scale-95 transition cursor-pointer border-2 border-black ">
                Explore now
              </button>

              <button className="bg-white px-8 py-4 rounded-sm font-bold text-slate-800  active:scale-95 cursor-pointer">
                ▶ Watch clips
              </button>
            </div>
          </div>

          {/* Visual / Image */}
          <div className="relative">
            <div className="w-[32vw] h-full  rounded-3xl bg-gradient-to-br from-orange-400 to-pink-400 shadow-2xl flex items-center justify-center rotate-3">
              <img
                src="/images/home.jpg"
                className="w-full h-fit  "
                alt="TikTok"
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section>
        <AboutTikTub></AboutTikTub>
      </section>
      {/* section */}
      <section>
        {/* <CarouselTransition></CarouselTransition> */}
        <VideoCarousel></VideoCarousel>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
