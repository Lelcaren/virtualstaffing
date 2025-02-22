import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ className = "" }) => {
  return (
    <section className={`self-stretch min-h-[650px] md:h-[850px] lg:h-[1050px] flex flex-col items-center justify-start gap-4 md:gap-6 lg:gap-8 text-left text-black font-inria-serif ${className}`}>
      {/* Title */}
      <div className="flex flex-row items-center justify-center p-2 md:p-3xs w-full">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-[90%] md:max-w-[80%] lg:max-w-[1000px]">
          Virtual Staffing Solution
        </h1>
      </div>

      {/* Subtitle */}
      <div className="flex flex-row items-center justify-center p-2 md:p-3xs text-lg md:text-2xl lg:text-3xl w-full">
        <div className="font-light text-center max-w-[90%] md:max-w-[80%] lg:max-w-[965px]">
          Connecting businesses with top-tier remote professionals to streamline
          operations and enhance productivity.
        </div>
      </div>

      {/* Buttons - Now always side by side with smaller sizes */}
      <div className="flex flex-row items-center justify-center gap-4 lg:gap-6 w-full px-4">
        <button className="cursor-pointer border-black border-solid border-[3px] py-2 px-4 bg-darkslategray h-[45px] md:h-[50px] lg:h-[55px] w-[160px] md:w-[180px] lg:w-[200px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-center justify-center gap-2">
          <b className="text-lg md:text-xl lg:text-2xl font-inria-serif text-gray text-left whitespace-nowrap">
            Get in Touch
          </b>
          <img
            className="w-[16px] md:w-[18px] lg:w-[20px] h-auto object-contain"
            alt=""
            src="/arrow-1.svg"
          />
        </button>
        <button className="cursor-pointer border-black border-solid border-[3px] py-2 px-4 bg-darkslategray h-[45px] md:h-[50px] lg:h-[55px] w-[160px] md:w-[180px] lg:w-[200px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-center justify-center gap-2">
          <span className="text-lg md:text-xl lg:text-2xl font-bold font-inria-serif text-gray text-left whitespace-nowrap">
            Learn More
          </span>
          <img
            className="w-[20px] md:w-[22px] lg:w-[24px] h-auto object-contain"
            alt=""
            src="/arrow-2.svg"
          />
        </button>
      </div>

      {/* Hero Image */}
      <img
        className="w-full h-[300px] md:h-[500px] lg:h-[737px] mt-4 md:mt-6 lg:mt-8 rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg overflow-hidden object-cover"
        loading="lazy"
        alt="Virtual Staffing Solutions Hero"
        src="/headerimage@2x.png"
      />
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
