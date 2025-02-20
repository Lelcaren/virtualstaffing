import ManageCalendars from "./ManageCalendars";
import PropTypes from "prop-types";

const Services = ({ className = "" }) => {
  return (
    <div
      className={`h-[1789px] w-[1340px] bg-darkslategray flex flex-col items-start justify-start pt-4 px-3 pb-[79px] box-border gap-[53px] text-left text-5xl text-white font-inria-serif ${className}`}
    >
      <div className="w-[582px] h-[139px] flex flex-row items-start justify-start pt-2 px-2 pb-4 box-border text-77xl">
        <h1 className="m-0 h-[115px] w-[567px] relative text-inherit font-bold font-inherit inline-block shrink-0">{`Our Services `}</h1>
      </div>
      <div className="w-[1221px] h-[575px] flex flex-col items-start justify-start gap-[34px] font-poppins">
        <div className="w-[769px] h-[135px] flex flex-row items-start justify-start py-[13.5px] px-[3.5px] box-border">
          <b className="w-[762px] relative inline-block shrink-0">
            We provide tailored virtual staffing solutions to help businesses
            streamline operations, boost productivity, and scale efficiently."
          </b>
        </div>
        <div className="w-[1221px] h-[406px] flex flex-row items-start justify-start py-0 pl-[35px] pr-0 box-border font-inria-serif">
          <div className="h-[406px] w-[1186px] flex flex-row items-start justify-start gap-[95px]">
            <div className="h-[406px] w-[315px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
              <div className="w-[317px] h-[402px] shadow-[0px_10px_25px_rgba(0,_0,_0,_0.35)] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-gray border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[19px] px-0 pb-[50.3px] gap-[30.3px]">
                <img
                  className="w-[77.2px] h-[39.7px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/group@2x.png"
                />
                <div className="w-[189px] h-[58px] overflow-hidden flex flex-col items-start justify-center">
                  <b className="w-[222px] h-[58px] relative inline-block shrink-0">
                    Executive Assistance
                  </b>
                </div>
                <b className="w-[315px] h-[100px] relative text-base inline-block font-poppins">
                  {" "}
                  Professional administrative support for executives, including
                  scheduling, email management, and task coordination.
                </b>
                <div className="w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center text-sm text-black">
                  <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                    <b className="h-[17px] w-[133px] relative inline-block shrink-0">
                      Schedule Discusion
                    </b>
                    <img
                      className="h-[7.9px] w-[20.5px] relative object-contain"
                      alt=""
                      src="/arrow-1-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-[366px] flex flex-col items-start justify-start py-0 pl-0 pr-[51px] box-border">
              <div className="w-[317px] h-[402px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1.5 px-2.5 pb-[42.9px] gap-8">
                <img
                  className="w-[77.1px] h-[39.1px] relative object-contain"
                  alt=""
                  src="/group-1@2x.png"
                />
                <b className="w-[296px] h-[29px] relative inline-block shrink-0">
                  Bookkeeping
                </b>
                <b className="w-[295px] h-[145px] relative text-base inline-block font-poppins">
                  Keep your finances in order with our reliable bookkeeping
                  services, including expense tracking, invoicing, and financial
                  record management.
                </b>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
                  <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                    <b className="h-[17px] w-[133px] relative text-sm inline-block font-inria-serif text-black text-left shrink-0">
                      Schedule Discusion
                    </b>
                    <img
                      className="h-[7.9px] w-[20.5px] relative object-contain"
                      alt=""
                      src="/arrow-1-1.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[402px] w-[317px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-3 px-1 pb-[14.9px] gap-6">
              <img
                className="w-[77.1px] h-[39.1px] relative object-contain"
                alt=""
                src="/group-2@2x.png"
              />
              <b className="w-52 h-[87px] relative inline-block">{`Social Media Management & Website Creation`}</b>
              <b className="w-[307px] h-[133px] relative text-base inline-block font-poppins">
                Comprehensive support for executives and businesses, from admin
                tasks to social media and website management—so you can focus on
                what matters most.
              </b>
              <div className="w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center text-sm text-black">
                <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                  <b className="h-[17px] w-[133px] relative inline-block shrink-0">
                    Schedule Discusion
                  </b>
                  <img
                    className="h-[7.9px] w-[20.5px] relative object-contain"
                    alt=""
                    src="/arrow-1-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1217px] h-[419px] flex flex-row items-start justify-start pt-0 pb-4 pl-[34px] pr-0 box-border">
        <div className="h-[403px] w-[1183px] flex flex-row items-end justify-start gap-[104px]">
          <div className="h-[402px] w-[317px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-3 px-0 pb-[38.9px] gap-8">
            <img
              className="w-[77px] h-[39.1px] relative object-contain"
              alt=""
              src="/group-3@2x.png"
            />
            <b className="w-[316px] h-[29px] relative inline-block shrink-0">
              Meeting Minutes
            </b>
            <b className="w-[315px] h-[143px] relative text-base inline-block font-poppins">
              We capture clear, concise, and well-structured meeting minutes,
              ensuring key discussions, decisions, and action points are
              accurately recorded and easily accessible.
            </b>
            <div className="w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center text-sm text-black">
              <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                <b className="h-[17px] w-[133px] relative inline-block shrink-0">
                  Schedule Discusion
                </b>
                <img
                  className="h-[7.9px] w-[20.5px] relative object-contain"
                  alt=""
                  src="/arrow-1-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[403px] w-[345px] flex flex-col items-start justify-end pt-0 pb-[3px] pl-0 pr-[30px] box-border">
            <div className="w-[317px] h-[402px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[19px] px-2 pb-[31.9px] gap-[35px]">
              <img
                className="w-[77px] h-[39.1px] relative object-contain"
                alt=""
                src="/group-4@2x.png"
              />
              <b className="w-[300px] h-[29px] relative inline-block shrink-0">
                Travel Arrangements
              </b>
              <b className="w-[299px] h-[134px] relative text-base inline-block font-poppins">
                From flights to accommodations, our virtual assistants handle
                all your travel logistics—ensuring seamless, stress-free trips
                with well-organized itineraries.
              </b>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                  <b className="h-[17px] w-[133px] relative text-sm inline-block font-inria-serif text-black text-left shrink-0">
                    Schedule Discusion
                  </b>
                  <img
                    className="h-[7.9px] w-[20.5px] relative object-contain"
                    alt=""
                    src="/arrow-1-1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <ManageCalendars
            group="/group-5@2x.png"
            manageCalenders="Manage Calenders"
            stayOrganizedAndNeverMissAn="Stay organized and never miss an appointment—our virtual assistants manage your calendar, schedule meetings, and send reminders efficiently."
          />
        </div>
      </div>
      <div className="w-[1215px] h-[400px] flex flex-row items-start justify-start py-0 pl-8 pr-0 box-border text-13xl">
        <div className="h-[400px] w-[1183px] flex flex-row items-start justify-start gap-[109px]">
          <div className="h-[402px] w-[317px] [filter:drop-shadow(0px_10px_25px_rgba(0,_0,_0,_0.35))] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-gray border-solid border-[1px] box-border flex flex-col items-start justify-start pt-[25px] px-0 pb-[39.6px] gap-8">
            <img
              className="w-[315px] h-[45.4px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className="w-[174px] h-[38px] overflow-hidden flex flex-col items-start justify-center py-0 pl-0 pr-3.5 box-border">
              <b className="w-[161px] h-[38px] relative inline-block shrink-0">
                Data Entry
              </b>
            </div>
            <b className="w-[300px] h-[114px] relative text-base inline-block font-poppins">
              Accurate and efficient data entry services to keep your records
              organized, up-to-date, and easily accessible
            </b>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
              <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                <b className="h-[17px] w-[133px] relative text-sm inline-block font-inria-serif text-black text-left shrink-0">
                  Schedule Discusion
                </b>
                <img
                  className="h-[7.9px] w-[20.5px] relative object-contain"
                  alt=""
                  src="/arrow-1-1.svg"
                />
              </div>
            </button>
          </div>
          <div className="h-[400px] w-[335px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border text-5xl">
            <div className="w-[317px] h-[402px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-3 px-[7px] pb-[16.9px] relative gap-8">
              <img
                className="w-[77px] h-[39.1px] relative object-contain z-[0]"
                alt=""
                src="/group-6@2x.png"
              />
              <b className="w-[302px] h-[29px] relative inline-block shrink-0 z-[1]">
                Research
              </b>
              <b className="w-[301px] h-[165px] relative text-base inline-block font-poppins z-[2]">
                Providing in-depth research to support informed decision-making.
                Whether it’s market analysis, industry trends, or data
                gathering, we deliver accurate and reliable insights.
              </b>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[174px] h-[42px] overflow-hidden shrink-0 flex flex-col items-start justify-center z-[3]">
                <div className="w-[174px] h-[54px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg bg-white border-black border-solid border-[1px] box-border flex flex-row items-center justify-center py-[18.5px] pl-[6.8px] pr-[6.7px] gap-2">
                  <b className="h-[17px] w-[133px] relative text-sm inline-block font-inria-serif text-black text-left shrink-0">
                    Schedule Discusion
                  </b>
                  <img
                    className="h-[7.9px] w-[20.5px] relative object-contain"
                    alt=""
                    src="/arrow-1-1.svg"
                  />
                </div>
              </button>
              <div className="w-[174px] h-[42px] !m-[0] absolute top-[444px] left-[15px] overflow-hidden shrink-0 z-[4]" />
            </div>
          </div>
          <ManageCalendars
            manageCalendarsPadding="16px 6px 62.9px"
            group="/group-7@2x.png"
            manageCalenders="Reports"
            manageCalendersWidth="304px"
            stayOrganizedAndNeverMissAn="Get accurate, well-structured reports to track performance, analyze data, and make informed business decisions."
            stayOrganizedAndWidth="303px"
            stayOrganizedAndHeight="115px"
          />
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
