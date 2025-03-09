import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../Data"; // Import testimonials data

const Testimonial = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-black font-semibold dark:text-white uppercase text-[18px]">
          Testimonials
        </h3>
        <h2 className="text-[36px] font-customFont text-gray-900 dark:text-white mt-2 lg:px-[200px] leading-[36px] text-center">
          See Why so many choose Design Synergy
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.98 }} // Slight shrink when clicked
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 p-6 rounded-lg border-1 border-gray-900 flex flex-col cursor-pointer"
          >
            {/* Review Text with Fade-in Effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 dark:text-white italic"
            >
              "{testimonial.review}"
            </motion.p>

            {/* Profile Image & Name */}
            <div className="flex items-center mt-4">
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
                whileHover={{ scale: 1.2, rotate: 5 }} // Image pops slightly on hover
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-200">
                  {testimonial.businessName}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:justify-center sm:items-center mt-10 sm:flex-row gap-4">
        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base">
          Want to be the next satisfied customer?
        </p>

        {/* Hire Us Button with Bounce Effect */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all"
        >
          Hire Us
        </motion.button>

        {/* Learn More Button with Hover Effect */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-[300px] h-[50px] md:w-[200px] text-black dark:text-white text-[16px] sm:text-[20px] bg-white dark:bg-gray-800 border dark:hover:bg-gray-700 border-black dark:border-gray-600 font-bold py-2 px-6 sm:px-8 rounded-lg transition-all"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonial;
