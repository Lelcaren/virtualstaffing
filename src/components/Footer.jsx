import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  facebookLink,
  instagramLink,
  servicesTextDecoration,
}) => {
  const servicesStyle = useMemo(() => {
    return {
      textDecoration: servicesTextDecoration,
    };
  }, [servicesTextDecoration]);

  return (
    <footer className={`w-full bg-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Tagline Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <img
                className="w-[180px] h-auto object-contain"
                loading="lazy"
                alt="Company Logo"
                src="/logoimage@2x.png"
              />
              <p className="text-lg mt-3 text-gray-800">
                Reliable Talent, Seamless Support.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-4">
              <a href="#" aria-label="Facebook">
                <img
                  className="h-8 w-8 transition-opacity hover:opacity-80"
                  loading="lazy"
                  alt="Facebook Icon"
                  src={facebookLink}
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  className="h-8 w-8 transition-opacity hover:opacity-80"
                  loading="lazy"
                  alt="Instagram Icon"
                  src={instagramLink}
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  className="h-8 w-8 transition-opacity hover:opacity-80"
                  loading="lazy"
                  alt="Social Media Icon"
                  src="/vector-3.svg"
                />
              </a>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold mb-2">Go to</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-lg hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="text-lg hover:text-gray-600 transition-colors">About Us</a>
              <a
                href="#"
                className="text-lg hover:text-gray-600 transition-colors"
                style={servicesStyle}
              >
                Services
              </a>
              <a href="#" className="text-lg hover:text-gray-600 transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Contact Details Column */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl font-bold">Contact Details</h3>
            
            <div className="space-y-2">
              <h4 className="text-xl font-bold">Email Us</h4>
              <p className="text-lg text-gray-700">Fast and Reliable Support</p>
              <a 
                href="mailto:info@thevirtualstaffingsolution.com" 
                className="text-lg font-bold text-darkslategray hover:underline"
              >
                info@thevirtualstaffingsolution.com
              </a>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-bold">Phone number</h4>
              <p className="text-lg text-gray-700">Give Us a call</p>
              <a 
                href="tel:+254790555163" 
                className="text-lg font-bold text-darkslategray hover:underline"
              >
                +254 790 555 163
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  facebookLink: PropTypes.string,
  instagramLink: PropTypes.string,
  servicesTextDecoration: PropTypes.string,
};

export default Footer;
