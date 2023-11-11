const TableContainer = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center">
      <table className="self-stretch rounded-8xs bg-white overflow-hidden border-[1px] border-solid border-gainsboro-100">
        <thead>
          <tr className="bg-darkorange">
            <th className="relative pr-0 pb-0">
              <div className="bg-gray-500 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <b className="flex-1 relative text-4xs font-inter text-white text-left">
                    <p className="m-0">งวดที่</p>
                    <p className="m-0">ต้องชำระ</p>
                  </b>
                </div>
              </div>
            </th>
            <th className="relative pr-0 pb-0">
              <div className="bg-gray-500 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <b className="flex-1 relative text-4xs font-inter text-white text-left">
                    <p className="m-0">ยอดเงิน</p>
                    <p className="m-0">ที่ต้องชำระ</p>
                  </b>
                </div>
              </div>
            </th>
            <th className="relative pr-0 pb-0">
              <div className="bg-gray-500 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <b className="flex-1 relative text-4xs font-inter text-white text-left">
                    ดอกเบี้ย
                  </b>
                </div>
              </div>
            </th>
            <th className="relative pr-0 pb-0">
              <div className="bg-gray-500 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <b className="flex-1 relative text-4xs font-inter text-white text-left">
                    ชำระเงินต้น
                  </b>
                </div>
              </div>
            </th>
            <th className="relative pb-0">
              <div className="bg-gray-500 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <b className="flex-1 relative text-4xs font-inter text-white text-left">
                    เงินต้น
                  </b>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-start justify-start w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-xs leading-[130%] font-inter text-black1 text-left" />
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-start justify-start w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-xs leading-[130%] font-inter text-black1 text-left" />
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-start justify-start w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-xs leading-[130%] font-inter text-black1 text-left" />
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-start justify-start w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-xs leading-[130%] font-inter text-black1 text-left" />
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-center">
                    100,000.00
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 1
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    1,233.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,240.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    91,776.23
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 2
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    1,169.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,304.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    83,449.66
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 3
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    1,063.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,410.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    75,019.01
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 4
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    956.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,517.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    66,482.98
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 5
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    848.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,625.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    57,840.25
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 6
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    714.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,759.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    49,089.48
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 7
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    626.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,847.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    40,229.33
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 8
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    497.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    8,976.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    31,369.18
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 9
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    399.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,074.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-center">
                    22,287.52
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 10
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    283.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,190.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-center">
                    13,092.34
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 11
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,473.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    156.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0 pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    9,317.77
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pb-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-center">
                    3,782.22
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-600">
            <td className="relative pr-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-2xs leading-[130%] font-inter text-black1 text-left">
                    งวดที่ 12
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    3,782.22
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    48.00
                  </div>
                </div>
              </div>
            </td>
            <td className="relative pr-0">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-left">
                    3,729.53
                  </div>
                </div>
              </div>
            </td>
            <td className="relative">
              <div className="bg-gray-600 box-border flex flex-col items-center justify-center w-full h-full border-t-[1px] border-solid border-gainsboro-100 border-l-[1px]">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                  <div className="flex-1 relative text-4xs font-semibold font-inter text-black1 text-center">
                    -
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableContainer;
