import React from "react";
import { Shield, Heart, Eye, Scale, Check } from "lucide-react";

function OurIdeology() {
  const values = [
    {
      icon: Heart,
      arabicTitle: "Ṣidq",
      title: "Truthfulness",
      description:
        "Every word we speak and every promise we make is rooted in complete honesty.",
    },
    {
      icon: Shield,
      arabicTitle: "Amānah",
      title: "Trust",
      description:
        "Your journey is a trust we hold sacred. We protect it as our own.",
    },
    {
      icon: Eye,
      arabicTitle: "Wuḍūḥ",
      title: "Transparency",
      description:
        "Clear dealings. No hidden costs, no surprises. What you see is what you get.",
    },
    {
      icon: Scale,
      arabicTitle: "ʿAdl",
      title: "Fair Dealing",
      description:
        "Justice in trade. Fair pricing that honors both you and those who serve you.",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-28 relative overflow-hidden -mt-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm sm:text-base font-semibold text-[#e8c127] mb-3 tracking-widest uppercase">
            Our Ideology
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-white">Muslims First.</span>{" "}
            <span className="text-transparent bg-clip-text bg-[#e8c127]">
              Always.
            </span>
          </h2>
          <p className="text-white max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            Our foundation is built on the timeless principles that guide every
            Muslim life.
          </p>
        </div>

        {/* Values Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-[#fbf9f2] rounded-2xl p-4 sm:p-6 border-2 border-gray-100
            hover:border-[#CFA80F] transition-all duration-500
            hover:shadow-[0_0_40px_rgba(207,168,15,0.2)]
            hover:-translate-y-2 cursor-pointer overflow-hidden
            w-full sm:w-[48%] lg:w-[35%]"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CFA80F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CFA80F] to-[#b8970d] rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Arabic Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#CFA80F] mb-2 group-hover:text-[#b8970d] transition-colors duration-300">
                  {value.arabicTitle}
                </h3>

                {/* English Title */}
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#CFA80F]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CFA80F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-20 mx-auto max-w-2xl text-center
    bg-[#FEFAEE] rounded-2xl p-2 sm:p-4
    border-2 border-gray-100 hover:border-[#CFA80F]
    transition-all duration-500"
      >
        <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
          “O you who believe, do not consume one another’s wealth unjustly, but
          only in lawful business by mutual consent.”
        </p>

        <p className="mt-4 text-sm sm:text-base text-[#CFA80F] font-semibold">
          — Qur’an 4:29
        </p>
      </div>
    </div>
  );
}

export default OurIdeology;
