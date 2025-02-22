import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-darkslategray">
      <div className="max-w-7xl mx-auto px-4 py-12 text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We are a U.S.-based workforce agency bridging the national worker shortage with skilled Virtual Assistants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="rounded-lg p-8 border border-white/20 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div className="relative z-10 mb-8">
              <p className="text-lg mb-6 text-white/80">
                Let us handle your administrative tasks so you can focus on growing your business while saving time and resources.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
              <div className="space-y-4">
                {[
                  'Flexible Solutions – Part-time and full-time options tailored to your needs.',
                  'Expert Support – Skilled professionals ensuring efficiency and reliability.',
                  'Seamless Collaboration – Hassle-free integration into your workflow.'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-white font-bold">✓</span>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-white/80">info@thevirtualstaffingsolution.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold">Our Address</h3>
                  <p className="text-white/80">90, James Gichuru Road, Lavington</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-white/80">+254 790 555 163</p>
                </div>
              </div>
            </div>

            {/* Social Links with Icons */}
            <div className="flex gap-4 mt-8 justify-center">
              <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-lg p-8 border border-white/20 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div className="relative z-10 mb-6">
              <h2 className="text-2xl font-bold mb-2">Book an appointment</h2>
              <p className="text-white/80">
                Available slots: Mondays – 2:00 PM & 2:30 PM (30-minute slots)
              </p>
            </div>

            <form className="space-y-4 relative z-10">
              {[
                { label: 'Company Name', type: 'text' },
                { label: 'Number of VAs Needed', type: 'number' },
                { label: 'Employment Type', type: 'select', options: ['Full-Time', 'Part-Time'] },
                { label: 'Email', type: 'email' },
                { label: 'Phone', type: 'tel' },
                { label: 'Message', type: 'textarea' }
              ].map((field) => (
                <div key={field.label} className="space-y-2">
                  <label className="block text-sm font-medium text-white/80">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 rounded-lg border border-white/20 px-4 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    />
                  ) : field.type === 'select' ? (
                    <select className="w-full bg-white/5 rounded-lg border border-white/20 px-4 py-2 text-white focus:ring-2 focus:ring-white/30 focus:border-transparent">
                      {field.options.map(option => (
                        <option key={option} value={option.toLowerCase()} className="text-black">
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="w-full bg-white/5 rounded-lg border border-white/20 px-4 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;