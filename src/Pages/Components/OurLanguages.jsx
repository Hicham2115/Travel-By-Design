import React from "react";
import { MessageCircle, Heart, Sparkles } from "lucide-react";

function OurLanguages() {
  const phrases = [
    {
      icon: Sparkles,
      arabic: "إن شاء الله",
      transliteration: "In shā' Allāh",
      meaning: "If God wills",
    },
    {
      icon: Heart,
      arabic: "بارك الله فيك",
      transliteration: "BarakAllāhu fīk",
      meaning: "May God bless you",
    },
    {
      icon: MessageCircle,
      arabic: "الحمد لله",
      transliteration: "Alhamdulillāh",
      meaning: "Praise be to God",
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#CFA80F] tracking-wider uppercase mb-4">
            Our Language
          </h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Speak
          </p>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Our communication is rooted in gratitude, honesty, and clarity.
          </p>
        </div>

        {/* Phrases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {phrases.map((phrase, index) => {
            const Icon = phrase.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#fbf9f2] rounded-2xl p-2 lg:p-4
                shadow-lg hover:shadow-2xl transition-all duration-300
                border-2 border-gray-100 hover:border-[#CFA80F]
                transform hover:-translate-y-1 text-center "
              > 
                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14
                  bg-gradient-to-br from-[#CFA80F] to-[#e8c127] rounded-xl
                  shadow-md group-hover:shadow-xl group-hover:scale-110
                  transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>

                {/* Arabic Text */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#CFA80F] mb-3
                  group-hover:text-[#b8970d] transition-colors duration-300">
                  {phrase.arabic}
                </h3>

                {/* Transliteration */}
                <p className="text-lg lg:text-xl font-semibold text-gray-800 mb-3 italic">
                  {phrase.transliteration}
                </p>

                {/* Meaning */}
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {phrase.meaning}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br
                  from-[#CFA80F]/5 to-transparent rounded-bl-full opacity-0
                  group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurLanguages;