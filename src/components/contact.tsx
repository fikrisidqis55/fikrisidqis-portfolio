import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-[#FF5700]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let&#39;s Connect
        </motion.h2>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:fikrisidqis55@gmail.com"
            className="px-8 py-4 bg-[#FF5700] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#D94E00] transition-transform transform hover:scale-105"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/fikrisidqi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#2A1E17] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#3A2A22] transition-transform transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-[#1A120B] p-8 rounded-xl shadow-2xl backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 text-left">
            <label className="block text-lg font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-2 rounded-lg bg-[#2A1E17] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5700] border border-[#3A2A22]"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block text-lg font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-2 rounded-lg bg-[#2A1E17] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5700] border border-[#3A2A22]"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block text-lg font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 mt-2 rounded-lg bg-[#2A1E17] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5700] border border-[#3A2A22]"
              required
              disabled={loading}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#FF5700] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#D94E00] transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
