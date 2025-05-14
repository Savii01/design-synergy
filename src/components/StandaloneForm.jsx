import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select';

const projectOptions = [
  { value: 'Logo Design', label: 'Logo Design' },
  { value: 'Brand Guide', label: 'Brand Guide' },
  { value: 'Print Design', label: 'Print Design (Business Card, Letterheads, Brochures, etc.)' },
  { value: 'Social Media Design', label: 'Social Media Design' },
  { value: 'Web Design', label: 'Web Design' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'UI/UX Design', label: 'UI/UX Design' },
  { value: 'Illustration', label: 'Illustration' },
  { value: 'Pitch Deck Design', label: 'Pitch Deck Design' },
  { value: 'Motion/Animation', label: 'Motion/Animation' },
];

const styleOptions = [
  { value: 'Minimalist', label: 'Minimalist' },
  { value: 'Modern', label: 'Modern' },
  { value: 'Wordmark', label: 'Wordmark' },
  { value: 'Bold', label: 'Bold' },
  { value: 'Professional', label: 'Professional' },
  { value: 'Playful', label: 'Playful' },
];

const StandaloneForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTypes: [],
    stylePreference: '',
    projectGoals: '',
    consent: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: selectedOptions,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || formData.projectTypes.length === 0 || !formData.consent) {
      return;
    }

    const emailData = {
      name: formData.name,
      email: formData.email,
      projectTypes: formData.projectTypes.map((p) => p.label).join(', '),
      stylePreference: formData.stylePreference || 'Not specified',
      projectGoals: formData.projectGoals || 'Not specified',
    };

    const message = `Hello, I have chosen the standalone package and would like to discuss the scope and pricing.

Name: ${emailData.name}
Email: ${emailData.email}
Project Types: ${emailData.projectTypes}
Style Preference: ${emailData.stylePreference}
Project Goals: ${emailData.projectGoals}`;

    setWhatsappMessage(message);

    emailjs
      .send('service_p8qel8i', 'template_standalone', emailData, 'Y21i1oUIg68Guej_s')
      .then(() => {
        setIsSubmitted(true);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);

        setFormData({
          name: '',
          email: '',
          projectTypes: [],
          stylePreference: '',
          projectGoals: '',
          consent: false,
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  };

  const whatsappLink = `https://wa.me/2347012636013?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-customFont mb-8 leading-[30px] dark:text-white">Standalone Package Form</h2>

      {showAlert && (
        <div className="px-4 py-3 text-white leading-normal bg-blue rounded mb-4">
          ✅ Your message was submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Project Type(s) *</label>
          <Select
            isMulti
            name="projectTypes"
            options={projectOptions}
            value={formData.projectTypes}
            onChange={handleMultiSelectChange}
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '3rem',
                borderRadius: '0.75rem',
                borderColor: '#d1d5db',
                backgroundColor: 'transparent',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: '#1f2937',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#4f46e5' : 'transparent',
                color: state.isFocused ? '#fff' : '#e5e7eb',
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Preferred Design Style</label>
          <select
            name="stylePreference"
            value={formData.stylePreference}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select style (optional)</option>
            {styleOptions.map((style) => (
              <option key={style.value} value={style.value}>{style.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Project Goals</label>
          <textarea
            name="projectGoals"
            rows="4"
            value={formData.projectGoals}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <label className="text-sm text-gray-700 dark:text-gray-200">
            I consent to having my information stored for project communication. *
          </label>
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            className="w-full h-12 bg-purple dark:bg-lightBlue dark:text-black hover:bg-purple-700 text-white font-semibold rounded-xl transition"
          >
            Submit Project
          </button>

          {isSubmitted && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center w-full bg-gray-500 dark:bg-gray-200 dark:text-black text-white py-3 rounded-md hover:bg-green hover:text-black font-semibold transition"
            >
              📤 Send to WhatsApp
            </a>
          )}
        </div>
      </form>
    </div>
  );
};

export default StandaloneForm;