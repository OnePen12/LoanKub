import { useMemo } from "react";

const Header = ({ headerWidth, headerAlignSelf }) => {
  const headerStyle = useMemo(() => {
    return {
      width: headerWidth,
      alignSelf: headerAlignSelf,
    };
  }, [headerWidth, headerAlignSelf]);

  return (
    <div
      className="w-full h-[38px] flex flex-col items-center justify-start gap-[15px] text-left text-xl text-black font-roboto"
      style={headerStyle}
    >
      <b className="relative">คำนวณเงินกู้</b>
      <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange" />
    </div>
  );
};

export default Header;
