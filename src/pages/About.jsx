import { FaBolt, FaDollarSign, FaCheckCircle } from "react-icons/fa";
import Values from "../components/Values";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";
import HappyClient from "../Assets/images/happy client.jpg"


export default function About() {
  return (
    <div className="py-12 mt-20 px-6 md:px-12 lg:px-24">
      <div className="text-left md:text-center lg:px-[150px] mb-40">
        <p className="text-[18px] dark:text-gray-200 uppercase my-4">Our Story</p>
        <h1 className="text-4xl font-customFont text-gray-900 dark:text-gray-100 mb-4">Showcasing the Real People and Authentic Vision Behind Our Design Philosophy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
        At Design Synergy, we believe that design is more than just aesthetics—it’s about authenticity, connection, and impact. Behind every project, there are real people, real stories, and real passion. Our approach to design is deeply rooted in understanding brands, crafting their unique identities, and translating their vision into compelling digital experiences.
        </p>
      </div>

      <div className="max-w-5xl mb-40 mx-auto flex flex-col md:flex-row items-center gap-8">
        <img src={HappyClient} alt="Smiling Woman" className="w-full md:w-1/2 md:h-[500px] object-cover rounded-2xl border" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-customFont dark:text-gray-100 text-gray-800 mb-4">We’ve helped over 5K+ Buisnesses level up their online and offline identity.</h2>
          <p className="text-gray-600 dark:text-gray-200 text-lg">
            At Design Synergy, our mission is to provide top-tier, custom-made designs, ensuring businesses establish a strong and memorable presence. We focus on delivering quality services, never rushing projects, and nurturing long-term business growth through impactful designs.
          </p>
        </div>
      </div>
      <Values />
      <Services/>
      <ChooseUs/>

      <div className="flex flex-col dark:text-gray-200 lg:items-center gap-4 text-left lg:text-center lg:px-[150px] mt-5">
        <h1 className="font-customFont leading-[36px] text-[36px]"> Let's Create Together! </h1>
        <p className=""> At Design Synergy, we go beyond just design—we craft experiences that inspire, connect, and elevate brands. Whether you need a bold new identity, a dynamic website, or captivating social media content, we are here to bring your vision to reality. </p>
      </div>
       {/* Buttons */}
       <div className="flex flex-col sm:justify-center sm:items-center mt-10 sm:flex-row gap-4">
          <button className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </button>
          <button className="w-[300px] h-[50px] md:w-[200px]  text-black dark:text-white text-[16px] sm:text-[20px] bg-white dark:bg-gray-800 border dark:hover:bg-gray-700 border-black dark:border-gray-600 font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
    </div>
  );
}
