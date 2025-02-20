import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1050px] flex flex-col items-center justify-start gap-8 text-left text-29xl text-black font-inria-serif ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-3xs">
        <h1 className="m-0 relative text-inherit font-bold font-inherit">
          Virtual Staffing Solution
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center p-3xs text-5xl">
        <div className="w-[965px] relative font-light inline-block shrink-0">
          Connecting businesses with top-tier remote professionals to streamline
          operations and enhance productivity.
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[104px]">
        <button className="cursor-pointer border-black border-solid border-[3px] py-2 px-[11px] bg-darkslategray h-[73px] w-[262px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-center justify-center gap-2.5">
          <b className="relative text-5xl font-inria-serif text-gray text-left">
            Get in Touch
          </b>
          <img
            className="w-[26.5px] relative h-[14.5px] object-contain"
            alt=""
            src="/arrow-1.svg"
          />
        </button>
        <button className="cursor-pointer border-black border-solid border-[3px] py-2 px-[11px] bg-darkslategray h-[73px] w-[260px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-center justify-center gap-2.5">
          <a className="[text-decoration:none] relative text-5xl font-bold font-inria-serif text-gray text-left">
            Learn More
          </a>
          <img
            className="w-[34px] relative h-[21px] object-contain"
            alt=""
            src="/arrow-2.svg"
          />
        </button>
      </div>
      <img
        className="self-stretch h-[737px] relative rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/headerimage@2x.png"
      />
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
