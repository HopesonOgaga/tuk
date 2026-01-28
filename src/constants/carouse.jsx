import React, { useState, useEffect, useCallback } from "react";

const slides = [
  { id: 1, video: "/videos/tok4.mp4", title: "", subtitle: "Experience the glow." },
  { id: 2, video: "/videos/tok5.mp4", title: "", subtitle: "Energy in motion." },
  { id: 3, video: "/videos/tok1.mp4", title: "", subtitle: "The rhythm of the street." },
   { id: 3, video: "/videos/tok2.mp4", title: "", subtitle: "The rhythm of the street." },
    { id: 3, video: "/videos/tok3.mp4", title: "", subtitle: "The rhythm of the street." },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const duration = 6000; // 6 seconds

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, duration);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Background video with subtle zoom effect when active */}
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Darker gradient for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-24">
            <h1 className={`text-white text-5xl md:text-8xl font-black mb-4 transition-all duration-700 delay-300 transform ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              {slide.title}
            </h1>
            <p className={`text-gray-300 text-lg md:text-2xl max-w-lg transition-all duration-700 delay-500 transform ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Progress Bars (Top Center) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-2 z-30 w-full max-w-md px-6">
        {slides.map((_, index) => (
          <div key={index} className="h-[3px] flex-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-white transition-all linear`}
              style={{ 
                width: current === index ? "100%" : "0%",
                transitionDuration: current === index ? `${duration}ms` : "0ms"
              }}
            />
          </div>
        ))}
      </div>

      {/* Glassmorphism Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Modern Index Indicator */}
      <div className="absolute bottom-10 left-10 z-30 flex items-center gap-4">
        <span className="text-white font-mono text-xl">0{current + 1}</span>
        <div className="w-12 h-[1px] bg-white/50" />
        <span className="text-white/50 font-mono text-xl">0{slides.length}</span>
      </div>
    </section>
  );
}