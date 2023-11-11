import React from 'react';

const Success = () => {
  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[18px] pb-[30px] box-border gap-[24px] text-center text-3xs text-gray-700 font-inter">
      <header className="self-stretch h-[38px] flex flex-col items-center justify-start gap-[15px] text-left text-xl text-black font-inter">
        <div className="relative font-semibold">ยื่นคำร้องเสร็จสมบูรณ์</div>
        <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange" />
      </header>
      <div className="self-stretch h-[53px] flex flex-col items-center justify-start">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 8
        </div>
      </div>
      <main className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-center justify-start py-3.5 px-[60px] gap-[31px] text-center text-xl text-limegreen font-inter border-[1px] border-solid border-gray-300">
        <img
          className="relative w-[82px] h-[82px]"
          alt=""
          src="/check-circle.svg"
        />
        <b className="self-stretch relative">ส่งคำร้องขอเรียบร้อยแล้ว</b>
        <div className="self-stretch relative text-base font-semibold text-gold">
          โปรดรอการพิจารณา
        </div>
        <div className="self-stretch relative text-xs text-gray-200">
          <span className="font-light">{`ระบบจะทำการแจ้งผลให้ทราบภายใน `}</span>
          <span>48</span>
          <span className="font-light"> ช.ม.</span>
        </div>
      </main>
    </div>
  );
};

export default Success;
