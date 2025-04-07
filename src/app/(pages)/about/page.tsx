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
    { src: "/images/iconicDog.jpg", alt: "Traditional African sculpture" },
    { src: "/images/cowHead.jpg", alt: "Contemporary African painting" },
    { src: "/images/dotun/fela.jpg", alt: "African architecture" },
    {
      src: "/images/jonathan/basorunOgunmola2.jpg",
      alt: "African furniture design",
    },
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
                className="h-80 lg:h-svh w-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
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
    </>
  );
}
