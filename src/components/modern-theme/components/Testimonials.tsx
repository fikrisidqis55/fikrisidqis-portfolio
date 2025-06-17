"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Fikri delivered exceptional work on our web application. His attention to detail and technical expertise made the project a huge success.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with Fikri was a game-changer for our team. He brought innovative solutions and delivered high-quality code consistently.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Agency",
    content: "Fikri's ability to translate designs into pixel-perfect implementations is outstanding. Highly recommend for any web development project.",
    rating: 5,
    avatar: "ER"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 text-white relative">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF5700]">
            What Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1A120B] to-[#2A1E17] p-8 md:p-12 rounded-xl border border-[#3A2A22] text-center"
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <LuStar key={i} className="w-6 h-6 text-[#FF9100] fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#FF5700] rounded-full flex items-center justify-center text-white font-bold">
                {currentTestimonial.avatar}
              </div>
              <div className="text-left">
                <div className="text-[#FF9100] font-semibold">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-[#1A120B] border border-[#3A2A22] rounded-full hover:border-[#FF5700] transition-colors"
            >
              <LuChevronLeft className="w-5 h-5 text-[#FF5700]" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#FF5700]" : "bg-[#3A2A22]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-[#1A120B] border border-[#3A2A22] rounded-full hover:border-[#FF5700] transition-colors"
            >
              <LuChevronRight className="w-5 h-5 text-[#FF5700]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}