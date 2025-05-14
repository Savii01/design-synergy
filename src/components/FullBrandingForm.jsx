import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const FullBrandingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designStyle: "",
    businessGoals: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_p8qel8i',
      'template_fullbranding',
      formData,
      'Y21i1oUIg68Guej_s'
    ).then(() => {
      setIsSubmitted(true);
      setShowAlert(true);

      // Hide alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      // Optional: Clear form
      setFormData({
        name: "",
        email: "",
        designStyle: "",
        businessGoals: "",
      });
    }).catch((error) => {
      console.error("EmailJS error:", error);
    });
  };

  const whatsappMessage = `Hello! I have chosen the Full Branding Package. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Preferred Design Style: ${formData.designStyle}
Business Goals: ${formData.businessGoals}`;

  const whatsappLink = `https://wa.me/2347012636013?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-3xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-customFont mb-6 text-gray-900 dark:text-white">Full Branding Package Form</h2>

      {showAlert && (
        <div className="px-4 py-3 mb-4 text-white bg-blue rounded">
          ✅ Your form was submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Preferred Design Style</label>
          <select
            name="designStyle"
            value={formData.designStyle}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">Select style</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Modern">Modern</option>
            <option value="Playful">Playful</option>
            <option value="Corporate">Corporate</option>
            <option value="Futuristic">Futuristic</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Business Goals</label>
          <textarea
            name="businessGoals"
            value={formData.businessGoals}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" required className="w-4 h-4" />
          <label className="text-gray-700 dark:text-gray-300 text-sm">
            I consent to having my information stored for project communication.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple text-white py-3 rounded-md hover:bg-purple-700 transition"
        >
          Submit
        </button>

        {isSubmitted && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center w-full bg-gray-600 dark:bg-gray-200 dark:text-black text-white py-3 rounded-md hover:bg-green hover:text-black transition"
          >
            Send to WhatsApp
          </a>
        )}
      </form>
    </div>
  );
};

export default FullBrandingForm;