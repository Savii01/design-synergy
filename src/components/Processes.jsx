import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import { Link } from "react-router-dom"; // Import React Router Link

function Processes() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-[30px] py-4 my-10">
      < div className="text-black dark:text-white flex flex-col justify-center items-center text-center mt-10  pb-20 md:pt-10">
        <p className="text-[18px] dark:text-gray-200 font-semibold uppercase mb-5">Our Process</p>
        <h1 className="font-customFont text-[36px] px-4 md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          Get the Best of Our Services in 4 quick steps!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-5 lg:mx-24 mt-10">
            {/* Brief Card */}
            <div className="bg-gray-100 dark:bg-gray-700 hover:bg-white/70 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl m px-5">
            {/* Icon */}
            <FaIcons.FaBriefcase className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
            <div className="text-left mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-customFont text-black dark:text-white">
                Brief 
              </h1>
              <p className="text-[16px] text-black dark:text-gray-300">
                We dive into your vision, goals, and requirements. Through a structured onboarding process, we gather insights to ensure our strategy aligns perfectly with your brand.
              </p>
            </div>
          </div>
          
          {/* Subscription / Plan Card */}
          <div className="bg-gray-100 dark:bg-gray-700 hover:bg-white/70 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl m px-5">
            {/* Icon */}
            <AiIcons.AiFillCreditCard className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
            <div className="text-left mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-customFont text-black dark:text-white">
                Subscribe
              </h1>
              <p className="text-[16px] text-black dark:text-gray-300">
                Select a plan that aligns with your business needs. Whether you're starting fresh or scaling up, we have the right solution to bring your brand to life.
              </p>
            </div>
          </div>

        

          {/* Design Card */}
          <div className="bg-gray-100 dark:bg-gray-700 hover:bg-white/70 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl m px-5">
            {/* Icon */}
            <BsIcons.BsPalette className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
            <div className="text-left mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-customFont text-black dark:text-white">
                Design
              </h1>
              <p className="text-[16px] text-black dark:text-gray-300">
                Our team crafts a compelling brand identity and seamless digital experience. From visual aesthetics to functional web solutions, we ensure every detail enhances your brand’s presence.
              </p>
            </div>
          </div>

          {/* Delivery Card */}
          <div className="bg-gray-100 dark:bg-gray-700 hover:bg-white/70 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl m px-5">
            {/* Icon */}
            <AiIcons.AiFillFileZip className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
            <div className="text-left mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-customFont text-black dark:text-white">
                Delivery
              </h1>
              <p className="text-[16px] text-black dark:text-gray-300">
                After final refinements and rigorous quality checks, we deliver a polished, high-performing brand experience—ready to engage your audience and drive results.
              </p>
            </div>
          </div>
        </div>
        <Link to='/hireus' className="mt-10 text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </Link>
      </div>
    </div>
  );
}

export default Processes;
