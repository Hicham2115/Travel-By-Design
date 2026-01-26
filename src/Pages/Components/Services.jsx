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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";

import "../../App.css";
import {
  Mousewheel,
  Pagination,
  EffectCoverflow,
  EffectCube,
  EffectCards,
} from "swiper/modules";

import transport1 from "../../assets/Transportation/WhatsApp Image 2026-01-22 at 19.43.31 (2).jpeg";
import transport2 from "../../assets/Transportation/WhatsApp Image 2026-01-22 at 19.43.31.jpeg";
import transport3 from "../../assets/Transportation/WhatsApp Image 2026-01-22 at 19.44.50 (1).jpeg";
import transport4 from "../../assets/Transportation/WhatsApp Image 2026-01-22 at 19.44.50 (6).jpeg";
import transport5 from "../../assets/Transportation/WhatsApp Image 2026-01-22 at 19.44.51 (3).jpeg";
import transport6 from "../../assets/Transportation/WhatsApp Image 2026-01-22 at 19.44.52 (3).jpeg";

import activities1 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.09 (5).jpeg";
import activities2 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.10 (3).jpeg";
import activities3 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.10 (5).jpeg";
import activities4 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.10 (7).jpeg";
import activities5 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.11 (2).jpeg";
import activities6 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.09 (1).jpeg";
import activities7 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.09.jpeg";
import activities8 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.10 (1).jpeg";
import activities10 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.12 (1).jpeg";
import activities11 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.10 (6).jpeg";
import activities12 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.11 (4).jpeg";
import activities13 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.11 (7).jpeg";
import activities14 from "../../assets/Activities/WhatsApp Image 2026-01-22 at 19.43.11 (8).jpeg";

import food1 from "../../assets/Food/Screenshot (22).png";
import food2 from "../../assets/Food/Screenshot (23).png";
import food3 from "../../assets/Food/Screenshot (24).png";
import food4 from "../../assets/Food/Screenshot (25).png";
import food5 from "../../assets/Food/Screenshot (27).png";

function Services() {
  const features = [
    {
      icon: ShieldQuestionMark,
      text: "Private & comfortable (no overcrowded tourist buses)",
    },
    {
      icon: ShieldQuestionMark,
      text: "Punctual and well-planned — no rushing, no chaos",
    },
    {
      icon: ShieldQuestionMark,
      text: "Driven by trusted local professionals",
    },
    {
      icon: ShieldQuestionMark,
      text: "Adapted to your needs (families, elders, retreats, luggage, prayer stops)",
    },
  ];

  const features2 = [
    {
      icon: ShieldQuestionMark,
      text: "Scheduling & coordination",
    },
    {
      icon: ShieldQuestionMark,
      text: "Accommodation check-ins",
    },
    {
      icon: ShieldQuestionMark,
      text: "Prayer time awareness",
    },
    {
      icon: ShieldQuestionMark,
      text: "Activity planning without clashes or pressure",
    },
  ];

  const features3 = [
    {
      icon: ShieldQuestionMark,
      text: "100% halal meals — no uncertainty, no assumptions",
    },
    {
      icon: ShieldQuestionMark,
      text: "Carefully selected restaurants aligned with Islamic values",
    },
    {
      icon: ShieldQuestionMark,
      text: "Options adapted to your needs (families, dietary preferences, simple meals)",
    },
    {
      icon: ShieldQuestionMark,
      text: "Prayer-friendly timing — meals planned around your worship, not rushed schedules",
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

      {/* Section 1: Transportation */}
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
                How We Take Care of You
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-white">
                From Arrival to Return — Travel Without Worry
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2">
              When you travel with Abu Retreats, you are never left to figure
              things out alone. We handle every essential detail so you can
              focus on your journey, your faith, and your peace.
            </p>

            <span className="font-bold text-base text-left sm:text-lg lg:text-xl text-[#e7c129] block mb-2 px-2">
              🚐 Transportation — Safe, Reliable, Respectful{" "}
            </span>

            <p className="text-sm sm:text-base text-left lg:text-lg italic text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2">
              "Your movement matters. We ensure transportation that is:"
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
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper w-full h-full"
              >
                <SwiperSlide>
                  <img
                    src={transport1}
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={transport2}
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={transport3}
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={transport4}
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={transport5}
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={transport6}
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Activities */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper1"
              >
                <SwiperSlide>
                  <img
                    src={activities1}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities2}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities3}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities4}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities5}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities6}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities7}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities8}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities10}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities11}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities12}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities13}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={activities14}
                    alt="Activities"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold text-base sm:text-lg lg:text-xl text-[#e7c129] block mb-2 sm:mb-3 px-2">
              🧭 Guided Experiences & Activities{" "}
            </span>

            <p className="text-sm sm:text-base text-left lg:text-lg italic text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2">
              "At Abu Retreats, activities are not rushed checklists or tourist
              traps designed to move you quickly from one stop to the next. We
              don't believe in overcrowded schedules, forced stops, or
              experiences that feel disconnected from who you are and what you
              value. Instead, every activity is a guided experience, carefully
              planned with intention and care."
            </p>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2">
              {features2.map((feature, index) => (
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
        </div>
      </div>

      {/* Section 3: Food */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold text-base sm:text-lg lg:text-xl text-[#e7c129] block mb-2 sm:mb-3 px-2">
              🍽️ Food — Halal Without Doubt{" "}
            </span>

            <p className="text-sm text-left sm:text-base lg:text-lg italic text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2">
              "Food is not a detail. For Muslims, it is a responsibility, an act
              of care, and a matter of trust. At Abu Retreats, we understand
              that eating halal is not about labels or assumptions — it's about
              certainty. That's why every meal is selected with intention,
              verification, and sincerity. No guessing. No discomfort. No
              awkward questions."
            </p>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2">
              {features3.map((feature, index) => (
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
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[EffectCards, Pagination]}
                className="mySwiper2 w-full h-full"
              >
                <SwiperSlide>
                  <img
                    src={food1}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food2}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food3}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food4}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food5}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20 px-4">
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
          <span className="text-sm sm:text-base">Book Your Free Call</span>
        </button>
      </div>
    </div>
  );
}

export default Services;
