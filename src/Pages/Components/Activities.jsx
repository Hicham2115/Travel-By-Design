import React from "react";
import {
  Heart,
  Wind,
  Zap,
  Compass,
  Mountain,
  Smile,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

function Activities() {
  const activities = [
    {
      icon: Mountain,
      title: "Horse Riding",
      description: "Experience the thrill of riding through scenic landscapes",
    },
    {
      icon: Wind,
      title: "Hot Air Ballooning",
      description: "Soar above the world with breathtaking aerial views",
    },
    {
      icon: Zap,
      title: "Quad Biking",
      description: "Adventure across rugged terrain and off-road trails",
    },
    {
      icon: Compass,
      title: "Desert Exploration",
      description: "Discover hidden gems and authentic desert culture",
    },
    {
      icon: Heart,
      title: "Wellness Retreat",
      description: "Rejuvenate your mind, body, and soul in peaceful settings",
    },
    {
      icon: Smile,
      title: "Cultural Exchange",
      description: "Connect with local communities and learn their traditions",
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24">
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
            Our Experiences
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-6">
            Unforgettable <span className="text-[#CFA80F]">Activities</span>
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-[#fbf9f2] rounded-2xl p-6 lg:p-8
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
                  className="mb-4 inline-flex items-center justify-center w-14 h-14
                    bg-gradient-to-br from-[#CFA80F] to-[#e8c127] rounded-xl
                    shadow-md group-hover:shadow-xl group-hover:scale-110
                    transition-all duration-300"
                >
                  <IconComponent
                    className="w-7 h-7 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg lg:text-xl font-bold text-gray-900 mb-3
            group-hover:text-[#CFA80F] transition-colors duration-300"
                >
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {activity.description}
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
                                    border-2 border-[#e8c32e] px-6
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

export default Activities;
