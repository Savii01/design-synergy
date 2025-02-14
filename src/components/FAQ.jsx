import React, { useState } from "react";

const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope, but branding and logo projects usually take 1-2 weeks, while full website designs take 3-6 weeks.",
    },
  {
    question: "What kind of services do you offer?",
    answer:
      "We provide branding, website design, and graphic design services tailored for businesses of all sizes.",
  },
  {
    question: "Can you work with my existing brand and designs?",
    answer:
      "Absolutely! We are experienced in working with established brands. We ensure all new designs align perfectly with your existing brand identity and style.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! We include a set number of revisions depending on the package you choose.",
  },
  {
    question: "What makes your design process unique?",
    answer:
      "Our process stands out due to our collaborative approach. We involve you at every stage, ensuring the final product truly reflects your vision while benefiting from our expertise.",
  },
  {
    question: "Do you offer ongoing maintenance and support for completed projects?",
    answer:
      "Yes, We provide post-project support. This includes minor adjustments, answering questions about your new designs for up to 30 days after delivery, And website updates and bug fixes to content management and SEO optimization.  If there's a need for longer support, we can discuss a retainer",
  },
  {
    question: "How do you handle confidentiality and intellectual property rights?",
    answer:
      "At Design Synergy we take confidentiality seriously. All client information and project details are kept strictly confidential. Upon project completion, you'll own full intellectual property rights to the final designs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-gray-900 dark:text-gray-200 font-semibold uppercase text-[18px]">
          FAQs
        </h3>
        <h2 className="text-3xl font-customFont text-gray-900 dark:text-white mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-8 max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-5 rounded-lg border-b border-gray-200">
            <button
                className={`w-full flex justify-between items-center text-left text-[18px] font-medium tracking-tighter text-gray-900 dark:text-white transition-all duration-300 ease-in-out 
                ${openIndex === index ? "translate-y-1" : "translate-y-0"}`}
                onClick={() => toggleFAQ(index)}
                >
                {faq.question}
                <span
                    className={`text-purple dark:text-lightBlue text-[30px] transition-transform duration-300 ease-in-out 
                    ${openIndex === index ? "rotate-180 translate-y-1" : "rotate-0 translate-y-0"}`}
                >
                    {openIndex === index ? "-" : "+"}
                </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 dark:text-gray-400 pr-5 lg:pr-20">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
