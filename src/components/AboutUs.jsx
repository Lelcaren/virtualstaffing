import React from 'react';
import PropTypes from 'prop-types';

const AboutUs = ({ className = "" }) => {
  const advantages = [
    "Highly educated",
    "Professional",
    "Highly motivated"
  ];
  
  return (
    <div className={`max-w-7xl mx-auto px-4 py-16 ${className} sm:px-6`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 sm:ml-4">
        {/* Title section */}
        <div className="lg:w-1/4 sm:w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inria-serif text-black relative sm:text-left">
            About Us
            {/* Decorative underline */}
            <span className="absolute -bottom-3 left-0 w-16 h-1 bg-blue-600"></span>
          </h2>
        </div>
        
        {/* Content section */}
        <div className="lg:w-3/4 sm:w-full space-y-6 font-poppins text-slate-700">
          {/* Main description */}
          <div className="space-y-4 sm:pl-4 sm:pr-4">
            <p className="text-base sm:text-lg leading-relaxed sm:max-w-full">
              We are a US based company serving as a workforce agency addressing the
              national worker shortage through virtual assistants.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed sm:max-w-full">
              Delegate your administrative work and save time and money.
            </p>
          
            <p className="text-base sm:text-lg leading-relaxed sm:max-w-full">
              We offer part time and full time solutions.
            </p>
          </div>
          
          {/* Advantages section */}
          <div className="pt-6 sm:pl-4 sm:pr-4">
            <h3 className="text-xl font-semibold mb-4">
              Our virtual assistants are:
            </h3>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-6 sm:justify-start">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow w-full sm:w-auto sm:max-w-full"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">{advantage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;



