import React, { useState } from "react";

const faqs = [
  {
    question: "What is Tokhubflow?",
    answer:
      "Tokhubflow is your gateway to TikTok culture. We help you discover your favorite creators, trending sounds, and viral moments  all in one place, built for listening, watching, and vibing.",
  },
  {
    question: "How does Tokhubflow connect me to creators?",
    answer:
      "We spotlight creators you already love and introduce you to new ones you’ll connect with. Tokhubflow is about building a real bond between fans and TikTok artists through their sounds, clips, and moments.",
  },
  {
    question: "Can I find my favorite TikTok celebrities here?",
    answer:
      "Absolutely. Tokhubflow is designed to bring you closer to your favorite TikTok celebs — from viral artists to rising creators — so you never miss what they drop next.",
  },
  {
    question: "Is Tokhubflow just for music?",
    answer:
      "Not at all. While music is a huge part of TikTok culture, Tokhubflow also highlights creators, trends, and moments that define what’s hot right now.",
  },
  {
    question: "Is Tokhubflow free to use?",
    answer:
      "Yes. Tokhubflow is completely free. Our goal is simple: help fans discover, follow, and build a connection with creators they love.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Got Questions?
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Everything you need to know about discovering creators and staying
            connected to TikTok culture.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`text-orange-500 text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
