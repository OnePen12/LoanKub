import React from 'react';
import Header from "../components/Header";
import TableContainer from "../components/TableContainer";

const Calc2 = ({ onNext, onPrev }) => {

  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[15px] pb-[30px] box-border gap-[24px] text-center text-3xs text-gray-700 font-inter">
      <Header headerWidth="unset" headerAlignSelf="stretch" />
      <div className="self-stretch h-[53px] flex flex-col items-center justify-start">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 2
        </div>
      </div>
      <TableContainer />
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-xs text-black font-poppins-14-medium">
        <div className="relative">อัตราดอกเบี้ยในการคำนวณ (ต่อปี)</div>
        <div className="relative w-[128.6px] h-[21.8px]">
          <img
            className="absolute top-[0px] left-[107.3px] w-[21.4px] h-[21.4px]"
            alt=""
            src="/percent.svg"
          />
          <div className="absolute top-[0.8px] left-[0px] flex flex-col items-center justify-start">
            <input
              className="[border:none] font-medium font-poppins-14-medium text-base bg-[transparent] relative leading-[20px] text-gray-700 text-center inline-block w-[85px] h-[21px] shrink-0"
              placeholder="15"
              type="number"
            />
            <div className="relative box-border w-[107.9px] h-px border-t-[1px] border-solid border-black1" />
          </div>
        </div>
        <div className="relative text-3xs text-gray-100">
          หมายเหตุ : อัตราดอกเบี้ยข้างต้นอาจมีการเปลี่ยนแปลงตามเงื่อนไข
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="self-stretch h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-gainsboro-100 rounded-lg w-32 h-[42px] overflow-hidden shrink-0 flex flex-col items-center justify-center"
            onClick={onPrev}
          >
            <div className="relative text-lg leading-[20px] font-semibold font-poppins-14-medium text-black1 text-center flex items-center justify-center w-[113px]">
              คำนวณใหม่
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] py-0 px-4 bg-darkorange rounded-lg w-[138px] h-[45px] overflow-hidden shrink-0 flex flex-col items-center justify-center box-border"
            onClick={onNext}
          >
            <div className="relative text-lg leading-[20px] font-semibold font-poppins-14-medium text-white text-center flex items-center justify-center w-[130px]">
              ลองยื่นข้อเสนอ
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc2;
