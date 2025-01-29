import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  const [isTypingComplete, setTypingComplete] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-center items-center px-4">
      <div className="flex flex-col gap-6 items-start md:items-center text-center max-w-4xl px-4 md:px-6">
        {/* Availability Badge */}
        <div className="animate-pulse flex gap-2  bg-white/10 border border-black px-4 py-2 rounded-lg">
          <div className="bg-green/35 rounded-full w-4 h-4 flex justify-center items-center">
            <div className="bg-green rounded-full w-2 h-2"></div>
          </div>
          <p className="text-black text-sm sm:text-base">Available Now</p>
        </div>

        {/* Typing Animation Header */}
        <h1 className="text-[28px] text-left md:text-center sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] tracking-[-1px] font-customFont max-w-[100%] md:max-w-[700px]">
          {!isTypingComplete ? (
            <Typewriter
              options={{
                strings: ["Brands That Stand Out. Designs That Deliver."],
                autoStart: true,
                delay: 50,
                cursor: "|",
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Brands That Stand Out. Designs That Deliver.")
                  .callFunction(() => setTypingComplete(true))
                  .start();
              }}
            />
          ) : (
            "Brands That Stand Out. Designs That Deliver."
          )}
        </h1>

        {/* Subtext */}
        <p className="text-sm text-left md:text-center sm:text-base max-w-xs sm:max-w-lg md:max-w-2xl">
          At Design Synergy, we create bold identities and seamless experiences
          that not only look incredible but drive results. Whether it’s building
          brands that turn heads or crafting designs that convert, we make every
          detail count. Where creativity meets strategy—let’s make it click.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </button>
          <button className="text-black text-[16px] sm:text-[20px] bg-white border border-black font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
