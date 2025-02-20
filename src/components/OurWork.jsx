import PropTypes from "prop-types";

const OurWork = ({ className = "" }) => {
  return (
    <div
      className={`w-[980px] h-[186px] flex flex-row items-center justify-start gap-[232px] text-left text-5xl text-black font-inria-serif ${className}`}
    >
      <b className="w-40 relative inline-block shrink-0">{`Our Work `}</b>
      <div className="h-[168px] w-[488px] relative text-base font-light font-poppins inline-block shrink-0">
        <p className="m-0">
          We offer part-time and full-time packages at competitive rates,
          tailored to your needs.
        </p>
        <p className="m-0">Options:</p>
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li className="mb-0">Part-Time – Occasional support.</li>
          <li className="mb-0">Full-Time – Long-term assistance.</li>
          <li className="mb-0">Affordable – Quality service at great rates.</li>
          <li>Customizable – Solutions that fit you</li>
        </ul>
      </div>
    </div>
  );
};

OurWork.propTypes = {
  className: PropTypes.string,
};

export default OurWork;
