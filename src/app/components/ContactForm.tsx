"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

// Define form data types
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ArtistFormData = {
  artistName: string;
  artistLink: string;
  extraNote: string;
};

type FormData = ContactFormData | ArtistFormData;

type ContactFormProps = {
  formType?: "contact" | "artist";
  title: string;
  description: string;
  submitButtonText: string;
  recipientEmail?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export default function ContactForm({
  formType = "contact",
  title,
  description,
  submitButtonText,
  recipientEmail = "preciousdesk10@gmail.com",
  onSuccess = () => {},
  onError = () => {},
}: ContactFormProps) {
  // Set up form state based on form type
  const [formData, setFormData] = useState<FormData>(
    formType === "artist"
      ? {
          artistName: "",
          artistLink: "",
          extraNote: "",
        }
      : {
          name: "",
          email: "",
          message: "",
        }
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Convert form data to a string format for email
      const formDataString = Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const emailData = {
        to: recipientEmail,
        subject:
          formType === "artist"
            ? "New Artist Suggestion"
            : "New Contact Message",
        body: formDataString,
      };

      // In a real implementation, you would set up an API route to handle email sending
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitSuccess(true);

      // Reset the form
      if (formType === "artist") {
        setFormData({
          artistName: "",
          artistLink: "",
          extraNote: "",
        });
      } else {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "There was an error submitting your form. Please try again."
      );
      onError(error instanceof Error ? error : new Error("Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine if we're dealing with artist or contact form data
  const isArtistForm = formType === "artist";
  const artistData = formData as ArtistFormData;
  const contactData = formData as ContactFormData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {isArtistForm ? (
          // Artist Suggestion Form Fields
          <>
            <div>
              <label
                htmlFor="artistName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Artist Name*
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={artistData.artistName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter artist name"
              />
            </div>

            <div>
              <label
                htmlFor="artistLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Artist Website or Social Media Link
              </label>
              <input
                type="url"
                id="artistLink"
                name="artistLink"
                value={artistData.artistLink}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://..."
              />
            </div>

            <div>
              <label
                htmlFor="extraNote"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Extra Notes
              </label>
              <textarea
                id="extraNote"
                name="extraNote"
                value={artistData.extraNote}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us more about this artist..."
              />
            </div>
          </>
        ) : (
          // Contact Form Fields
          <>
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
                value={contactData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                value={contactData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                value={contactData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="What would you like to tell us?"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-indigo-700 transition ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : submitButtonText}
        </button>

        {submitSuccess && (
          <div className="p-3 md:p-4 bg-green-100 text-green-800 rounded-lg text-sm md:text-base">
            Thank you for your {isArtistForm ? "suggestion" : "message"}!
            We&apos;ll review it soon.
          </div>
        )}

        {submitError && (
          <div className="p-3 md:p-4 bg-red-100 text-red-800 rounded-lg text-sm md:text-base">
            {errorMessage ||
              "There was an error submitting your form. Please try again."}
          </div>
        )}
      </form>
    </motion.div>
  );
}
// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";
// import { motion } from "framer-motion";

// // Define types for form data
// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// // Define types for motion props
// interface MotionProps {
//   initial: {
//     opacity: number;
//     x: number;
//   };
//   animate: {
//     opacity: number;
//     x: number;
//   };
//   transition: {
//     duration: number;
//     delay: number;
//   };
// }

// // Define props for the ContactForm component
// interface ContactFormProps {
//   title?: string;
//   subtitle?: string;
//   buttonText?: string;
//   loadingText?: string;
//   onSubmit?: (data: FormData) => Promise<void>;
//   initialFormData?: FormData;
//   motionProps?: MotionProps;
// }

// const ContactForm = ({
//   title = "Contact Us",
//   subtitle = "Have questions, feedback, or just want to say hello? We would love to hear from you!",
//   buttonText = "Send Message",
//   loadingText = "Sending...",
//   onSubmit,
//   initialFormData = { name: "", email: "", message: "" },
//   motionProps = {
//     initial: { opacity: 0, x: 30 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.5, delay: 0.2 },
//   },
// }: ContactFormProps) => {
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (onSubmit) {
//         await onSubmit(formData);
//       } else {
//         // Default submission behavior if no onSubmit provided
//         console.log("Form submitted:", formData);
//         alert("Thank you for your message! We will get back to you soon.");
//       }
//       // Reset form after successful submission
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error sending your message. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={motionProps.initial}
//       animate={motionProps.animate}
//       transition={motionProps.transition}
//     >
//       {title && (
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
//       )}

//       {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Your Name*
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Your Email*
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Message*
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={4}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="What would you like to tell us?"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition ${
//             isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//           }`}
//         >
//           {isSubmitting ? loadingText : buttonText}
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default ContactForm;
