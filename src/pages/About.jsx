import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Values from "../components/Values";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";
import Processes from "../components/Processes";
import HappyClient from "../Assets/images/happy client.jpg";

export default function About() {
  // Continuous animation when scrolling up & down
  const sectionOptions = { threshold: 0.2 }; // Removed triggerOnce

  const { ref: heroRef, inView: heroInView } = useInView(sectionOptions);
  const { ref: imageRef, inView: imageInView } = useInView(sectionOptions);
  const { ref: valuesRef, inView: valuesInView } = useInView(sectionOptions);
  const { ref: servicesRef, inView: servicesInView } = useInView(sectionOptions);
  const { ref: processesRef, inView: processesInView } = useInView(sectionOptions);
  const { ref: chooseUsRef, inView: chooseUsInView } = useInView(sectionOptions);
  const { ref: ctaRef, inView: ctaInView } = useInView(sectionOptions);

  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="text-left md:text-center px-10 lg:px-[174px] mb-20 bg-gray-50 flex flex-col gap-y-5 dark:bg-gray-800 py-20 mt-20"
      >
        <p className="text-[18px] dark:text-gray-200 uppercase ">Our Story</p>
        <h1 className="text-4xl lg:text-[60px] font-customFont leading-[1] tracking-tight text-gray-900 dark:text-gray-100 lg:px-20">
          Showcasing the Real People and Authentic Vision Behind Our Design Philosophy
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 md:px-10">
          At Design Synergy, we believe that design is more than just aesthetics—it’s about authenticity, connection, and impact.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        ref={imageRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="mb-10 mx-5 lg:px-48 flex flex-col md:flex-row justify-center items-center gap-8"
      >
        <img src={HappyClient} alt="Smiling Woman" className="w-full md:w-1/2 md:h-[500px] object-cover rounded-2xl border-gray-700 border-2" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-customFont dark:text-gray-100 text-gray-800 mb-4">
            We’ve helped over 5K+ Businesses level up their online and offline Identity.
          </h2>
          <p className="text-gray-600 dark:text-gray-200 text-lg">
            At Design Synergy, our mission is to provide top-tier, custom-made designs, ensuring businesses establish a strong and memorable presence.
          </p>
        </div>
      </motion.div>

      {/* Animated Sections */}
      <div className="flex flex-col gap-y-10 justify-center items-center">
        
        {/* Values Section */}
        <motion.div 
          ref={valuesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <Values />
        </motion.div>

        {/* Services Section */}
        <motion.div 
          ref={servicesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <Services />
        </motion.div>

        {/* Processes Section */}
        <motion.div 
          ref={processesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: processesInView ? 1 : 0, y: processesInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <Processes />
        </motion.div>

        {/* Choose Us Section */}
        <motion.div 
          ref={chooseUsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: chooseUsInView ? 1 : 0, y: chooseUsInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <ChooseUs />
        </motion.div>
      </div>

      {/* Call to Action (CTA) */}
      <motion.div 
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className=" bg-gray-50 dark:bg-gray-700 py-20"
      >
        <div className="flex flex-col dark:text-gray-200 lg:justify-center lg:items-center mx-5 gap-4 text-left lg:text-center lg:px-[174px]">
          <h1 className="font-customFont leading-[36px] text-[36px]">Let's Create Together!</h1>
          <p className="lg:px-36">
            At Design Synergy, we go beyond just design—we craft experiences that inspire, connect, and elevate brands.
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
