import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full px-8 py-16 font-poppins">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black">
          NEWSLETTER
        </h2>

        {/* Description */}
        <p className="text-xl text-center font-inria-serif text-black max-w-2xl">
          Keep up with our latest news and events. Subscribe to our newsletter
        </p>

        {/* Subscription Form */}
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your E-mail Address"
            className="w-full sm:w-2/3 px-6 py-4 text-lg border-3 border-black rounded-lg 
                     focus:outline-none focus:border-blue-500 transition-colors"
          />
          
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-800 text-white font-bold 
                           rounded-lg shadow-md hover:bg-gray-700 active:bg-gray-900 
                           transition-all duration-300 ease-in-out transform 
                           hover:shadow-lg active:scale-95">
            Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
