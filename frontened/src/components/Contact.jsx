import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form data:", data);
    alert("Thanks! Your message has been sent.");
    reset();
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-\s()]{7,}$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Message must be at least 10 characters" },
              })}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              className="mt-1"
              {...register("consent", { required: "Please accept terms to continue" })}
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I agree to be contacted about my enquiry.
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-500 -mt-3">{errors.consent.message}</p>
          )}

          {/* Actions */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="w-32 border border-pink-300 text-pink-600 py-2 rounded-md hover:bg-pink-50 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
