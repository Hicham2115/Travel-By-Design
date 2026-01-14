import React from "react";
import { Shield, Heart, Scale, Check } from "lucide-react";

function Message() {
  return (
    <div className="w-[70%] rounded-xl mx-auto py-6 lg:py-10 bg-[#122124c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-sm font-bold text-[#CFA80F] tracking-wider uppercase mb-4">
            From the Founder
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-6">
            A Personal <span className="text-[#CFA80F] ">Message</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-md sm:text-lg text-gray-200 max-w-2xl text-center">
            I didn't choose this mission because it's easy. I chose it because
            it's needed.
          </p>
          <p className="text-md sm:text-lg text-gray-200 max-w-2xl text-center">
            After hosting Muslims — families, individuals, retreats — and seeing
            their peace when they could pray without searching, eat without
            worry, and travel without compromise…
          </p>
          <span className="text-[#CFA80F] font-bold text-lg">
            I know this path is right.
          </span>{" "}
          <p className="text-md sm:text-lg text-gray-200 max-w-2xl text-center">
            I'm tired of seeing my brothers and sisters overcharged and
            betrayed. So I decided to act.
          </p>

          <div className="flex items-center justify-center gap-4 my-12">
            <div className="w-12 h-px bg-[#CFA80F]" />
            <div className="w-2 h-2 rounded-full bg-[#CFA80F]" />
            <div className="w-12 h-px bg-[#CFA80F]" />
          </div>

          <div className="-mt-6">
            <p className="font-serif text-2xl text-[#CFA80F] italic mb-2">
              With respect and du'a,
            </p>
            <p className="font-serif text-xl text-[#CFA80F] font-semibold">
              The Abu Retreats Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
