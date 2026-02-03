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
import AliVideo from "../../assets/Testimonials TBD/ali.paidads/768f7754eb9c43bd904edebe88e9cf58.mp4";
import AmanFirst from "../../assets/Testimonials TBD/Aman (The Muslim sales guy)/FIRST 1.mp4";
import AmmarVideo from "../../assets/Testimonials TBD/Ammar/d65802c34bff45d2b65dd7db3a4f2d9a.mp4";
import MohammedVideo from "../../assets/Testimonials TBD/Mohammed/a5f1c9a3f68c49f2b2428e929b44e043.mp4";
import MutasimVideo from "../../assets/Testimonials TBD/Mutasim Sultan/6a5fc45b1dad4ad391ed9906f597c5e7.mp4";
import OmarVideo from "../../assets/Testimonials TBD/Omar Varlet/064951e24f5249029798845f23493226.mp4";
import OussmaVideo from "../../assets/Testimonials TBD/Oussama/c2517c9755ca422c9a17af4d25853939.mp4";
import ShamsVideo from "../../assets/Testimonials TBD/Shams _ Videographer/8effb220b6f94be58f97eacaa927b0ec.mp4";

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
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  React.useEffect(() => {
    if (swiperInstance) {
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm font-bold text-[#CFA80F] tracking-wider uppercase mb-4">
            What Our Guests Say   
          </h2>
          <p className="text-md sm:text-xl lg:text-2xl font-bold text-white mb-6">
            Real Stories from{" "}
            <span className="text-[#CFA80F]">Real Travelers</span>
          </p>
          <p className="text-white text-base sm:text-lg mt-4 mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 sm:px-0 text-center wrap-break-word whitespace-normal">
            Experience the joy and wonder through the eyes of our guests who
            have embarked on unforgettable journeys with Travel By Design
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div
            className="relative rounded-3xl overflow-visible 
              w-full sm:w-[80%] lg:w-[50%] 
              px-4 sm:px-8 lg:px-16 
              mx-auto pb-12"
          >
            <div className="min-h-70">
              <Swiper
                modules={[Pagination]}
                onSwiper={setSwiperInstance}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                touchStartPreventDefault={false}
                spaceBetween={0}
                slidesPerView={1}
                className="py-8"
              >
                {testimonialVideos.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center bg-transparent!"
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
            </div>

            <button
              className="hidden sm:flex swiper-prev-btn cursor-pointer absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 
                bg-[#CFA80F] hover:bg-[#e8c127] text-black p-3 rounded-full 
                transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
              onClick={() => swiperInstance && swiperInstance.slidePrev()}
              disabled={!swiperInstance}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="hidden sm:flex swiper-next-btn cursor-pointer absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 
                bg-[#CFA80F] hover:bg-[#e8c127] text-black p-3 rounded-full 
                transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
              onClick={() => swiperInstance && swiperInstance.slideNext()}
              disabled={!swiperInstance}
            >
              <ChevronRight size={28} />
            </button>

            <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
              <button
                className="bg-[#CFA80F] hover:bg-[#e8c127] text-black p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Previous testimonial"
                onClick={() => swiperInstance && swiperInstance.slidePrev()}
                disabled={!swiperInstance}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="bg-[#CFA80F] hover:bg-[#e8c127] text-black p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Next testimonial"
                onClick={() => swiperInstance && swiperInstance.slideNext()}
                disabled={!swiperInstance}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .testimonials .swiper {
          height: auto !important;
        }
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
