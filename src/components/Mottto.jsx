import Motto from "./Motto";
import PropTypes from "prop-types";

const Mottto = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-[165px] box-border max-w-full text-left text-5xl text-black font-poppins lg:pl-[82px] lg:pr-[82px] lg:box-border mq750:pl-[41px] mq750:pr-[41px] mq750:box-border ${className}`}
    >
      <Motto />
    </section>
  );
};

Mottto.propTypes = {
  className: PropTypes.string,
};

export default Mottto;
