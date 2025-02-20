import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <div
      className={`h-[1463px] w-[1187px] flex flex-col items-start justify-start pt-0 pb-[31px] pl-[43.5px] pr-[0.5px] box-border gap-8 text-left text-5xl text-black font-poppins ${className}`}
    >
      <div className="w-[613.5px] h-[29px] flex flex-row items-start justify-start py-0 pl-[486.5px] pr-0 box-border font-inter">
        <div className="h-[29px] w-[127px] flex flex-row items-start justify-start">
          <div className="h-[29px] w-32 relative font-light inline-block shrink-0">
            Contact Us
          </div>
        </div>
      </div>
      <div className="ml-[-44px] w-[1187px] h-[432px] flex flex-row items-start justify-start">
        <div className="h-[432px] w-[1187px] relative inline-block shrink-0">
          <p className="m-0">
            We are a U.S.-based workforce agency bridging the national worker
            shortage with skilled Virtual Assistants.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Let us handle your administrative tasks so you can focus on growing
            your business while saving time and resources.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Why Work With Us?</p>
          <p className="m-0">
            ✅ Flexible Solutions – Part-time and full-time options tailored to
            your needs.
          </p>
          <p className="m-0">
            ✅ Expert Support – Skilled professionals ensuring efficiency and
            reliability.
          </p>
          <p className="m-0">
            ✅ Seamless Collaboration – Hassle-free integration into your
            workflow.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Get in touch today—let’s build your success together!
          </p>
        </div>
      </div>
      <div className="w-[1099px] h-[907px] flex flex-row items-start justify-start pt-1 pb-[34px] pl-[614.5px] pr-[68.5px] box-border gap-36">
        <div className="ml-[-615px] h-[604px] w-[471px] flex flex-col items-start justify-start gap-[54px]">
          <div className="w-[471px] h-[510px] flex flex-col items-start justify-start pt-0 px-0 pb-[58px] box-border gap-4 z-[2]">
            <div className="w-[356px] h-[147px] flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border gap-[98.3px]">
              <img
                className="h-[38.7px] w-[32.7px] relative shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="h-[115px] w-[230px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border z-[1]">
                <div className="w-[230px] h-[111px] flex flex-col items-start justify-start gap-2 shrink-0">
                  <b className="w-[205px] h-[35px] relative inline-block shrink-0">
                    Email Us
                  </b>
                  <div className="w-[230px] h-[68px] flex flex-col items-start justify-start gap-[18px] text-base">
                    <div className="w-[231px] h-[25px] relative inline-block shrink-0">
                      Fast and Reliable Support
                    </div>
                    <b className="w-[205px] h-[25px] relative inline-block text-darkslategray shrink-0">
                      info@thevirtualstaffingsolution.com
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[352px] h-[161px] flex flex-row items-start justify-start pt-0 pb-2 pl-0.5 pr-0 box-border">
              <div className="h-[153px] w-[350px] flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[86.7px]">
                <div className="h-[50px] w-[31.3px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border z-[2]">
                  <img
                    className="w-[31.3px] h-[38.5px] relative"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="h-[136px] w-[230px] flex flex-col items-start justify-start gap-[18px] z-[1]">
                  <div className="w-[230px] h-[68px] flex flex-col items-start justify-start gap-2">
                    <b className="w-[231px] h-[35px] relative inline-block shrink-0">
                      Our Address
                    </b>
                    <div className="w-[231px] h-[25px] relative text-base inline-block shrink-0">
                      Come visit us in our office
                    </div>
                  </div>
                  <b className="w-[205px] relative text-base inline-block text-darkslategray">
                    90,James Gichuru Road,Lavington
                  </b>
                </div>
              </div>
            </div>
            <div className="w-[343px] h-28 flex flex-row items-start justify-start py-0 pl-[11px] pr-0 box-border">
              <div className="h-28 w-[332px] flex flex-row items-start justify-start pt-0 px-0 pb-px box-border gap-[81.4px]">
                <div className="h-[56.9px] w-[31.6px] flex flex-col items-start justify-start pt-[18.3px] px-0 pb-0 box-border z-[2]">
                  <img
                    className="w-[31.6px] h-[38.6px] relative"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className="h-[111px] w-[196px] flex flex-col items-start justify-start gap-[18px] z-[1]">
                  <div className="w-[196px] h-[68px] flex flex-col items-start justify-start gap-2">
                    <b className="w-[197px] h-[35px] relative inline-block shrink-0">
                      Phone number
                    </b>
                    <div className="w-[138px] h-[25px] relative text-base inline-block shrink-0">
                      Give Us a call
                    </div>
                  </div>
                  <b className="w-[162px] h-[25px] relative text-base inline-block text-darkslategray shrink-0">
                    +254 790 555 163
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[261px] h-10 flex flex-row items-start justify-start py-0 pl-[61px] pr-0 box-border z-[1]">
            <div className="h-10 w-[200px] flex flex-row items-start justify-start gap-10">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/facebooklink.svg"
              />
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/instagramlink.svg"
              />
              <img className="h-10 w-10 relative" alt="" src="/vector-3.svg" />
            </div>
          </div>
        </div>
        <div className="h-[869px] w-[416px] flex flex-col items-start justify-start pt-[38px] px-0 pb-0 box-border">
          <div className="w-[416px] h-[831px] flex flex-col items-start justify-start gap-9">
            <div className="w-[386.5px] h-[134px] flex flex-row items-start justify-start py-0 pl-[25.5px] pr-0 box-border">
              <div className="h-[134px] w-[361px] flex flex-row items-start justify-start py-0 px-0 box-border">
                <div className="h-36 w-[397px] relative inline-block shrink-0">
                  <p className="m-0">📅 Book an appointment</p>
                  <p className="m-0">{`🕑 Available slots: Mondays – 2:00 PM & 2:30 PM (30-minute slots)`}</p>
                </div>
              </div>
            </div>
            <div className="w-[416px] h-[661px] flex flex-col items-start justify-start gap-[13px]">
              <div className="w-[416px] h-[581px] flex flex-col items-start justify-start py-3 px-2 box-border gap-[31px] z-[2]">
                <div className="w-[391px] h-[321px] flex flex-col items-start justify-start gap-[19px] z-[2]">
                  <input
                    className="border-darkslategray border-solid border-[3px] [outline:none] bg-white w-[397px] h-[72px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start pt-[11px] px-5 pb-3 font-inria-serif font-light text-5xl text-black z-[3]"
                    value="Company Name"
                    type="text"
                  />
                  <input
                    className="border-darkslategray border-solid border-[3px] [outline:none] bg-white w-[397px] h-[72px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start pt-[5px] px-0 pb-[18px] font-inria-serif font-light text-5xl text-black z-[4]"
                    value="How many VAs do you need?"
                    type="text"
                  />
                  <input
                    className="border-darkslategray border-solid border-[3px] [outline:none] bg-white w-[397px] h-[72px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start pt-3.5 px-[21px] pb-[9px] font-inria-serif font-light text-5xl text-black z-[2]"
                    value="Part-Time or Full-Time?"
                    type="text"
                  />
                  <input
                    className="border-darkslategray border-solid border-[3px] [outline:none] bg-white w-[397px] h-[72px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start pt-[11px] px-[35px] pb-[26px] font-inria-serif font-light text-5xl text-black z-[1]"
                    type="text"
                  />
                </div>
                <input
                  className="border-darkslategray border-solid border-[3px] [outline:none] bg-white w-[397px] h-[72px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start py-[11.5px] px-[21px] font-inria-serif font-light text-5xl text-black z-[1]"
                  type="text"
                />
                <input
                  className="border-darkslategray border-solid border-[3px] [outline:none] bg-white w-[397px] h-[114px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start pt-[29px] px-5 pb-9 font-inria-serif font-light text-5xl text-black"
                  type="text"
                />
              </div>
              <div className="w-[227px] h-[67px] flex flex-row items-start justify-start py-0 pl-[104px] pr-0 box-border z-[1]">
                <button className="cursor-pointer border-black border-solid border-[3px] py-[19px] px-[18.5px] bg-darkslategray h-[73px] w-[129px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg box-border flex flex-row items-start justify-start">
                  <b className="h-[29px] w-[82px] relative text-5xl inline-block font-inria-serif text-gray text-left shrink-0">
                    Submit
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
