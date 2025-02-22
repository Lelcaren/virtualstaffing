import React from 'react';

const Motto = ({ className = "" }) => {
  const mottoItems = [
    {
      text: "We handle your administrative tasks so you can focus on what truly matters.",
      icon: (
        <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
      ),
    },
    {
      text: "Our skilled virtual assistants provide reliable, professional support.",
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      ),
    },
    {
      text: "Save time, reduce costs, and scale your business with ease.",
      icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    },
  ];

  return (
    <section className={`w-full py-0 px-4 lg:px-20 font-poppins ${className}`}>
      <div className="max-w-[1030px] mx-auto py-12 px-8">
        <div className="max-w-[868px] mx-auto relative">
          {/* Decorative element */}
          <div className="absolute left-0 top-0 w-16 h-1 bg-gray-800 -translate-y-6" />

          {/* Motto items */}
          <div className="space-y-6">
            {mottoItems.map((item, index) => (
              <div key={index} className="flex items-start mb-6 group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-full mr-4 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {item.icon}
                  </svg>
                </div>
                <p className="m-0 leading-tight text-2xl sm:text-3xl lg:text-5xl group-hover:text-gray-700 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motto;
