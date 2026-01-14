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
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase text-tertiary vaporwave-glow-orange">
            Let&#39;s Connect
          </h2>
          <p className="max-w-2xl mx-auto font-mono text-foreground/70">
            Have a project in mind or want to chat? Feel free to reach out using
            the form below.
          </p>
        </div>

          <div className="max-w-2xl mx-auto">
          <div className="p-8 border border-primary/30 border-t-2 border-t-tertiary bg-card/80 backdrop-blur-md rounded-none shadow-neon-orange">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 border-2 border-tertiary rounded-none flex items-center justify-center text-tertiary rotate-45 hover:rotate-90 transition-transform duration-200 shadow-neon-orange">
                <LuMessageSquare size={28} className="-rotate-45" />
              </div>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-card border-2 border-tertiary rounded-none font-mono text-tertiary shadow-[0_0_15px_rgba(255,153,0,0.4)]">
                Your message has been sent successfully! I&apos;ll get back to
                you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-card border-2 border-primary rounded-none font-mono text-primary shadow-[0_0_15px_rgba(255,0,255,0.3)]">
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-mono uppercase tracking-wider mb-2 text-tertiary">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b-2 border-tertiary bg-black text-tertiary font-mono text-lg rounded-none focus-visible:border-tertiary focus-visible:shadow-neon-orange focus-visible:outline-none placeholder:text-tertiary/50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-mono uppercase tracking-wider mb-2 text-tertiary">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b-2 border-tertiary bg-black text-tertiary font-mono text-lg rounded-none focus-visible:border-tertiary focus-visible:shadow-neon-orange focus-visible:outline-none placeholder:text-tertiary/50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-mono uppercase tracking-wider mb-2 text-tertiary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 border-b-2 border-tertiary bg-black text-tertiary font-mono text-lg rounded-none resize-none focus-visible:border-tertiary focus-visible:shadow-neon-orange focus-visible:outline-none placeholder:text-tertiary/50"
                  required
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full px-6 py-4 h-14 text-lg font-mono uppercase tracking-wider border-2 border-tertiary bg-transparent text-tertiary rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:bg-tertiary hover:text-black hover:shadow-neon-orange flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                {!loading && <LuSend size={18} className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
