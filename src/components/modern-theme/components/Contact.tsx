"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuSend, LuMessageSquare } from "react-icons/lu";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const { name, email, message } = formData;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err: unknown) {
      console.log("err", err);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-24 text-white relative">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF5700]">
            Let&#39;s Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out using
            the form below.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#1A120B] to-[#2A1E17] p-8 rounded-xl shadow-2xl border border-[#3A2A22]"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#FF5700]/10 flex items-center justify-center">
                <LuMessageSquare size={28} className="text-[#FF5700]" />
              </div>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
                Your message has been sent successfully! I&apos;ll get back to
                you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400">
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5700] border border-[#3A2A22]"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5700] border border-[#3A2A22]"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5700] border border-[#3A2A22] resize-none"
                  required
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#FF5700] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#FF9100] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <LuSend size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
