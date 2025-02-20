import PropTypes from "prop-types";

const AboutUs = ({ className = "" }) => {
  return (
    <div
      className={`w-[989px] h-[257px] flex flex-row items-start justify-start gap-60 text-left text-5xl text-black font-inria-serif ${className}`}
    >
      <b className="w-[143px] relative inline-block shrink-0">{`About Us `}</b>
      <div className="h-[269px] w-[581px] relative text-base font-light font-poppins inline-block shrink-0">
        <p className="m-0">
          We are a US based company serving as a workforce agency addressing the
          national worker shortage through virtual assistants
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`Delegate your administrative work and save time and money. `}</p>
        <p className="m-0"> </p>
        <p className="m-0">We offer part time and full time solutions</p>
        <p className="m-0">Our advantage, our virtual assistants are:</p>
        <p className="m-0">Highly educated </p>
        <p className="m-0">Professional</p>
        <p className="m-0">Highly motivated </p>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
