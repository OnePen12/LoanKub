import { useMemo } from "react";

const NextBtt1 = ({
  nextBttWidth,
  nextBttAlignSelf,
  nextBttBorder,
  nextBttPadding,
  nextBttBackgroundColor,
  nextButtonCursor,
  nextButtonBorder,
  divDisplay,
  onNext
}) => {
  const nextBttStyle = useMemo(() => {
    return {
      width: nextBttWidth,
      alignSelf: nextBttAlignSelf,
      border: nextBttBorder,
      padding: nextBttPadding,
      backgroundColor: nextBttBackgroundColor,
    };
  }, [
    nextBttWidth,
    nextBttAlignSelf,
    nextBttBorder,
    nextBttPadding,
    nextBttBackgroundColor,
  ]);

  const nextButtonStyle = useMemo(() => {
    return {
      cursor: nextButtonCursor,
      border: nextButtonBorder,
    };
  }, [nextButtonCursor, nextButtonBorder]);

  const divStyle = useMemo(() => {
    return {
      display: divDisplay,
    };
  }, [divDisplay]);

  return (
    <div
      className="w-full flex flex-col items-center justify-center cursor-pointer text-left text-xl text-white font-poppins-14-medium"
      onClick={onNext}
      style={nextBttStyle}
    >
      <div
        className="self-stretch rounded-3xs bg-darkorange h-10 flex flex-col items-center justify-center py-3 px-6 box-border"
        style={nextButtonStyle}
      >
        <div className="relative leading-[20px] font-semibold" style={divStyle}>
          ถัดไป
        </div>
      </div>
    </div>
  );
};

export default NextBtt1;
