import React from 'react';
import AccepBtt from "../components/AccepBtt";

const Privacy2 = ({ onNext, onPrev }) => {

  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[18px] pb-[30px] box-border gap-[24px] text-center text-3xs text-gray-700 font-inter">
      <header className="self-stretch h-[38px] flex flex-col items-center justify-start gap-[15px] text-left text-xl text-black font-inter">
        <div className="relative font-semibold">ข้อกำหนดและเงื่อนไข</div>
        <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange" />
      </header>
      <div className="self-stretch h-[53px] flex flex-col items-center justify-start">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 5
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start text-left text-inherit text-gray-100 font-inter">
        <div className="self-stretch relative">
          <p className="m-0">ข้าพเจ้า (“ผู้กู้”)</p>
          <p className="m-0">
            มีความประสงค์ที่จะกู้ยืมเงินหรือขอสินเชื่อจากผู้ให้กู้
            ผ่านระบบเครือข่ายอิเล็กทรอนิกส์สำหรับธุรกรรมสินเชื่อระหว่างบุคคลกับบุคคลของบริษัท
            ได้เงิน
            ซึ่งจะทำหน้าที่เป็นตัวกลางในการจับคู่ผู้กู้และผู้ให้กู้ที่มีความประสงค์ตรงกัน
            ผู้กู้จึงตกลงใช้บริการระบบดังกล่าวตามที่ได้รับอนุมัติจากผู้ให้บริการ
            และยอมผูกพันตนและปฏิบัติตามข้อกำหนดและเงื่อนไขสำหรับผู้กู้
            ดังต่อไปนี้
          </p>
          <ul className="m-0 pl-[21px]">
            <li className="mb-0">
              <span className="font-medium">คำนิยาม</span>
            </li>
          </ul>
          <p className="m-0">
            ก. “คำขอกู้เงิน” หมายความถึง
            การแสดงความประสงค์ขอกู้เงินหรือขอสินเชื่อของผู้กู้
            โดยการกรอกแบบฟอร์มใบคำขอกู้เงิน
            และยื่นต่อผู้ให้บริการตามช่องทางและวิธีการที่ผู้ให้บริการกำหนด
          </p>
          <p className="m-0">
            ข. “ผู้กู้” หมายความถึง
            ผู้ที่มีความประสงค์จะกู้ยืมเงินหรือขอสินเชื่อ
          </p>
          <p className="m-0">
            ค. “ผู้ให้กู้” หมายความถึง
            ผู้ที่มีความประสงค์จะให้กู้ยืมเงินหรือให้สินเชื่อ
          </p>
          <p className="m-0">
            ง. “ผู้ให้บริการ” หมายความถึง บริษัท ได้เงิน ดอทคอม จำกัด
            ซึ่งประกอบธุรกิจให้บริการระบบหรือเครือข่ายอิเล็กทรอนิกส์สำหรับธุรกรรมสินเชื่อระหว่างบุคคลกับบุคคล
            ทั้งนี้ ให้หมายความรวมถึงบุคคลที่ผู้ให้บริการมอบหมายด้วย
          </p>
        </div>
      </section>
      <AccepBtt
        width="unset"
        alignSelf="stretch"
        bttWidth="unset"
        bttAlignSelf="stretch"
        onNext={onNext} 
        onPrev={onPrev}
      />
    </div>
  );
};

export default Privacy2;
