import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function Services() {
  return (
    <div className=''>
        <div className="text-black dark:text-white flex flex-col justify-center items-center text-center mt-10 md:px-4 pb-20 md:pt-10">
        <p className="text-[18px] font-semibold mb-5">Our Service</p>
        <h1 className="font-customFont font-extrabold text-[36px] px-4 md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          Take a look at What we do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                  {/* Subscription / Plan Card */}
                  <div className="bg-white dark:bg-gray-700 hover:bg-gray-100/20 dark:hover:bg-gray-600 flex flex-col border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl w-[350px] h-[300px] px-5">
                    {/* Icon */}
                    <FaIcons.FaPenNib className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
                    <div className="text-left mt-3 flex flex-col gap-y-2">
                      <h1 className="text-[24px] font-extrabold text-black dark:text-white">
                        Brand Designs
                      </h1>
                      <p className="text-[16px] text-black dark:text-gray-300">
                         We craft unique brand identities with strategic design that capture your essence and resonate with your audience.
                      </p>
                    </div>
                  </div>
        
                  {/* Brief Card */}
                  <div className="bg-white dark:bg-gray-700 hover:bg-gray-100/20 dark:hover:bg-gray-600 flex flex-col border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl w-[350px] h-[300px] px-5">
                    {/* Icon */}
                    <FaIcons.FaShareAlt className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
                    <div className="text-left mt-3 flex flex-col gap-y-2">
                      <h1 className="text-[24px] font-extrabold text-black dark:text-white">
                        Social Media Designs 
                      </h1>
                      <p className="text-[16px] text-black dark:text-gray-300">
                      Enhance your online presence with custom, eye-catching visuals designed to boost engagement and build community.
                      </p>
                    </div>
                  </div>
        
                  {/* Design Card */}
                  <div className="bg-white dark:bg-gray-700 hover:bg-gray-100/20 dark:hover:bg-gray-600 flex flex-col border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl w-[350px] h-[300px] px-5">
                    {/* Icon */}
                    <BsIcons.BsCode className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
                    <div className="text-left mt-3 flex flex-col gap-y-2">
                      <h1 className="text-[24px] font-extrabold text-black dark:text-white">
                        Web Development
                      </h1>
                      <p className="text-[16px] text-black dark:text-gray-300">
                      We develop responsive, high-performance websites and web applications that seamlessly blend design and functionality for an exceptional user experience.
                      </p>
                    </div>
                  </div>
                </div>
        </div>
      
    </div>
  )
}

export default Services
