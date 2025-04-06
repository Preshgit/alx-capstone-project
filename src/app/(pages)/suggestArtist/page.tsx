"use client";

import { motion } from "framer-motion";
import ContactForm from "@/app/components/ContactForm";

export default function SuggestArtist() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-10 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Suggest an Artist
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-4 md:mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Know a talented African artist we should feature? Let us know and
            help us grow our community.
          </motion.p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ContactForm
            formType="artist"
            title="Suggest an Artist"
            description="Know a talented African artist we should feature? Let us know and help us grow our community of creative minds."
            submitButtonText="Submit Suggestion"
            recipientEmail="preciousdesk10@gmail.com"
          />
        </div>
      </section>
    </>
  );
}
