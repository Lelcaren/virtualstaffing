import Contact from "./Contact";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-[27px] text-left text-5xl text-black font-poppins ${className}`}
    >
      <Contact />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
