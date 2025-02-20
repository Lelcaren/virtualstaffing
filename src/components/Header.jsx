import { useMemo } from "react";
import PropTypes from "prop-types";

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
          <a className="[text-decoration:none] relative text-[inherit]">Home</a>
        </div>
        <div className="w-[141px] flex flex-col items-center justify-center">
          <a className="[text-decoration:none] relative text-[inherit]">
            About Us
          </a>
        </div>
        <div className="w-[131px] flex flex-col items-center justify-center">
          <a className="[text-decoration:none] relative text-[inherit]">
            Services
          </a>
        </div>
        <a className="[text-decoration:none] w-[121px] flex flex-col items-center justify-center text-[inherit]">
          <a className="[text-decoration:none] relative text-[inherit]">
            Contact
          </a>
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  showLogo: PropTypes.bool,

  /** Style props */
  logoImageBackgroundImage: PropTypes.string,
};

export default Header;
