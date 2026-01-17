import React from "react";
import {
  ArrowRight,
  Rocket,
  Code,
  Gem,
  UserRoundPlus,
  // ArrowDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroPic from "../../assets/hero-morocco.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ArrowDown from "../../assets/fleche-vers-le-bas.png";
import Hilal from "../../assets/hilal.png";
import Lampe from "../../assets/lampe.png";
import Arabe from "../../assets/arabe.png";

function Hero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative z-10 p-8 text-center space-y-6 md:space-y-8 pt-20 pb-20">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            Halal Journeys in Morocco
          </span>
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#e8c127] via-[#e8c127] to-[#e8c127] mt-2 animate-gradient bg-[length:200%_auto]">
            Abu Retreats
          </span>
        </motion.h1>

        {/* Hilal - Left side */}
        <motion.img
          src={Hilal}
          alt="Hilal"
          className="absolute opacity-40 -z-10 w-12 md:w-16 lg:w-20 origin-top left-4 md:left-8 lg:left-12 top-16 md:top-20 lg:top-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.4,
            scale: 1,
            rotate: [-15, 15, -15],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { duration: 0.6, delay: 0.3 },
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            },
          }}
        />

        {/* Arabe - Left side */}
        <motion.img
          src={Arabe}
          alt="Arabe"
          className="absolute opacity-20 -z-10 w-22 md:w-16 lg:w-26 origin-top left-4 md:left-8 lg:left-38 top-32 md:top-40 lg:top-88"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.2,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            scale: { duration: 0.6, delay: 0.5 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            },
          }}
        />

        {/* Lamp - Right side */}
        <motion.img
          src={Lampe}
          alt="Lamp"
          className="absolute opacity-10 -z-10 w-12 md:w-16 lg:w-20 origin-top right-4 md:right-8 lg:right-62 top-16 md:top-20 lg:top-42"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.7 },
            scale: { duration: 0.6, delay: 0.7 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.3,
            },
          }}
        />

        {/* Subheading */}
        <motion.p
          className="text-md md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Experience custom halal travel journeys, crafted with trust,
          transparency, and brotherhood for unforgettable, worry-free
          adventures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
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

              <span className="transition-transform duration-300 group-hover:rotate-90">
                <Gem className="w-5 h-5" />
              </span>
              <span>Book a Free Consultation</span>
            </button>
          </Link>

          <a href="https://www.instagram.com/aburetreats/" target="_blank">
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
          </a>
        </motion.div>

        {/* Arabic Text and Arrow */}
        <motion.div
          className="flex flex-col gap-8 mt-8 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <span className="text-white text-2xl italic font-bold">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={ArrowDown} alt="" width={40} />
            {/* <ArrowDown className="scale-140 text-white" /> */}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
