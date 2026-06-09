"use client";

import { useState } from "react";

export default function GeneralForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    services: [] as string[],
  });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-12">
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
        placeholder="Enter Your Full Name"
        className="w-full border-b-2 border-gray-300 text-base sm:text-lg md:text-xl leading-relaxed pb-3 outline-none focus:border-teal-500 transition-colors"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        placeholder="Enter Your Email Address"
        className="w-full border-b-2 border-gray-300 text-base sm:text-lg md:text-xl leading-relaxed pb-3 outline-none focus:border-teal-500 transition-colors"
      />


      <textarea
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
        placeholder="Write Your Message"
        className="w-full border-b-2 border-gray-300 text-base sm:text-lg md:text-xl leading-relaxed pb-3 outline-none focus:border-teal-500 transition-colors resize-y"
      />

      <button
        type="submit"
        className="self-start inline-block bg-teal-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-sm font-medium text-base sm:text-lg transition-all duration-300 hover:bg-teal-800 hover:scale-105 shadow-md"
      >
        Send Message →
      </button>
    </form>
  );
}