import React from "react";
import {
  ArrowRight,
  Rocket,
  Code,
  Gem,
  UserRoundPlus,
  ArrowDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroPic from "../../assets/hero-morocco.jpg";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative z-10 p-8 text-center space-y-6 md:space-y-8 pt-20 pb-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight animate-fade-in-up text-white">
          Halal Journeys in Morocco
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#e8c127] via-[#e8c127] to-[#e8c127] mt-2 animate-gradient bg-[length:200%_auto]">
            Abu Retreats
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-md md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Custom-designed halal travel experiences in Morocco — built on trust,
          transparency, and brotherhood.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 items-center animate-fade-in-up mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          <Link to="#contact-us">
            <button
              className="group cursor-pointer relative px-6 h-14 min-w-[280px]
              bg-linear-to-r from-[#CFA80F] to-[#CFA80F] text-white font-bold rounded-xl
              hover:from-[#CFA80F] hover:to-[#CFA80F]
              transition-all duration-300 shadow-[0_0_30px_rgba(101,137,28,0.3)]
              hover:scale-105 flex items-center gap-3 justify-center overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#CFA80F]/20 to-transparent
                -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />

              <Gem className="w-5 h-5" />
              <span>Book a Free Consultation</span>
            </button>
          </Link>

          <Link to="devlopment">
            <button
              className="group cursor-pointer relative px-6 h-14 min-w-[280px]
              bg-[#1f4121] text-white font-bold rounded-xl border-2 border-[#1f4121]
               hover:text-white
              transition-all duration-300 shadow-lg hover:scale-105
              flex items-center gap-3 justify-center overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#65891c]/10 to-transparent
                -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />

              <UserRoundPlus className="w-5 h-5" />
              <span>Follow @aburetreats</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <span className="text-[#e8c127] text-2xl italic font-bold">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </span>
          <span>
            <ArrowDown className="scale-140 text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
