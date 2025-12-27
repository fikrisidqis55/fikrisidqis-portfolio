"use client";

import type React from "react";

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
    <section id="contact" className="relative pt-24">
      <div className="container mx-auto px-6 relative z-6s">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&#39;s Connect
          </h2>
          <p className="max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out using
            the form below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <LuMessageSquare size={28} />
              </div>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                Your message has been sent successfully! I&apos;ll get back to
                you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg">
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 focus:outline-none focus:ring-2 border border-white/10"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 focus:outline-none focus:ring-2 border border-white/10"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 focus:outline-none focus:ring-2 border border-white/10 resize-none"
                  required
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <LuSend size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
