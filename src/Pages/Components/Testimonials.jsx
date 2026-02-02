import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import all testimonial videos
import AbdoulFirst from "../../assets/Testimonials TBD/Abdoul Hakeem/FIRST 1_1.mp4";
import AliVideo from "../../assets/Testimonials TBD/ali.paidads/768f7754eb9c43bd904edebe88e9cf58.mov";
import AmanFirst from "../../assets/Testimonials TBD/Aman (The Muslim sales guy)/FIRST 1.mp4";
import AmmarVideo from "../../assets/Testimonials TBD/Ammar/d65802c34bff45d2b65dd7db3a4f2d9a.mov";
import MohammedVideo from "../../assets/Testimonials TBD/Mohammed/a5f1c9a3f68c49f2b2428e929b44e043.mov";
import MutasimVideo from "../../assets/Testimonials TBD/Mutasim Sultan/6a5fc45b1dad4ad391ed9906f597c5e7.mov";
import OmarVideo from "../../assets/Testimonials TBD/Omar Varlet/064951e24f5249029798845f23493226.mov";
import OussmaVideo from "../../assets/Testimonials TBD/Oussama/c2517c9755ca422c9a17af4d25853939.mov";
import ShamsVideo from "../../assets/Testimonials TBD/Shams _ Videographer/8effb220b6f94be58f97eacaa927b0ec.mov";

const testimonialVideos = [
  { name: "Abdoul Hakeem", video: AbdoulFirst, index: 1 },
  { name: "Ali Paidads", video: AliVideo, index: 1 },
  { name: "Aman", video: AmanFirst, index: 1 },
  { name: "Ammar", video: AmmarVideo, index: 1 },
  { name: "Mohammed", video: MohammedVideo, index: 1 },
  { name: "Mutasim Sultan", video: MutasimVideo, index: 1 },
  { name: "Omar Varlet", video: OmarVideo, index: 1 },
  { name: "Oussama", video: OussmaVideo, index: 1 },
  { name: "Shams", video: ShamsVideo, index: 1 },
];

function Testimonials() {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  React.useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      // Stop video when slide changes
      const handleSlideChange = () => {
        const videos = document.querySelectorAll("video");
        videos.forEach((video) => {
          video.pause();
        });
      };

      swiperInstance.on("slideChange", handleSlideChange);

      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperInstance]);

  return (
    <div className="testimonials w-full py-16 lg:py-24 flex justify-center items-center overflow-x-hidden">
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
            What Our Guests Say
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Stories from{" "}
            <span className="text-[#CFA80F]">Real Travelers</span>
          </p>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience the joy and wonder through the eyes of our guests who
            have embarked on unforgettable journeys with Travel By Design
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl overflow-visible px-16 w-[50%] mx-auto pb-12">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={setSwiperInstance}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              //   pagination={{
              //     clickable: true,
              //     dynamicBullets: true,
              //   }}
              spaceBetween={0}
              slidesPerView={1}
              className="py-8"
            >
              {testimonialVideos.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center !bg-transparent"
                >
                  <div className="w-full max-w-full flex flex-col items-center justify-center relative bg-transparent gap-4 overflow-hidden">
                    <video
                      src={testimonial.video}
                      controls
                      controlsList="nodownload"
                      className="w-fit h-auto max-h-[80vh] object-contain rounded-2xl border-2 border-[#CFA80F] border-opacity-20"
                      playsInline
                    ></video>

                    <p className="text-[#CFA80F] font-bold text-xl tracking-widest uppercase mt-4 hover:text-[#e8c127] transition-colors duration-300">
                      {testimonial.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={prevRef}
              className="swiper-prev-btn cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 
                bg-[#CFA80F] hover:bg-[#e8c127] text-black p-3 rounded-full 
                transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              ref={nextRef}
              className="swiper-next-btn absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 
                bg-[#CFA80F] hover:bg-[#e8c127] text-black p-3 rounded-full 
                transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .testimonials .swiper-pagination {
          bottom: -24px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }

        .testimonials .swiper-pagination-bullet {
          background-color: rgba(207, 168, 15, 0.4);
          width: 10px;
          height: 10px;
        }

        .testimonials .swiper-pagination-bullet-active {
          background-color: #CFA80F;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
