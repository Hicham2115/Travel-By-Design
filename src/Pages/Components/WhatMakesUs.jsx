import React from "react";
import { Shield, Heart, Scale, Check, Phone } from "lucide-react";
import { motion } from "framer-motion";

function WhatMakesUs() {
  const values = [
    {
      icon: Shield,
      title: "Travel by Design",
      description:
        "No packages. No pressure. You choose where you stay, your comfort level, and your budget.",
    },
    {
      icon: Heart,
      title: "Custom-Built",
      description:
        "Every trip is designed around you, not the other way around. Your journey, your rules.",
    },
    {
      icon: Check,
      title: "Halal-Conscious",
      description:
        "Accommodations and experiences that align with your values and faith.",
    },
    {
      icon: Scale,
      title: "Adapted to You",
      description:
        "Perfect for families, individuals, or retreats. We adapt to your unique needs.",
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm font-bold text-[#CFA80F] tracking-wider uppercase mb-4">
            What Makes Us Different
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-6">
            Your Journey, Your Way
          </p>
          <p className="text-md sm:text-lg text-gray-200 max-w-2xl mx-auto">
            We believe travel should be personal, flexible, and aligned with
            your values.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-[#fbf9f2] rounded-2xl p-4 lg:p-4
                shadow-lg hover:shadow-2xl transition-all duration-300
                border border-gray-100 hover:border-[#CFA80F]
                transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Icon Container */}
                <div
                  className="mb-4 inline-flex items-center justify-center w-12 h-12
                    bg-gradient-to-br from-[#CFA80F] to-[#e8c127] rounded-xl
                    shadow-md group-hover:shadow-xl group-hover:scale-110
                    transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg lg:text-xl font-bold text-gray-900 mb-3
            group-hover:text-[#CFA80F] transition-colors duration-300"
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            window.open("https://calendly.com/momsvsanxiety/30min", "_blank");
          }}
          className="group cursor-pointer relative h-14 min-w-[200px] 
                                    bg-gradient-to-r from-[#2d5a2f] to-[#3a7a3d] text-white font-bold rounded-xl 
                                    px-6 border-2 border-[#e8c32e]
                                    hover:text-white hover:shadow-[#e8c32e]/50
                                    transition-all duration-300 shadow-lg hover:scale-102
                                    flex items-center gap-3 justify-center overflow-hidden"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8c32e]/30 to-transparent
                                      -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          />

          <Phone className="w-5 h-5" />
          <span>Book Your Free Call</span>
        </button>
      </div>
    </div>
  );
}

export default WhatMakesUs;
