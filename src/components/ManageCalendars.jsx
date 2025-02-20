import { useMemo } from "react";
import PropTypes from "prop-types";

const ManageCalendars = ({
  className = "",
  manageCalendarsPadding,
  group,
  manageCalenders,
  manageCalendersWidth,
  stayOrganizedAndNeverMissAn,
  stayOrganizedAndWidth,
  stayOrganizedAndHeight,
}) => {
  const manageCalendarsStyle = useMemo(() => {
    return {
      padding: manageCalendarsPadding,
    };
  }, [manageCalendarsPadding]);

  const manageCalendersStyle = useMemo(() => {
    return {
      width: manageCalendersWidth,
    };
  }, [manageCalendersWidth]);

  const stayOrganizedAndStyle = useMemo(() => {
    return {
      width: stayOrganizedAndWidth,
      height: stayOrganizedAndHeight,
    };
  }, [stayOrganizedAndWidth, stayOrganizedAndHeight]);

  return (
    <div
      className={`h-[402px] w-[317px] rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-lg border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[23px] px-2.5 pb-[38.9px] gap-8 text-left text-5xl text-white font-inria-serif ${className}`}
      style={manageCalendarsStyle}
    >
      <img
        className="w-[74.8px] h-[39.1px] relative object-contain"
        alt=""
        src={group}
      />
      <b
        className="w-[296px] h-[29px] relative inline-block shrink-0"
        style={manageCalendersStyle}
      >
        {manageCalenders}
      </b>
      <b
        className="w-[295px] h-[132px] relative text-base inline-block font-poppins"
        style={stayOrganizedAndStyle}
      >
        {stayOrganizedAndNeverMissAn}
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
  );
};

ManageCalendars.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  manageCalenders: PropTypes.string,
  stayOrganizedAndNeverMissAn: PropTypes.string,

  /** Style props */
  manageCalendarsPadding: PropTypes.string,
  manageCalendersWidth: PropTypes.string,
  stayOrganizedAndWidth: PropTypes.string,
  stayOrganizedAndHeight: PropTypes.string,
};

export default ManageCalendars;
