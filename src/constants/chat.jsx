import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Mail, Phone } from "lucide-react";

export default function ArtistChat({ artist }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // FIX 1: Force the window to stay at the top when the artist changes
  useEffect(() => {
    if (artist) {
      // Small timeout ensures it runs AFTER the browser tries to jump
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);

      setMessages([
        {
          role: "ai",
          text: `Hey! I'm ${artist.name}'s virtual assistant. How can I help you?`,
        },
      ]);
    }
  }, [artist?.id]); // Only runs when a brand new artist is loaded

  const handleResponse = (type) => {
    const responses = {
      email: { u: "What is the booking email?", a: `📧 Email: ${artist.email}` },
      phone: { u: "What is the contact number?", a: `📞 Phone: ${artist.phone}` },
    };
    
    const choice = responses[type];
    setMessages((p) => [...p, { role: "user", text: choice.u }, { role: "ai", text: choice.a }]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((p) => [...p, { role: "user", text: input }]);
    setInput("");
  };

  return (
    // FIX 2: The 'key' ensures the component is destroyed/rebuilt on change
    <div key={artist?.id} className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen ? (
        <button 
          type="button" // Force type button to prevent form-like behavior
          onClick={() => setIsOpen(true)} 
          className="bg-orange-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-2"
        >
          <MessageCircle size={28} />
          <span className="font-bold">Chat with {artist.name}</span>
        </button>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 w-[350px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-zinc-800 p-4 flex justify-between items-center shrink-0">
            <p className="text-white font-bold text-sm">{artist.name} Assistant</p>
            <button onClick={() => setIsOpen(false)}><X size={20} className="text-zinc-400" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${m.role === "user" ? "bg-orange-400 text-white" : "bg-zinc-800 text-zinc-100"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
            <button type="button" onClick={() => handleResponse('email')} className="bg-zinc-800 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-[11px] whitespace-nowrap">Email</button>
            <button type="button" onClick={() => handleResponse('phone')} className="bg-zinc-800 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-[11px] whitespace-nowrap">Phone</button>
          </div>

          <form onSubmit={handleSend} className="p-4 bg-zinc-800/50 flex gap-2 shrink-0">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-black text-white border border-zinc-700 rounded-full px-4 py-1 text-sm outline-none" 
              placeholder="Type..." 
              tabIndex="-1" // FIX 3: Prevents the browser from auto-focusing this field
            />
            <button type="submit" className="bg-orange-500 text-white p-2 rounded-full">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}