import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-yellow-200 to-yellow-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-10 justify-between items-start">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold italic">tok</span>
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                hubflow
              </span>
            </div>

            <p className="text-sm text-slate-700 max-w-xs">
              Discover creators, trending sounds, and viral moments.
              Built for vibes, not noise 🔥
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="font-bold text-slate-900 mb-3">Explore</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="hover:text-orange-500 cursor-pointer">Trending</li>
                <li className="hover:text-orange-500 cursor-pointer">Creators</li>
                <li className="hover:text-orange-500 cursor-pointer">Sounds</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-slate-900 mb-3">Company</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="hover:text-orange-500 cursor-pointer">About</li>
                <li className="hover:text-orange-500 cursor-pointer">Blog</li>
                <li className="hover:text-orange-500 cursor-pointer">Careers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-300/50" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Tokhubflow All vibes reserved ✨
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            {["🔥", "🎵", "📸", "▶️"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition"
              >
                <span className="text-lg">{icon}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
