import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#our-story" },
    { name: "Our Ideology", href: "#our-ideology" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact", href: "#contact-us" },
  ];

  const services = [
    { name: "Marketing", href: "/lead-generation" },
    { name: "Development", href: "/development" },
    { name: "Consulting", href: "/lead-generation" },
  ];

  return (
    <footer className="bg-[#122124] text-white relative overflow-hidden mt-30">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#CFA80F] via-[#CFA80F] to-[#CFA80F]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFA80F]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CFA80F]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 -mt-14">
              {/* <h2 className="text-3xl font-black bg-linear-to-r from-[#CFA80F] to-[#CFA80F] bg-clip-text text-transparent">
                 Stallion Advertising
              </h2> */}
              <img src={logo} alt="" width="200px" />
              <div className="w-16 h-1 bg-linear-to-r from-[#CFA80F] to-[#CFA80F] -mt-12 rounded-full"></div>
            </div>
            <p className="text-white leading-relaxed mb-6">
              Halal Journeys in Morocco — designed with ethics, trust, and
              brotherhood at heart.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-[#CFA80F]">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#CFA80F] transition-colors text-sm"
                />
                <button className="px-4 py-2 bg-[#CFA80F] hover:bg-[#CFA80F] text-white hover:text-[#CFA80F] rounded-r-lg transition-all duration-300 flex items-center justify-center group">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-lg mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#CFA80F] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-[#CFA80F] transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#CFA80F] mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-lg mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#CFA80F] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-200 hover:text-[#CFA80F] transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#CFA80F] mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-black text-lg mb-6 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#CFA80F] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-200 text-sm group">
                <MapPin className="w-5 h-5 text-[#CFA80F] shrink-0 mt-0.5 group-hover:text-[#CFA80F] transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">
                  Randome Adresse
                  <br />
                  Casablanca, 2000
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-200 text-sm group">
                <Phone className="w-5 h-5 text-[#CFA80F] shrink-0 group-hover:text-[#CFA80F] transition-colors" />
                <a
                  href="tel:+1234567890"
                  className="group-hover:text-gray-300 transition-colors"
                >
                  +212 649-557449
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-200 text-sm group">
                <Mail className="w-5 h-5 text-[#CFA80F] shrink-0 group-hover:text-[#CFA80F] transition-colors" />
                <a
                  href="mailto:hello@yourbrand.com"
                  className="group-hover:text-gray-300 transition-colors"
                >
                  advertisingstallion@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-bold text-sm mb-3 text-[#CFA80F]">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/stallion_advertising/",
                    label: "Instagram",
                  },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#CFA80F] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group border border-gray-700 hover:border-[#CFA80F]"
                  >
                    <social.icon className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm text-center md:text-left">
              &copy; {currentYear} Travel By Design. All rights reserved.
            </p>

            {/* <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a
                href="/privacy"
                className="text-white hover:text-[#CFA80F] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white hover:text-[#CFA80F] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-white hover:text-[#CFA80F] transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
