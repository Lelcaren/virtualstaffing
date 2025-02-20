import React from 'react';
import PropTypes from 'prop-types';

const OurWork = ({ className = "" }) => {
  const options = [
    {
      title: "Part-Time",
      description: "Occasional support when you need it most",
      icon: "⏲️"
    },
    {
      title: "Full-Time",
      description: "Dedicated long-term assistance",
      icon: "📅"
    },
    {
      title: "Affordable",
      description: "Premium quality service at competitive rates",
      icon: "💎"
    },
    {
      title: "Customizable",
      description: "Tailored solutions that adapt to your needs",
      icon: "🎯"
    }
  ];

  return (
    <div className={`bg-gradient-to-br from-gray-100 to-blue-100 w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inria-serif text-gray-800 md:w-1/4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-700 md:w-3/4 font-poppins">
            We offer part-time and full-time packages at competitive rates,
            tailored to your unique business needs.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="flex flex-col h-full">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 font-poppins group-hover:text-blue-600 transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-700 font-poppins">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

OurWork.propTypes = {
  className: PropTypes.string,
};

export default OurWork;
