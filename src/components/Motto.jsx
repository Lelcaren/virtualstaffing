import PropTypes from "prop-types";

const Motto = ({ className = "" }) => {
  return (
    <div
      className={`h-[166px] w-[1030px] flex flex-row items-start justify-start pt-[22px] px-8 pb-1 box-border text-left text-5xl text-black font-poppins ${className}`}
    >
      <div className="w-[868px] relative inline-block shrink-0">
        <p className="m-0">
          We handle your administrative tasks so you can focus on what truly
          matters.
        </p>
        <p className="m-0">
          Our skilled virtual assistants provide reliable, professional support.
        </p>
        <p className="m-0">
          Save time, reduce costs, and scale your business with ease.
        </p>
      </div>
    </div>
  );
};

Motto.propTypes = {
  className: PropTypes.string,
};

export default Motto;
