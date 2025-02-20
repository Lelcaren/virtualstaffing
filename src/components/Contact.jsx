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
          {/* Rest of the component remains the same... */}
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

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center">
              {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                <button key={platform} className="p-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                  {platform}
                </button>
              ))}
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