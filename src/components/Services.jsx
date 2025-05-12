import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function Services() {
  return (
    <div className=''>
        <div className="text-black dark:text-white flex flex-col justify-center items-center text-center mt-10 md:px-4 pb-20 md:pt-10">
        <p className="text-[18px] font-semibold dark:text-gray-200 uppercase mb-5">Our Services</p>
        <h1 className="font-customFont text-[36px] px-4 md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          Take a look at What we do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 mx-5 lg:mx-24">
                  {/* Subscription / Plan Card */}
                  <div className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl px-5">
                    {/* Icon */}
                    <FaIcons.FaPenNib className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
                    <div className="text-left mt-3 flex flex-col gap-y-2">
                      <h1 className="text-[26px] font-customFont tracking-tight text-black dark:text-white">
                        Brand Designs
                      </h1>
                      <p className="text-[16px] text-black dark:text-gray-300">
                      We don’t just design logos — we build full brand identities that tell your story, earn trust, and make you unforgettable.<br/>
                      <span className="bg-purple/50 dark:text-white dark:bg-lightBlue/50 rounded-lg px-4">→ Think strategy, style, and soul — all in one.</span>
                      
                      </p>
                    </div>
                  </div>
        
                  {/* social Media*/}
                  <div className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl px-5">
                    {/* Icon */}
                    <FaIcons.FaMobileAlt className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
                    <div className="text-left mt-3 flex flex-col gap-y-2">
                      <h1 className="text-[26px] font-customFont tracking-tight text-black dark:text-white">
                        Social Media Designs 
                      </h1>
                      <p className="text-[16px] text-black dark:text-gray-300">
                      Custom visuals that make your feed stop the scroll and speak your vibe. From content kits to cohesive grids, we help you show up consistently and creatively.<br/>
                      <span className="bg-purple/50 dark:text-white dark:bg-lightBlue/50 rounded-lg px-4">→ Build community. Boost engagement. Stay branded.</span>
                      
                      </p>
                    </div>
                  </div>
        
                  {/* Web Development */}
                  <div className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex flex-col border dark:border-2 border-gray-400 dark:border-gray-600 py-8 rounded-3xl px-5">
                    {/* Icon */}
                    <BsIcons.BsGlobe className="w-[32px] h-[32px] text-purple  dark:text-lightBlue" />
                    <div className="text-left mt-3 flex flex-col gap-y-2">
                      <h1 className="text-[26px] font-customFont tracking-tight text-black dark:text-white">
                        Web Development
                      </h1>
                      <p className="text-[16px] text-black dark:text-gray-300">
                      Responsive, clean, and coded to convert. We build websites that aren’t just pretty — they perform.<br/>
                      <span className="bg-purple/50 dark:text-white dark:bg-lightBlue/50 rounded-lg px-4">→ Sleek UX. Smart structure. Real results.</span>
                      
                      </p>
                    </div>
                  </div>
                </div>
                  <button className="mt-10 text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
                    Hire Us
                  </button>
        </div>
      
    </div>
  )
}

export default Services
