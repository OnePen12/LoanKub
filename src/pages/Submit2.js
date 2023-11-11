import React from 'react';

const Submit2 = ({ onNext, onPrev }) => {

  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[30px] pb-[30px] box-border gap-[24px] text-center text-3xs text-gray-700 font-inter">
      <header className="self-stretch h-[38px] flex flex-col items-center justify-start gap-[15px] text-left text-xl text-black font-inter">
        <div className="relative font-semibold">ยื่นคำร้องขอ</div>
        <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange" />
      </header>
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 7
        </div>
      </div>
      
      <form className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch flex flex-row items-end justify-start gap-[10px] lg:flex-row lg:gap-[10px] lg:items-end lg:justify-start md:flex-row md:gap-[10px] md:items-end md:justify-start sm:flex-row sm:gap-[10px] sm:items-end sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
              <div className="flex-1 relative text-xs font-semibold font-inter text-mini-title text-left">
                ชื่อจริง
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
              <div className="flex-1 relative text-xs font-semibold font-inter text-mini-title text-left">
                นามสกุลจริง
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
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              หมายเลขบัตรประชาชน
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
            <div className="flex-1 relative text-sm leading-[20px] font-medium font-poppins-14-medium text-mini-title text-left">
              รูปถ่ายบัตรประชาชน
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
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              เบอร์โทรศัพท์มือถือ
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
            <div className="flex-1 relative text-sm leading-[20px] font-medium font-poppins-14-medium text-mini-title text-left">
              E-mail
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
            <div className="flex-1 relative text-sm leading-[20px] font-medium font-poppins-14-medium text-mini-title text-left">
              อาชีพ
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
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              รายได้ต่อเดือน
            </div>
          </div>
          <select
            className="self-stretch rounded-8xs bg-white shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            required={true}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              ที่อยู่ตามทะเบียนบ้าน
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
            <div className="flex-1 relative text-sm leading-[20px] font-medium font-poppins-14-medium text-mini-title text-left">
              รูปถ่ายสำเนาทะเบียนบ้าน
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
            <div className="flex-1 relative text-sm leading-[20px] font-medium font-poppins-14-medium text-mini-title text-left">
              สถานที่ทำงาน
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
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              ที่อยู่สถานที่ทำงาน
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] box-border h-[104px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-3 border-[1px] border-solid border-darkslategray"
            placeholder="ถนนธนาลัย ตำบลเวียง อำเภอเมือง เชียงราย 57000"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm leading-[20px] font-poppins-14-medium text-mini-title text-left">
              จำนวนเงินที่ต้องการกู้ยืม
            </div>
          </div>
          <div className="self-stretch rounded-8xs bg-white shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative text-sm leading-[20px] font-medium font-poppins-14-medium text-gray-100 text-left opacity-[0.4]">
                100,000
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              ระยะเวลาในการผ่อน
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="พ่อค้า, แม่ค้า"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              รูปแบบการผ่อนชำระ
            </div>
          </div>
          <input
            className="bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="รายเดือน"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              จำนวนงวดที่ต้องการผ่อนชำระ
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="พ่อค้า, แม่ค้า"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              อัตราดอกเบี้ยในการคำนวณ (ต่อปี)
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="15 %"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-3 pl-0">
            <div className="flex-1 relative text-sm font-poppins-14-medium text-mini-title text-left">
              ยอดเงินที่ต้องชำระต่องวด
            </div>
          </div>
          <input
            className="font-medium font-poppins-14-medium text-sm bg-white self-stretch rounded-8xs shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] overflow-hidden flex flex-col items-start justify-center p-3 border-[1px] border-solid border-darkslategray"
            placeholder="9000.00 บาท"
            type="number"
          />
        </div>
      </form>
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="self-stretch h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-gainsboro-100 rounded-lg w-32 h-[42px] overflow-hidden shrink-0 flex flex-col items-center justify-center"
            onClick={onPrev}
          >
            <div className="relative text-xl leading-[20px] font-semibold font-poppins-14-medium text-black1 text-center flex items-center justify-center w-[113px]">
              แก้ไขข้อมูล
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

export default Submit2;
