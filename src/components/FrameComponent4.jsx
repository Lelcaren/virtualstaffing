import NewsletterSection from "./NewsletterSection";
import PropTypes from "prop-types";

const Newsletter = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-[200px] box-border max-w-full text-left text-5xl text-black font-poppins lg:pl-[100px] lg:pr-[100px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[50px] mq750:pr-[50px] mq750:box-border ${className}`}
    >
      <NewsletterSection />
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
