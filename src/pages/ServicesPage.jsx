import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Services from "../components/Services";
import ProjectSlider from "../components/ProjectSlider";
import ChooseUs from "../components/ChooseUs";
import Processes from "../components/Processes";

export default function ServicesPage() {
  const options = { threshold: 0.2 };

  const { ref: heroRef, inView: heroInView } = useInView(options);
  const { ref: servicesRef, inView: servicesInView } = useInView(options);
  const { ref: sliderRef, inView: sliderInView } = useInView(options);
  const { ref: processesRef, inView: processesInView } = useInView(options);
  const { ref: chooseRef, inView: chooseInView } = useInView(options);
  const { ref: ctaRef, inView: ctaInView } = useInView(options);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="h-screen text-left md:text-center px-10 lg:px-[174px] 2xl:px-[300px] lg:justify-center lg:items-center bg-gray-50 flex flex-col gap-y-2 dark:bg-gray-800 py-20 mt-20"
      >
        <p className="text-[18px] font-semibold dark:text-gray-200 uppercase mb-3">
          How we serve you
        </p>
        <h1 className="text-4xl lg:text-[60px] font-customFont leading-[1] tracking-tight text-gray-900 dark:text-gray-100 lg:px-20">
          Design that Connects. Strategy that Converts.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 md:px-10">
          Whether you're building a startup brand or scaling an agency vision,
          we craft bold identities, digital assets, and websites that actually{" "}
          <em>do the job</em>. Looks that stick. Systems that scale.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </button>
          <button className="text-black dark:text-white text-[16px] sm:text-[20px] bg-white dark:bg-gray-800 border dark:hover:bg-gray-700 border-black dark:border-gray-600 font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <Services />
      </motion.div>

      {/* Project Slider */}
      <motion.div
        ref={sliderRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: sliderInView ? 1 : 0, y: sliderInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <ProjectSlider />
      </motion.div>

      {/* Processes */}
      <motion.div
        ref={processesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: processesInView ? 1 : 0, y: processesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <Processes />
      </motion.div>

      {/* Choose Us */}
      <motion.div
        ref={chooseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: chooseInView ? 1 : 0, y: chooseInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <ChooseUs />
      </motion.div>

      {/* Call to Action (CTA) */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 dark:bg-gray-700 py-20"
      >
        <div className="flex flex-col dark:text-gray-200 lg:justify-center lg:items-center mx-5 gap-4 text-left lg:text-center lg:px-[174px]">
          <h1 className="font-customFont leading-[36px] text-[36px]">
            Let's Create Together!
          </h1>
          <p className="lg:px-36">
            At Design Synergy, we go beyond just design—we craft experiences
            that inspire, connect, and elevate brands.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center mx-5 mt-10 sm:flex-row gap-4">
          <button className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </button>
          <button className="w-[300px] h-[50px] md:w-[200px] text-black dark:text-white text-[16px] sm:text-[20px] bg-white dark:bg-gray-800 border dark:hover:bg-gray-700 border-black dark:border-gray-600 font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
}
