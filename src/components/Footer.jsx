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
    <div
      className={`h-[408px] w-[1128px] flex flex-row items-start justify-start pt-[13px] px-[3px] pb-[34px] box-border gap-[177px] text-left text-5xl text-black font-inria-serif ${className}`}
    >
      <div className="h-[361px] w-[508px] flex flex-row items-start justify-start gap-[77px]">
        <div className="h-[314px] w-[319px] flex flex-col items-start justify-start gap-[68px]">
          <div className="w-[319px] h-[206px] flex flex-col items-start justify-start gap-2">
            <img
              className="w-[250px] h-[120px] relative object-cover"
              loading="lazy"
              alt=""
              src="/logoimage@2x.png"
            />
            <div className="w-[319px] h-[78px] flex flex-row items-start justify-start py-0 pl-[33px] pr-0 box-border">
              <div className="h-[78px] w-[286px] flex flex-row items-start justify-start p-3xs box-border">
                <div className="h-[58px] w-[267px] relative inline-block shrink-0">
                  Reliable Talent, Seamless Support.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[219px] h-10 flex flex-row items-start justify-start py-0 pl-[19px] pr-0 box-border">
            <div className="h-10 w-[200px] flex flex-row items-start justify-start gap-10">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={facebookLink}
              />
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={instagramLink}
              />
              <img
                className="h-10 w-10 relative"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[361px] w-28 flex flex-col items-start justify-start py-0 px-0 box-border gap-10">
          <b className="w-[113px] h-[29px] relative inline-block shrink-0">
            Go to
          </b>
          <div className="w-[148px] h-[43px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border">
            <div className="h-[29px] w-[149px] relative inline-block shrink-0">
              Home
            </div>
          </div>
          <div className="w-[148px] h-[43px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border">
            <div className="h-[29px] w-[149px] relative inline-block shrink-0">
              About Us
            </div>
          </div>
          <div className="w-[148px] h-[43px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border">
            <a
              className="[text-decoration:none] h-[29px] w-[149px] relative text-[inherit] inline-block shrink-0"
              style={servicesStyle}
            >
              Services
            </a>
          </div>
          <div className="w-[148px] h-[43px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border">
            <div className="h-[29px] w-[149px] relative inline-block shrink-0">
              Contact
            </div>
          </div>
        </div>
      </div>
      <div className="h-[535px] w-[433px] flex flex-col items-start justify-start pt-0 px-0 pb-[188px] box-border gap-6">
        <b className="w-[434px] h-[29px] relative inline-block shrink-0">
          Contact Details
        </b>
        <div className="w-[410px] h-[135px] flex flex-col items-start justify-start py-0 px-0 box-border gap-6">
          <b className="w-[434px] h-[29px] relative inline-block shrink-0">
            Email Us
          </b>
          <div className="w-[434px] h-[29px] relative inline-block shrink-0">
            Fast and Reliable Support
          </div>
          <b className="w-[434px] h-[29px] relative inline-block text-darkslategray shrink-0">
            info@thevirtualstaffingsolution.com
          </b>
        </div>
        <div className="w-[433px] h-[135px] flex flex-col items-start justify-start gap-6">
          <b className="w-[434px] h-[29px] relative inline-block shrink-0">
            Phone number
          </b>
          <div className="w-[434px] h-[29px] relative inline-block shrink-0">
            Give Us a call
          </div>
          <b className="w-[434px] h-[29px] relative inline-block text-darkslategray shrink-0">
            +254 790 555 163
          </b>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  facebookLink: PropTypes.string,
  instagramLink: PropTypes.string,

  /** Style props */
  servicesTextDecoration: PropTypes.string,
};

export default Footer;
