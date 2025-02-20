import PropTypes from "prop-types";

const NewsletterSection = ({ className = "" }) => {
  return (
    <div
      className={`w-[960px] h-[270px] flex flex-col items-center justify-start gap-4 text-left text-5xl text-black font-poppins ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-3xs">
        <b className="relative">NEWSLETTER</b>
      </div>
      <div className="w-[870px] flex flex-row items-center justify-center p-3xs box-border font-inria-serif">
        <div className="relative">
          Keep up with our latest news and events. Subscribe to our newsletter
        </div>
      </div>
      <div className="w-[917px] h-[81px] overflow-hidden shrink-0 flex flex-row items-center justify-end pt-0 px-0 pb-px box-border gap-[25px] text-white">
        <button className="cursor-pointer border-black border-solid border-[3px] py-[15px] px-[29px] bg-white h-20 w-[673px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-col items-start justify-end">
          <div className="relative text-5xl font-inria-serif text-black whitespace-pre-wrap text-left">
            Enter your E-mail Adress
          </div>
        </button>
        <div className="w-[94px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-darkslategray h-20 flex flex-col items-end justify-end py-[15px] px-[23px] box-border">
          <div className="relative">Join</div>
        </div>
      </div>
    </div>
  );
};

NewsletterSection.propTypes = {
  className: PropTypes.string,
};

export default NewsletterSection;
