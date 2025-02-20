import React from 'react';
import PropTypes from 'prop-types';

const AboutUs = ({ className = "" }) => {
  const advantages = [
    "Highly educated",
    "Professional",
    "Highly motivated"
  ];

  return (
    <div className={`max-w-6xl mx-auto px-4 py-16 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Title section */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl lg:text-5xl font-bold font-inria-serif text-black relative">
            About Us
            {/* Decorative underline */}
            <span className="absolute -bottom-3 left-0 w-16 h-1 bg-blue-600"></span>
          </h2>
        </div>

        {/* Content section */}
        <div className="lg:w-2/3 space-y-6 font-poppins text-slate-700">
          {/* Main description */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              We are a US based company serving as a workforce agency addressing the
              national worker shortage through virtual assistants.
            </p>
            
            <p className="text-lg leading-relaxed">
              Delegate your administrative work and save time and money.
            </p>

            <p className="text-lg leading-relaxed">
              We offer part time and full time solutions.
            </p>
          </div>

          {/* Advantages section */}
          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-4">
              Our virtual assistants are:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
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
