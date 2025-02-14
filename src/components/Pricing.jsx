import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

const pricingPlans = [
  {
    id: 1,
    title: "Standalone Package",
    description: "Perfect for businesses needing a one-time high-quality design. Ideal for branding, social media, or UI design.",
    price: "Custom Quote",
    features: [
      "Clearly Defined Scope",
      "Fixed Timeline",
      "Brand Identity Design",
      "Social Media Design",
      "Website or Mobile App UI Design",
      "Website and Web Application Development",
      "Custom Illustrations & Graphics",
      "3 Rounds of Revisions",
    ],
    buttonText: "Order Now",
    buttonLink: "#",
    footerText: "Let's discuss your project",
  },
  {
    id: 2,
    title: "Full Branding Package",
    description: "Get unlimited high-quality designs every month. Best for businesses needing ongoing creative support.",
    price: "$999/month ",
    features: [
      "No contracts or commitments",
      "Pause or Cancel Anytime",
      "Unlimited Design Requests",
      "Multiple Brands",
      "Priority Support & Fast Delivery",
      "Branding, UI/UX, Social Media, Ads",
      "Website and Web Application Development",
      "Unlimited Revisions",
    ],
    buttonText: "Order Now",
    buttonLink: "#",
    footerText: "Cancel anytime",
  },
];

const PricingTable = () => {
  return (
    <div className="mx-4 flex mt-10 flex-col justify-center pb-20 items-center">
      <div className="mx-2 max-w-4xl text-center">
        <h2 className="text-[18px] font-semibold text-gray-900 uppercase dark:text-white">Pricing</h2>
        <p className="mt-2 text-[36px] leading-[36px] font-bold font-customFont text-gray-900 dark:text-white">
          Choose The Right Plan For You
        </p>
        <p className="mt-4 text-[18px]  text-gray-600 dark:text-gray-300">
          Choose an affordable plan that’s packed with the best features for engaging your audience,
          creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="py-8 px-2 lg:p-8 mx-1">
        <div className="flex  rounded-3xl flex-col bg-black  dark:bg-gray-800 lg:flex-row justify-center items-center gap-1 lg:max-w-[700px] p-1">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="w-full max-w-sm border border-black  dark:border-gray-400 rounded-3xl p-6 bg-white dark:bg-gray-700 dark:hover:bg-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Title & Description */}
            <h3 className="text-2xl font-customFont dark:text-white text-black">{plan.title}</h3>
            <p className="text-gray-600 dark:text-white mt-2 text-sm">{plan.description}</p>

            {/* Divider */}
            <div className="border-t-2 border-gray-300 dark:border-gray-200 w-full my-4"></div>

            {/* Price */}
            <div className="text-3xl font-customFont dark:text-white text-black">{plan.price}</div>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-white flex-1">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-baseline text-[13px] dark:text-white space-x-2">
                  <FaIcons.FaCheck/> <span className="text-[13px]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <a
              href={plan.buttonLink}
              className="mt-6 bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white dark:font-bold text-white text-center py-2 rounded-lg hover:bg-gradient-purple-blue dark:hover:bg-lightBlue transition block"
            >
              {plan.buttonText}
            </a>

            {/* Footer Text */}
            {/* <p className="text-gray-400 text-center mt-2">{plan.footerText}</p> */}
          </div>
        ))}
      </div>
      </div>
    </div>
  
  );
};

export default PricingTable;
