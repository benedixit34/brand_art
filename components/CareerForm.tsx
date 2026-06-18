"use client";

import { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    services: [] as string[],
  });

  const servicesList = [
    "Brand Strategy",
    "Creative Concept Development",
    "Logo and Visual Identity",
    "Brand Communication",
    "Experience Design",
    "Others",
  ];

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

      <fieldset className="space-y-6">
        <legend className="text-xl font-bold text-gray-800">
          What Service Are You Looking For?
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {servicesList.map((service) => (
            <label key={service} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                value={service}
                checked={formData.services.includes(service)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFormData((prev) => ({
                    ...prev,
                    services: checked
                      ? [...prev.services, service]
                      : prev.services.filter((s) => s !== service),
                  }));
                }}
                className="w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500 accent-teal-600 transition-all duration-500 ease-in-out"
              />
              <span className="text-gray-700 font-light">{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

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