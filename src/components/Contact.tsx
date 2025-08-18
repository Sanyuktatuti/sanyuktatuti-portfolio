"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { personalInfo } from "@/constants";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      setError("");

      const timestamp = new Date().toLocaleString();
      const year = new Date().getFullYear();

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-padding py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-300 mb-12"
        >
          If you're building with purpose, complexity, and a bias to ship, I would love to connect!
          <br />
          I'm always keen to collaborate with fellow researchers and creators.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Connect on LinkedIn
              </h3>
              <p className="text-gray-300 mb-6">
                Let's expand our professional network and stay updated on each
                other's journey.
              </p>
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>Connect on LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default Contact;
