import React from "react";
import {
  CheckCircle,
  Users,
  Target,
  Sparkles,
  ShieldQuestionMark,
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
    <div className="w-full py-16 lg:py-24  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#e8c32e]/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#bafc0c]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="text-xs font-bold text-[#e8c32e] bg-[#105b46] px-4 py-2 rounded-full uppercase tracking-wider border border-[#e8c32e]/20">
                Our Story
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              <span className="text-white">Who We Are</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white leading-relaxed max-w-xl mx-auto lg:mx-0">
              I grew up in a Moroccan city shaped by tourism. For years, I
              watched how travel here was designed almost exclusively for
              non-Muslims — alcohol everywhere, environments that conflict with
              modesty, and a system driven by profit rather than people.
            </p>
            <br />
            <span className="font-bold text-lg text-[#e7c129]">
              At the same time, I kept asking a simple question:
            </span>
            <br />
            <p className="text-lg italic text-white leading-relaxed max-w-xl mx-auto lg:mx-0">
              "Who is taking care of Muslims who want to explore Morocco without
              compromising their dīn?"
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8 mt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-10 h-10 bg-[#e8c32e] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white font-semibold group-hover:text-[#e8c32e] transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <button className="group relative px-8 py-4 bg-[#e8c32e] text-white font-bold rounded-xl hover:bg-[#bafc0c] hover:text-[#e8c32e] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(186,252,12,0.5)] hover:scale-105 flex items-center gap-3 mx-auto lg:mx-0 overflow-hidden">
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span>Learn How It Works</span>
              <CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button> */}
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Top Left - Large Image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-[#bafc0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic1}
                  alt="Strategic planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Top Right - Small Image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-[#bafc0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic3}
                  alt="Strategic planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Right - Medium Image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-[#e8c32e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pic4}
                  alt="Expert execution"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-[#bafc0c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
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
    </div>
  );
}

export default WhoAreWe;
