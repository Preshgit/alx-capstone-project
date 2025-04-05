"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define types for motion props
interface MotionProps {
  initial: {
    opacity: number;
    x: number;
  };
  animate: {
    opacity: number;
    x: number;
  };
  transition: {
    duration: number;
    delay: number;
  };
}

// Define props for the ContactForm component
interface ContactFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  loadingText?: string;
  onSubmit?: (data: FormData) => Promise<void>;
  initialFormData?: FormData;
  motionProps?: MotionProps;
}

const ContactForm = ({
  title = "Contact Us",
  subtitle = "Have questions, feedback, or just want to say hello? We'd love to hear from you!",
  buttonText = "Send Message",
  loadingText = "Sending...",
  onSubmit,
  initialFormData = { name: "", email: "", message: "" },
  motionProps = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.2 },
  },
}: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission behavior if no onSubmit provided
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
      }
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={motionProps.initial}
      animate={motionProps.animate}
      transition={motionProps.transition}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      )}

      {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="What would you like to tell us?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? loadingText : buttonText}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
