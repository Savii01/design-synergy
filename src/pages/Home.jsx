import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Hero from "../components/Hero";
import TrustedBrands from "../components/TrustedBrands";
import ProjectSlider from "../components/ProjectSlider";
import Processes from "../components/Processes";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

function Home() {
  const sectionOptions = { threshold: 0.2 }; // Animates every time section is in view

  // Create scroll animation triggers
  const { ref: heroRef, inView: heroInView } = useInView(sectionOptions);
  const { ref: brandsRef, inView: brandsInView } = useInView(sectionOptions);
  const { ref: sliderRef, inView: sliderInView } = useInView(sectionOptions);
  const { ref: processesRef, inView: processesInView } = useInView(sectionOptions);
  const { ref: servicesRef, inView: servicesInView } = useInView(sectionOptions);
  const { ref: pricingRef, inView: pricingInView } = useInView(sectionOptions);
  const { ref: testimonialRef, inView: testimonialInView } = useInView(sectionOptions);
  const { ref: faqRef, inView: faqInView } = useInView(sectionOptions);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Trusted Brands Section */}
      <motion.div
        ref={brandsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: brandsInView ? 1 : 0, y: brandsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <TrustedBrands />
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

      {/* Processes Section */}
      <motion.div
        ref={processesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: processesInView ? 1 : 0, y: processesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <Processes />
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

      {/* Pricing Section */}
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <Pricing />
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: testimonialInView ? 1 : 0, y: testimonialInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <Testimonial />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: faqInView ? 1 : 0, y: faqInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <FAQ />
      </motion.div>
    </div>
  );
}

export default Home;
