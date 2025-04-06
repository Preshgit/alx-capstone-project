"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageSlider from "@/app/components/ImageSlider";
import ContactForm from "@/app/components/ContactForm";
import { FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

// Main About Page Component
export default function About() {
  // Sample images for purpose section
  const purposeImages = [
    { src: "/images/cowHead.jpg", alt: "Traditional African sculpture" },
    { src: "/images/chicken1.jpg", alt: "Contemporary African painting" },
    { src: "/images/ileIla.jpg", alt: "African architecture" },
    { src: "/images/ileIlachair1.jpg", alt: "African furniture design" },
  ];

  // Sample images for creator section
  const creatorImages = [
    { src: "/images/creator-1.jpeg", alt: "Creator portrait" },
    { src: "/images/creator-2.jpeg", alt: "Creator working on design" },
    { src: "/images/creator-3.jpeg", alt: "Creator at exhibition" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  // Handle form submission
  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    // Here you would typically send the data to your backend
    console.log("Form submitted with data:", formData);

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Our Mission
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bridging tradition with innovation to showcase African creativity to
            the world
          </motion.p>
        </div>
      </section>

      {/* Purpose Section - Tile Grid */}
      <motion.section
        className="py-16 px-4 md:px-8 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            variants={fadeIn}
          >
            Our Purpose
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeIn}>
              <ImageSlider
                images={purposeImages}
                className="h-80 lg:h-96 w-full"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-4">
              <p className="text-lg text-gray-700">
                The African Art Celebration platform is designed to showcase and
                promote African art and artists through a modern, visually
                stunning web experience. We aim to bridge the gap between
                talented African creatives and global audiences.
              </p>
              <p className="text-lg text-gray-700">
                Our platform celebrates the rich diversity of African artistic
                expressions—from sculptures and iron bending art to furniture
                design, architecture, and contemporary works. Each piece tells a
                story of heritage, innovation, and cultural identity.
              </p>
              <p className="text-lg text-gray-700">
                By providing visibility to these talented artists, we help them
                gain recognition, build their reputation, and ultimately drive
                sustainable income through their craft. We believe that African
                art deserves the global spotlight it has been denied for too
                long.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Our vision extends beyond mere showcasing—we&apos;re building a
                community that celebrates, preserves, and evolves African
                artistic traditions for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About the Creator Section */}
      <motion.section
        className="py-16 px-4 md:px-8 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            variants={fadeIn}
          >
            The Visionary
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeIn} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">
                My Journey
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                With a diverse background spanning architecture, fashion, and
                now frontend development, I bring a multidisciplinary
                perspective to digital experiences. My architectural training
                taught me to consider both form and function—principles I apply
                to every digital space I create.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This platform represents the culmination of my journey as a
                Capstone Project for the ALX Coding Bootcamp. I couldn&apos;t
                have chosen a more fulfilling project—one that marries my
                technical skills with my passion for African art and culture.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Too often, our African artistic heroes remain unsung, their work
                undervalued and underrepresented on the global stage. This
                project was born from a deep-seated desire to celebrate our
                own—to create a digital space where African creativity can be
                showcased with the prestige and attention it deserves.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Looking ahead, we plan to incorporate e-commerce functionality
                that will allow users to purchase art pieces directly from the
                artists—transforming appreciation into sustainable support for
                these talented creators.
              </p>
              {/* connect with me */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-indigo-800">
                  Connect with Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/precious-omotosho/"
                    className="text-gray-900 hover:text-blue-950"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/preciousomotoshot/"
                    className="text-gray-900 hover:text-blue-950"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>

                  <a
                    href="https://x.com/presh_OT"
                    className="text-gray-900 hover:text-red-950"
                  >
                    <FaSquareXTwitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <ImageSlider
                images={creatorImages}
                className="h-80 lg:h-svh w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      {/* <motion.section
        className="py-16 px-4 md:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            variants={fadeIn}
          >
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols gap-8 px-2 md:px-36 items-center justify-center">
            <motion.div variants={fadeIn}>
              <ContactForm
                title="Get In Touch"
                subtitle="Have questions about our company or services? We would love to hear from you!"
                buttonText="Send Your Message"
                loadingText="Sending..."
                onSubmit={handleFormSubmit}
                initialFormData={{
                  name: "",
                  email: "",
                  message:
                    "I am interested in learning more about your services.",
                }}
                motionProps={{
                  initial: { opacity: 0, x: -30 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, delay: 0.3 },
                }}
              />
            </motion.div>

            <motion.div variants={fadeIn} className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">
                Connect With Me
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We&apos;re always looking to collaborate with artists,
                collectors, and enthusiasts who share our passion for African
                art. Whether you have questions, suggestions, or just want to
                say hello, we&apos;d love to hear from you.
              </p>

              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 text-indigo-900 text-center px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Let&apos;s Talk</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Future Plans Section */}
      {/* <motion.section
        className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-900 to-indigo-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeIn}
          >
            Looking Ahead
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-14 w-14 bg-yellow-400 text-indigo-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">E-Commerce Integration</h3>
              <p>
                Soon, you&apos;ll be able to purchase artworks directly from the
                artists, supporting their work and bringing a piece of African
                creativity into your space.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-14 w-14 bg-yellow-400 text-indigo-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Artist Communities</h3>
              <p>
                We&apos;re developing spaces for artists to connect,
                collaborate, and share resources, fostering a vibrant community
                of African creators.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-14 w-14 bg-yellow-400 text-indigo-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Virtual Exhibitions</h3>
              <p>
                Experience immersive virtual exhibitions featuring curated
                collections from across the continent, bringing the gallery
                experience to your device.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section> */}
    </>
  );
}
