import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import Brief1 from '../Assets/images/brief1.3e327d7e0961bf467fd8.png'
import Design1 from '../Assets/images/delivery1.eba86ac6c70aa03225cb.png'
import Delivery1 from '../Assets/images/delivery1.eba86ac6c70aa03225cb.png'

function Processes() {
  return (
    <div className="bg-gray-100 mx-14 rounded-[30px] mb-10">
      <div className="text-black flex flex-col justify-center items-center text-center mt-10 md:px-4 pb-20 md:pt-10">
        <p className="text-[16px] font-semibold mb-5">Our Process</p>
        <h1 className="font-sans font-extrabold text-[32px] px-4 md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
            Create your design in 3 quick steps!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-gray-100 hover:bg-white/70 flex flex-col border-2 border-gray-400 py-8 rounded-3xl w-[290px] h-[260px] px-5">
            {/* <img 
            src={Brief1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" /> */}
            <AiIcons.AiFillCreditCard className="w-[32px] h-[32px] text-purple"/>
            <div className="text-left text-black mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-extrabold">
              Subscription
              </h1>
              <p className="text-left text-[13px]">
              Start by sharing your ideas and requirements with us. This initial step allows us to understand 
              your vision, target audience, and specific goals for the design.
              </p>

            </div>

          </div>
          <div className="bg-gray-100 hover:bg-white/70 flex flex-col border-2 border-gray-400 py-8 rounded-3xl w-[290px] h-[260px] px-5">
            {/* <img 
            src={Brief1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" /> */}
             <FaIcons.FaBriefcase className="w-[32px] h-[32px] text-purple"/>
            <div className="text-left text-black mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-extrabold">
              Brief
              </h1>
              <p className="text-left text-[13px]">
              Start by sharing your ideas and requirements with us. This initial step allows us to understand 
              your vision, target audience, and specific goals for the design.
              </p>

            </div>

          </div>
          <div className="bg-gray-100 hover:bg-white/70 flex flex-col border-2 border-gray-400 py-8 rounded-3xl w-[290px] h-[260px] px-5">
            {/* <img 
            src={Design1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" /> */}
             <BsIcons.BsPalette className="w-[32px] h-[32px] text-purple"/>
            <div className="text-left text-black mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-extrabold">
              Design
              </h1>
              <p className="text-left text-[13px]">
                Our creative team will transform your brief into captivating design concepts. 
                {/* We’ll collaborate with you, making revisions as needed to ensure the final design aligns with your vision. */}
              </p>

            </div>

          </div>
          <div className="bg-gray-100 hover:bg-white/70 flex flex-col border-2 border-gray-400 py-8 rounded-3xl w-[290px] h-[260px] px-5">
            {/* <img 
            src={Delivery1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" /> */}
             <AiIcons.AiFillFileZip className="w-[32px] h-[32px] text-purple"/>
            <div className="text-left text-black mt-3 flex flex-col gap-y-2">
              <h1 className="text-[28px] font-extrabold">
              Delivery
              </h1>
              <p className="text-left text-[13px]">
              Once you’re satisfied with the design, we’ll deliver the final product promptly, 
              ensuring you have everything you need to implement your new design seamlessly.
              </p>
            </div>
          </div>
        </div>
    </div>

    </div>
  )
}

export default Processes
