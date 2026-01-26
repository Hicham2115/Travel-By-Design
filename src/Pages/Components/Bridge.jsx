import React from "react";
import { motion } from "framer-motion";
import pic1 from "../../assets/DSC00163.JPG";

function Bridge() {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 xl:py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 mb-8 sm:mb-10 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
            That question stayed with me <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c127] to-[#CFA80F]">
              until I decided to act.
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2">
            Abu Retreats was created to serve Muslims who care about their faith
            while traveling. Not as tourists to be exploited, but as honored
            guests.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative group flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#CFA80F]/15 to-[#e8c127]/15 blur-2xl scale-105 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Image container */}
          <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#CFA80F]/30 group-hover:border-[#CFA80F]/60 transform group-hover:scale-[1.02] transition-all duration-500">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-35 transition-opacity duration-500 z-10" />

            {/* Image */}
            <img
              src={pic1}
              alt="Bridge"
              className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-xl"
            />

            {/* Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#CFA80F]/15 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#CFA80F]/15 to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Bridge;
