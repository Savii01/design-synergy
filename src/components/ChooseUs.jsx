import React from 'react'
import * as FaIcons from "react-icons/fa";

function ChooseUs() {
  return (
    <div>
      
      <div className="text-black py-12 px-5 lg:px-36 my-10 flex flex-col justify-center gap-5 items-center text-center lg:text-left md:px-10 pb-20 md:pt-10 lg:flex-row lg:gap-[150px]">
        <div className="">
            <h1 className='font-customFont text-[36px] dark:text-white md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[48px]'>
                Why Choose Us
            </h1>

        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 text-left">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaChessKnight className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont"> Creative & Strategic Approach</h3>
            <p className="mt-2 text-gray-800 dark:text-white">We blend aesthetics with functionality.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaMagic className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont">Tailored Solutions</h3>
            <p className="mt-2 text-gray-800 dark:text-white">Every design is customized to fit your brand.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaCheckCircle className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont">Ready in 72 Hours</h3>
            <p className="mt-2 text-gray-800 dark:text-white">Your design, perfected and delivered within 72 hours.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaUserCheck className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont">Client-Centric Processs</h3>
            <p className="mt-2 text-gray-800 dark:text-white">Your vision drives our creativity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
