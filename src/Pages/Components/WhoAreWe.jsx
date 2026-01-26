import React from "react";
import {
  CheckCircle,
  Users,
  Target,
  Sparkles,
  ShieldQuestionMark,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

import pic1 from "../../assets/DSC00269.JPG";
import pic2 from "../../assets/DSC00287.JPG";
import pic3 from "../../assets/DSC00373.JPG";
import pic4 from "../../assets/DSC00069.JPG";

function WhoAreWe() {
  const features = [
    { icon: ShieldQuestionMark, text: "Where would they stay?" },
    { icon: ShieldQuestionMark, text: "Who would guide them with honesty?" },
    {
      icon: ShieldQuestionMark,
      text: "Who would treat them as brothers, not numbers?",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#e8c32e]/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#bafc0c]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-bold text-[#e8c32e] bg-[#105b46] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider border border-[#e8c32e]/20">
                Our Story
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-white">Who We Are</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2">
              I grew up in a Moroccan city shaped by tourism. For years, I
              watched how travel here was designed almost exclusively for
              non-Muslims — alcohol everywhere, environments that conflict with
              modesty, and a system driven by profit rather than people.
            </p>

            <span className="font-bold text-base sm:text-lg lg:text-xl text-[#e7c129] block mb-2 sm:mb-3 px-2">
              At the same time, I kept asking a simple question:
            </span>

            <p className="text-sm sm:text-base lg:text-lg italic text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2">
              "Who is taking care of Muslims who want to explore Morocco without
              compromising their dīn?"
            </p>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start sm:items-center gap-2 sm:gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e8c32e] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm sm:text-base text-white font-semibold group-hover:text-[#e8c32e] transition-colors duration-300 text-left">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[350px] sm:h-[450px] lg:h-[500px]">
              {/* Top Left - Large Image */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bafc0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic1}
                  alt="Strategic planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Top Right - Small Image */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bafc0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic3}
                  alt="Strategic planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Left - Medium Image */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8c32e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic4}
                  alt="Expert execution"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Right */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bafc0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic2}
                  alt="Strategic planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 px-4">
        <button
          onClick={() => {
            window.open("https://calendly.com/momsvsanxiety/30min", "_blank");
          }}
          className="group cursor-pointer relative h-12 sm:h-14 min-w-[180px] sm:min-w-[220px] 
                    bg-gradient-to-r from-[#2d5a2f] to-[#3a7a3d] text-white font-bold rounded-xl 
                    px-5 sm:px-6 border-2 border-[#e8c32e]
                    hover:text-white hover:shadow-[0_0_20px_rgba(232,195,46,0.5)]
                    transition-all duration-300 shadow-lg hover:scale-105
                    flex items-center gap-2 sm:gap-3 justify-center overflow-hidden"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8c32e]/30 to-transparent
                      -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          />

          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Start Your Journey</span>
        </button>
      </div>
    </div>
  );
}

export default WhoAreWe;
