import React from 'react';
import Header from "../components/Header";
import NextBtt1 from "../components/NextBtt1";

const Calc1 = ({ onNext }) => {

  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[30px] pb-[30px] box-border gap-[24px] text-left text-xs text-black font-poppins-14-medium">
      <Header headerWidth="unset" headerAlignSelf="stretch" />
      <div className="self-stretch h-[53px] flex flex-col items-center justify-start text-center text-3xs text-gray-700 font-inter">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 1
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm font-roboto">
        <div className="self-stretch relative">{`จำนวนเงินที่ต้องการกู้ยืม `}</div>
        <input
          className="font-roboto text-base bg-white self-stretch rounded-3xs shadow-[0px_4px_18px_rgba(158,_168,_189,_0.31)] box-border h-9 flex flex-row items-center justify-start py-2 px-3 border-[1px] border-solid border-lightsteelblue"
          placeholder="10,000"
          type="number"
        />
        <div className="self-stretch relative text-[8px] font-poppins-14-medium text-gray-100">
          สามารถทำการกู้ยืมได้ตั้งแต่จำนวน 2,000 - 500,000 บาท
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm font-roboto">
        <div className="self-stretch relative">เลือกรูปแบบการผ่อนชำระ</div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[13px]">
          <button className="cursor-pointer p-0 bg-gainsboro-100 flex-1 relative rounded-lg box-border h-11 border-[1px] border-solid border-gray-400">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_27.65px)] text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-left inline-block w-[55.1px] h-[21.6px]">
              รายเดือน
            </div>
          </button>
          <button className="cursor-pointer p-0 bg-gainsboro-100 flex-1 relative rounded-lg box-border h-11 border-[1px] border-solid border-gainsboro-200">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_33.65px)] text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-left inline-block w-[66.9px] h-[21.6px]">
              รายสัปดาห์
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-gainsboro-100 flex-1 relative rounded-lg h-11">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_19.65px)] text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-left inline-block w-[39.9px] h-[21.6px]">
              รายวัน
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch relative">เลือกจำนวนงวดที่ต้องการชำระ</div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
          <button className="cursor-pointer py-[12.196510314941406px] px-0 bg-gainsboro-100 flex-1 rounded-lg box-border h-[43.2px] flex flex-col items-center justify-end border-[1px] border-solid border-gray-400">
            <div className="relative text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-center inline-block w-[23px] h-[18px] shrink-0">
              12
            </div>
          </button>
          <button className="cursor-pointer py-[12.196510314941406px] px-0 bg-gainsboro-100 flex-1 rounded-lg box-border h-[43.2px] flex flex-col items-center justify-end border-[1px] border-solid border-gray-400">
            <div className="relative text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-center inline-block w-7 h-[18px] shrink-0">
              18
            </div>
          </button>
          <button className="cursor-pointer py-[12.196510314941406px] px-[18.494552612304688px] bg-gainsboro-100 flex-1 rounded-lg box-border h-[43.2px] flex flex-col items-end justify-end border-[1px] border-solid border-gray-400">
            <div className="relative text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-center inline-block w-[30px] h-[18px] shrink-0">
              24
            </div>
          </button>
          <button className="cursor-pointer py-[12.196510314941406px] px-[16.989120483398438px] bg-gainsboro-100 flex-1 rounded-lg box-border h-[43.2px] flex flex-col items-end justify-end border-[1px] border-solid border-gray-400">
            <div className="relative text-sm leading-[20px] font-medium font-poppins-14-medium text-black1 text-center inline-block w-[33px] h-[18px] shrink-0">
              36
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch relative">ระยะเวลาในการผ่อนชำระ</div>
        <div className="self-stretch rounded-3xs bg-white shadow-[0px_4px_18px_rgba(158,_168,_189,_0.31)] box-border h-9 flex flex-row items-center justify-start py-2 px-3 text-base text-grey font-roboto border-[1px] border-solid border-lightsteelblue">
          <div className="flex-1 relative">12 เดือน (1 ปี)</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-center">
        <div className="self-stretch relative">
          อัตราดอกเบี้ยในการคำนวณ (ต่อปี)
        </div>
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
        <div className="self-stretch relative text-3xs text-gray-100">
          หมายเหตุ : อัตราดอกเบี้ยข้างต้นอาจมีการเปลี่ยนแปลงตามเงื่อนไข
        </div>
      </div>
      <NextBtt1
        onNext={onNext}
      />
    </div>
  );
};

export default Calc1;
