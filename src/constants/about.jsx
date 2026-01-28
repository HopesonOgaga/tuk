import React from "react";

export default function AboutTikTub() {
  return (
    <section className="relative py-24 bg-yellow-100 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-400/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Brand Block */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 p-8 rounded-2xl">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 mb-2">
                Tok
                <br />
                hubflow
              </h2>
              <div className="h-1 w-20 bg-orange-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Redefining the{" "}
              <span className="text-orange-500">Visual Pulse</span> of Tomorrow.
            </h3>

            <p className="text-slate-700 text-lg leading-relaxed">
              TikTub is more than a platform; it’s a high-velocity visual engine
              designed for the next generation of digital storytellers. We’ve
              stripped away the noise to focus on what matters:{" "}
              <strong>uninterrupted, high-fidelity immersion.</strong>
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              Born at the intersection of cinematic aesthetics and social speed,
              TikTub empowers creators to showcase their world in a loop of
              endless inspiration. Whether it's neon city lights or serene
              landscapes, we provide the canvas for your urban pulse.
            </p>

            <div className="flex gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-black text-2xl font-bold">24/7</span>
                <span className="text-slate-500 text-sm uppercase tracking-widest">
                  Streaming
                </span>
              </div>
              <div className="w-[1px] h-10 bg-black/10" />
              <div className="flex flex-col">
                <span className="text-black text-2xl font-bold">4K+</span>
                <span className="text-slate-500 text-sm uppercase tracking-widest">
                  Resolution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
