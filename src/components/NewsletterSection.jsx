import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-16 sm:py-24 font-poppins bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-10 relative">
        {/* Decorative elements */}
        <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-blue-500/30 rounded-tl-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-blue-500/30 rounded-br-3xl"></div>
        
        {/* Floating dots decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-blue-600"></div>
            ))}
          </div>
        </div>

        {/* Title with enhanced decoration */}
        <div className="relative pb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center tracking-wide">
            NEWSLETTER
          </h2>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-blue-600 rounded-full"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-blue-300 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-center font-inria-serif text-gray-700 max-w-2xl leading-relaxed">
          Stay informed with our latest insights and updates. 
          <span className="block mt-2 text-base text-gray-600">Join our growing community today!</span>
        </p>

        {/* Subscription Form */}
        <div className="w-full max-w-xl flex flex-col gap-4 items-center justify-center mt-6">
          {/* Input field with enhanced styling */}
          <div className="w-full relative group">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-3 text-base sm:text-lg border-2 border-gray-200 rounded-xl
                       focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100
                       transition-all duration-300 pr-12 bg-white/80 backdrop-blur-sm"
            />
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-blue-500 transition-colors duration-300" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Enhanced Join button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold
                           rounded-xl shadow-lg hover:shadow-blue-200 hover:bg-blue-700 
                           active:bg-blue-800 transition-all duration-300 ease-in-out 
                           flex items-center justify-center gap-2 group relative overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            <span className="relative z-10 text-lg">Subscribe Now</span>
            <svg
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Enhanced privacy note */}
        <p className="text-sm sm:text-base text-gray-500 mt-4 text-center max-w-md leading-relaxed">
          We value your privacy. Your information is safe with us and you can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;



