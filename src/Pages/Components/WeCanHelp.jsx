import React from "react";
import { Check, Zap, Target, Users, Rocket, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Development",
    description:
      "Custom web and software development focused on performance, scalability, and real business impact",
    features: [
      "Modern Web & SaaS Development",
      "API & Backend Architecture",
      "Performance & Security Optimization",
    ],
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description:
      "Data-driven strategies designed to attract, qualify, and convert high-quality leads for your business",
    features: [
      "Landing Pages & Funnels",
      "Paid Ads (Google & Meta)",
      "CRM & Lead Automation",
    ],
  },

  // {
  //   icon: Rocket,
  //   title: "Brand Development",
  //   description:
  //     "Create a memorable identity that resonates with your audience and stands out",
  //   features: ["Brand Identity", "Visual Design", "Brand Guidelines"],
  // },
  // {
  //   icon: Users,
  //   title: "Web Development",
  //   description:
  //     "Fast, secure, and scalable websites built with cutting-edge technology",
  //   features: ["Custom Websites", "E-commerce", "Web Applications"],
  // },
  // {
  //   icon: TrendingUp,
  //   title: "Analytics & Insights",
  //   description:
  //     "Data-driven decisions powered by advanced analytics and reporting",
  //   features: ["Performance Tracking", "User Behavior", "ROI Analysis"],
  // },
  // {
  //   icon: Check,
  //   title: "Consulting Services",
  //   description:
  //     "Expert guidance to optimize operations and accelerate business growth",
  //   features: ["Business Strategy", "Process Optimization", "Team Training"],
  // },
];

function WeCanHelp() {
  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" id="Services">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#ace044] bg-[#bafc0c]/20 px-4 py-2 rounded-full uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            We Can Help You
            <span className="text-[#ace044]"> With Following</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Comprehensive solutions designed to elevate your business and drive
            sustainable growth in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm
              group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100
              hover:border-[#65891c] transition-all duration-500
              hover:shadow-[0_0_30px_rgba(186,252,12,0.3)]
              hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#65891c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#65891c] rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#bafc0c] group-hover:rotate-6 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-white transition-colors duration-500 group-hover:text-[#65891c]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-black mb-3 group-hover:text-[#65891c] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-black mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#65891c]/10 flex items-center justify-center mr-3 shrink-0 group-hover:bg-[#bafc0c]/30 transition-colors duration-300">
                        <Check className="w-3 h-3 text-[#65891c]" />
                      </div>
                      <span className="text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#bafc0c]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 bg-[#65891c] text-white font-bold rounded-xl hover:bg-[#bafc0c] hover:text-[#65891c] transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-white text-[#65891c] font-bold rounded-xl border-2 border-[#65891c] hover:bg-[#65891c] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WeCanHelp;
