import React from 'react';
import AccepBtt from "../components/AccepBtt";

const Privacy = ({ onNext, onPrev }) => {

  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_20px_#989796] w-full flex flex-col items-start justify-start pt-4 px-[18px] pb-[30px] box-border gap-[24px] text-center text-3xs text-gray-700 font-inter">
      <header className="self-stretch h-[38px] flex flex-col items-center justify-start gap-[15px] text-left text-xl text-black font-inter">
        <div className="relative font-semibold">นโยบายคุ้มครองส่วนบุคคล</div>
        <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange" />
      </header>
      <div className="self-stretch h-[53px] flex flex-col items-center justify-start">
        <div className="relative font-medium inline-block w-[58px]">
          ขั้นตอนที่ 3
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start text-left text-3xs text-gray-100 font-poppins-14-medium">
        <div className="self-stretch relative">
          <p className="m-0 text-xs">
            <b>นโยบายการคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)</b>
          </p>
          <p className="m-0">
            นี้อยู่ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
            โดยบริษัทมีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคล ซึ่งตามกฎหมายเรียกว่า
            ‘ผู้ควบคุมข้อมูลส่วนบุคคล’
            โดยมีพนักงานที่บริษัทมอบหมายโดยเฉพาะให้มีหน้าที่ดำเนินการ
          </p>
          <p className="m-0">
            เกี่ยวกับการเก็บรวบรวม ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของบริษัท
            ซึ่งตามกฎหมายเรียกว่า ‘ผู้ประมวลผลข้อมูลส่วนบุคคล’ ส่วนท่านถือเป็น
            ‘เจ้าของข้อมูลส่วนบุคคล’ ตามกฎหมายนี้
          </p>
          <p className="m-0"></p>
          <p className="m-0">
            ข้อ 1. ข้อมูลส่วนบุคคลอะไรบ้างที่บริษัทเก็บรวบรวม ใช้
            และ/หรือเปิดเผย
          </p>
          <p className="m-0">
            เราจะเก็บรวบรวมข้อมูลส่วนบุคคลซึ่งเป็นข้อมูลที่ทำให้สามารถระบุตัวตนของท่านได้
            ไม่ว่าทางตรงหรือทางอ้อม ได้แก่
            ข้อมูลที่ท่านให้ไว้โดยตรงจากการลงทะเบียนผ่านระบบ
            การลงทะเบียนเข้าร่วมกิจกรรมต่างๆ ของบริษัท คุกกี้ ข้อมูลการทำรายการ
            และประสบการณ์การใช้งานผ่านหน้าเว็บไซต์ ผู้ที่ได้รับมอบหมาย
            หรือช่องทางอื่นใด เช่น
          </p>
          <p className="m-0">
            ข้อมูลส่วนตัว เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สถานภาพสมรส
            เลขประจำตัวประชาชน เลขหนังสือเดินทาง
          </p>
          <p className="m-0">
            ข้อมูลการติดต่อ เช่น ที่อยู่อาศัย สถานที่ทำงาน หมายเลขโทรศัพท์ อีเมล
            ไอดีไลน์
          </p>
          <p className="m-0">
            ข้อมูลอุปกรณ์หรือเครื่องมือ เช่น IP Address MAC Address Cookie ID
          </p>
          <p className="m-0">
            ข้อมูลอื่นๆ เช่น การใช้งานเว็บไซต์ เสียง ภาพนิ่ง ภาพเคลื่อนไหว
            และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล
          </p>
          <p className="m-0"></p>
          <p className="m-0">
            ข้อ 2. วัตถุประสงค์ในการเก็บรวบรวม ใช้ และ/หรือเปิดเผยข้อมูล
          </p>
          <p className="m-0">
            เราจะนำข้อมูลของท่านมาใช้เพื่อการพัฒนาและปรับปรุงเว็บไซต์
            แพลตฟอร์มออนไลน์ และช่องทางโซเชียลมีเดียอื่นๆ ในเครือ
            ตลอดจนการวิเคราะห์และประมวลผลข้อมูลส่วนบุคคล
            เพื่อให้ตอบโจทย์การใช้งานของผู้ใช้งาน
            ด้วยวิธีการทางอิเล็กทรอนิกส์แก่ท่านให้มีประสิทธิภาพมากยิ่งขึ้มมา
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

export default Privacy;
