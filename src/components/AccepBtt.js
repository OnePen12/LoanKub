import { useMemo } from "react";

const AccepBtt = ({ width, alignSelf, bttWidth, bttAlignSelf, onNext, onPrev }) => {
  const accepBttStyle = useMemo(() => {
    return {
      width: width,
      alignSelf: alignSelf,
    };
  }, [width, alignSelf]);

  const bttStyle = useMemo(() => {
    return {
      width: bttWidth,
      alignSelf: bttAlignSelf,
    };
  }, [bttWidth, bttAlignSelf]);

  return (
    <div className="w-full flex flex-col items-center justify-center" style={accepBttStyle}>
      <div className="w-[314px] h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-between" style={bttStyle}>
        <button className="cursor-pointer [border:none] p-0 bg-gainsboro-100 rounded-lg w-32 h-[42px] overflow-hidden shrink-0 flex flex-col items-center justify-center" onClick={onPrev}>
          <div className="relative text-xl leading-[20px] font-semibold font-poppins-14-medium text-black1 text-center flex items-center justify-center w-[113px]">
            ปฏิเสธ
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-darkorange rounded-lg w-[138px] h-[45px] overflow-hidden shrink-0 flex flex-col items-center justify-center box-border" onClick={onNext}>
          <div className="relative text-xl leading-[20px] font-semibold font-poppins-14-medium text-white text-center flex items-center justify-center w-[130px]">
            ยอมรับ
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccepBtt;
