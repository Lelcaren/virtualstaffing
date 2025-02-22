import { useMemo } from "react";
import { Link } from "react-router-dom";

const Header = ({ className = "", logoImageBackgroundImage, showLogo }) => {
  const logoImageStyle = useMemo(() => {
    return {
      backgroundImage: logoImageBackgroundImage,
      width: "200px",
      height: "50px", // Reduced height back to original
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };
  }, [logoImageBackgroundImage]);

  return (
    <header className={`w-screen h-16 py-4 px-16 flex justify-between items-center bg-white shadow-md ${className}`}>
      {/* Logo - only render div if showLogo is true */}
      {showLogo && (
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <div style={logoImageStyle} />
          </Link>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex items-center space-x-20">
        <Link
          to="/"
          className="text-4xl font-semibold text-blue-600 hover:text-blue-700 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-4xl font-semibold text-blue-600 hover:text-blue-700 transition-all duration-200"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="text-4xl font-semibold text-blue-600 hover:text-blue-700 transition-all duration-200"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-4xl font-semibold text-blue-600 hover:text-blue-700 transition-all duration-200"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;