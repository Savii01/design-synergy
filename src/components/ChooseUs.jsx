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
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont"> Creative + Strategic Thinking</h3>
            <p className="mt-2 text-gray-800 dark:text-white">We don’t just make it look good — we make it make sense. Design meets intention every time.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaMagic className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont">Tailored to Fit</h3>
            <p className="mt-2 text-gray-800 dark:text-white">No templates. No copy-paste. Every project is crafted around your brand’s unique vibe and goals.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaCheckCircle className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont">Fast, Not Rushed</h3>
            <p className="mt-2 text-gray-800 dark:text-white">From design to dev, we move with pace — but never at the cost of quality.
            <br/><i><span className="text-sm">(P.S. Some projects can be delivered in 72 hours — we’ll keep it honest with you.)</span></i></p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:border-2 rounded-2xl">
            <FaIcons.FaUserCheck className="text-purple dark:text-lightBlue text-4xl mb-4" />
            <h3 className="text-xl text-gray-900 dark:text-gray-200 font-customFont">You-First Process</h3>
            <p className="mt-2 text-gray-800 dark:text-white">We listen before we design. Your vision guides the process; our expertise brings it to life.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
