import React from "react";
import { Shield, Heart, Scale, Check } from "lucide-react";

function Message() {
  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[70%] rounded-xl mx-auto py-8 sm:py-10 lg:py-12 bg-[#122124c9] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-10">
          <h2 className="text-xs sm:text-sm font-bold text-[#CFA80F] tracking-wider uppercase mb-3 sm:mb-4">
            From the Founder
          </h2>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            A Personal <span className="text-[#CFA80F]">Message</span>
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-200 max-w-2xl text-center leading-relaxed px-2">
            I didn't choose this mission because it's easy. I chose it because
            it's needed.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-200 max-w-2xl text-center leading-relaxed px-2">
            After hosting Muslims — families, individuals, retreats — and seeing
            their peace when they could pray without searching, eat without
            worry, and travel without compromise…
          </p>

          <span className="text-[#CFA80F] font-bold text-base sm:text-lg md:text-xl">
            I know this path is right.
          </span>

          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-200 max-w-2xl text-center leading-relaxed px-2">
            I'm tired of seeing my brothers and sisters overcharged and
            betrayed. So I decided to act.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-8 sm:my-10 lg:my-12">
            <div className="w-8 sm:w-10 md:w-12 h-px bg-[#CFA80F]" />
            <div className="w-2 h-2 rounded-full bg-[#CFA80F]" />
            <div className="w-8 sm:w-10 md:w-12 h-px bg-[#CFA80F]" />
          </div>

          {/* Signature */}
          <div className="-mt-4 sm:-mt-6 text-center px-2">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#CFA80F] italic mb-2">
              With respect and du'a,
            </p>
            <p className="font-serif text-base sm:text-lg md:text-xl text-[#CFA80F] font-semibold">
              The Abu Retreats Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
