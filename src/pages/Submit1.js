import React from 'react';
import NextBtt1 from "../components/NextBtt1";

const Submit1 = ({ onNext }) => {

  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[30px] pb-[30px] box-border gap-[24px] text-center text-3xs text-gray-700 font-inter">
      <header className="self-stretch h-[38px] flex flex-col items-center justify-start gap-[15px] text-left text-xl text-black font-inter">
        <div className="relative font-semibold">ยื่นคำร้องขอ</div>
        <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange" />
      </header>
      <div className="self-stretch h-[53px] flex flex-col items-center justify-start">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 4
        </div>
      </div>
      <form className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch flex flex-row items-end justify-start gap-[10px] lg:flex-row lg:gap-[10px] lg:items-end lg:justify-start md:flex-row md:gap-[10px] md:items-end md:justify-start sm:flex-row sm:gap-[10px] sm:items-end sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
              <div className="flex-1 relative text-xs font-semibold font-inter text-left">
                <span className="text-mini-title">ชื่อจริง</span>
                <span className="text-red">*</span>
              </div>
            </div>
            <input
              className="font-roboto text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
              placeholder="John"
              type="text"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
              <div className="flex-1 relative text-xs font-semibold font-inter text-left">
                <span className="text-mini-title">นามสกุลจริง</span>
                <span className="text-red">*</span>
              </div>
            </div>
            <input
              className="font-roboto text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
              placeholder="Son"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm text-left">
              <span className="font-poppins-14-medium text-mini-title">
                หมายเลขบัตรประชาชน
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="99-999-9999-9999"
            type="number"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm leading-[20px] text-left">
              <span className="font-medium font-poppins-14-medium text-mini-title">
                รูปถ่ายบัตรประชาชน
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="self-stretch rounded-8xs bg-white shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            required={true}
            type="file"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm text-left">
              <span className="font-poppins-14-medium text-mini-title">
                เบอร์โทรศัพท์มือถือ
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="font-roboto text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="Phone number"
            type="number"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm leading-[20px] text-left">
              <span className="font-medium font-poppins-14-medium text-mini-title">
                E-mail
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="yourmail@gmail.com"
            type="email"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm leading-[20px] text-left">
              <span className="font-medium font-poppins-14-medium text-mini-title">
                อาชีพ
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="พ่อค้า, แม่ค้า"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm text-left">
              <span className="font-poppins-14-medium text-mini-title">
                รายได้ต่อเดือน
              </span>
              <b className="font-poppins-14-medium text-red">*</b>
            </div>
          </div>
          <select
            className="self-stretch rounded-8xs bg-white shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            required={true}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm text-left">
              <span className="font-poppins-14-medium text-mini-title">
                ที่อยู่ตามทะเบียนบ้าน
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] box-border h-[104px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-3 border-[1px] border-solid border-darkslategray"
            placeholder={`99/999 ถนนบำรุงราษฎ์ ตำบลพิบูลสงคราม อำเภอเมือง เชียงราย 51000`}
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm leading-[20px] text-left">
              <span className="font-medium font-poppins-14-medium text-mini-title">
                รูปถ่ายสำเนาทะเบียนบ้าน
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="self-stretch rounded-8xs bg-white shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            required={true}
            type="file"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm leading-[20px] text-left">
              <span className="font-poppins-14-medium text-mini-title">
                สถานที่ทำงาน
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="ถนนคนเดินเชียงราย"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm text-left">
              <span className="font-poppins-14-medium text-mini-title">
                ที่อยู่สถานที่ทำงาน
              </span>
              <b className="font-poppins-14-medium text-firebrick">*</b>
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] box-border h-[104px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-3 border-[1px] border-solid border-darkslategray"
            placeholder="ถนนธนาลัย ตำบลเวียง อำเภอเมือง เชียงราย 57000"
            type="text"
          />
        </div>
      </form>
      <NextBtt1
        nextBttWidth="unset"
        nextBttAlignSelf="stretch"
        nextBttBorder="unset"
        nextBttPadding="unset"
        nextBttBackgroundColor="unset"
        nextButtonCursor="pointer"
        nextButtonBorder="none"
        divDisplay="inline-block"
        onNext={onNext}
      />
    </div>
  );
};

export default Submit1;
