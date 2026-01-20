import React, { useState } from "react";
import { Phone, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-[90%] lg:w-[60%] rounded-xl mx-auto py-8 lg:py-6 bg-[#122124c9] backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h2 className="text-sm font-bold text-[#CFA80F] tracking-wider uppercase mb-4">
            We'll take care of the rest.
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
            Travel with <span className="text-[#CFA80F]">Peace</span>
          </p>

          <div>
            <button
              onClick={() => {
                window.open(
                  "https://calendly.com/momsvsanxiety/30min",
                  "_blank",
                );
              }}
              className="group cursor-pointer relative h-14 min-w-[200px] 
                        bg-[#1f4121] text-white font-bold rounded-xl border-2 border-[#1f4121]
                         hover:text-white
                        transition-all duration-300 shadow-lg hover:scale-105
                        flex items-center gap-3 justify-center overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#65891c]/10 to-transparent
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />

              <Phone className="w-5 h-5" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-white mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#CFA80F] 
                focus:ring-2 focus:ring-[#CFA80F]/50 transition-all duration-300"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#CFA80F] 
                focus:ring-2 focus:ring-[#CFA80F]/50 transition-all duration-300"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-white mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#CFA80F] 
                focus:ring-2 focus:ring-[#CFA80F]/50 transition-all duration-300"
              placeholder="What's this about?"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#CFA80F] 
                focus:ring-2 focus:ring-[#CFA80F]/50 transition-all duration-300 resize-none"
              placeholder="Tell us about your dream journey..."
              required
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#CFA80F] to-[#e8c127] 
                text-white font-bold text-lg rounded-lg shadow-lg 
                hover:shadow-xl hover:scale-105 transform transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-[#CFA80F]/50"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
