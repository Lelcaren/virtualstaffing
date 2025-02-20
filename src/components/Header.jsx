import { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = ({ className = "", logoImageBackgroundImage, showLogo }) => {
  const logoImageStyle = useMemo(() => {
    return {
      backgroundImage: logoImageBackgroundImage,
    };
  }, [logoImageBackgroundImage]);

  return (
    <div
      className={`w-[1242px] flex flex-row items-center justify-between text-left text-5xl text-black font-inter ${className}`}
    >
      <div
        className="h-[140px] w-[296px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-2.5 px-0 box-border bg-[url('/public/logo@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={logoImageStyle}
      >
        {showLogo && <div className="w-[76px] relative h-[39px]" />}
      </div>
      <div className="w-[593px] flex flex-row items-center justify-start gap-8">
        <div className="w-[90px] flex flex-col items-center justify-center">
          <Link to="/" className="[text-decoration:none] relative text-[inherit]">
            Home
          </Link>
        </div>
        <div className="w-[141px] flex flex-col items-center justify-center">
          <Link to="/about" className="[text-decoration:none] relative text-[inherit]">
            About Us
          </Link>
        </div>
        <div className="w-[131px] flex flex-col items-center justify-center">
          <Link to="/services" className="[text-decoration:none] relative text-[inherit]">
            Services
          </Link>
        </div>
        <div className="w-[121px] flex flex-col items-center justify-center">
          <Link to="/contact" className="[text-decoration:none] relative text-[inherit]">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  showLogo: PropTypes.bool,
  logoImageBackgroundImage: PropTypes.string,
};

export default Header;
