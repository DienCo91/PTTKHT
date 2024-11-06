import { useEffect, useRef } from "react";
import processWork from "@/assets/img/Process-work.png";
import Footer from "@/Component/Footer/Footer";
import process from "@/assets/img/process.png";

const ProcessWork = () => {
  const fullwidth = useRef<HTMLDivElement>(null);
  const fullwidthItems = useRef<HTMLDivElement>(null);
  const imgProcess = useRef<HTMLImageElement>(null);
  const titleProcess = useRef<HTMLDivElement>(null);
  const listStep = useRef<HTMLDivElement>(null);
  document.body.style.overflowX = "hidden";
  useEffect(() => {
    const timer = setTimeout(() => {
      fullwidth.current?.classList.remove("w-0");
      fullwidth.current?.classList.add("w-full");
      imgProcess.current?.classList.remove(
        ..."translate-x-[200px] opacity-0".split(" ")
      );
      titleProcess.current?.classList.remove(
        ..."translate-y-[-100px] opacity-0".split(" ")
      );
      listStep.current?.classList.remove(..."opacity-0 mt-[80px]".split(" "));
    }, 800);
    const timerItems = setTimeout(() => {
      fullwidthItems.current?.classList.remove(..."opacity-0".split(" "));
    }, 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerItems);
    };
  });
  return (
    <div>
      <div className="z-10 w-full relative h-screen">
        <img
          src={processWork}
          alt="processWork"
          className="w-full relative h-screen  object-cover "
        />
        <div className="absolute bg-[#a9a9a957]  h-full bottom-0 w-full flex flex-col items-center z-30 ">
          <div className=" mt-[120px] w-[80%]">
            <div className="flex items-center ">
              <img
                ref={imgProcess}
                src={process}
                alt="process"
                className="w-[8em] lg:w-[12em]  translate-x-[200px] transition-all duration-[2s] ease-in-out opacity-0"
              />
              <div
                ref={titleProcess}
                className="bg-[#083d598b] translate-y-[-100px] opacity-0 transition-all duration-[2s] ease-in-out w-full flex justify-center flex-col text-center rounded-md border-solid border-[2px] shadow-md p-[20px] text-white text-[0.8em]"
              >
                <div className="text-[1em] md:text-[2em] font-semibold tracking-wider">
                  8 Quy Trình Thực Hiện Chính
                </div>
                <div className="text-[1em] md:text-[1.5em] opacity-95">
                  Mọi thông tin chi tiết quý khách hàng có nhu cầu tham khảo xin
                  vui lòng liên hệ tới bộ phận chăm sóc khách hàng
                </div>
              </div>
            </div>

            {/* display low resolution */}
            <div
              ref={listStep}
              className="flex xl:hidden z-30 mt-[4px]  lg:mt-[40px] opacity-0 mt-[80px] transition-all duration-[3s] ease-in-out"
            >
              <div className=" flex  justify-between w-full flex-wrap ">
                <div className="flex flex-col-reverse">
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-4-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#56c34a] text-white p-[10px] rounded-md ">
                      Làm hợp đồng
                    </p>
                  </div>
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-3-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#4EAAFF] text-white p-[10px] rounded-md">
                      Báo giá
                    </p>
                  </div>
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-2-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#56c34a] text-white p-[10px] rounded-md">
                      Tư vấn và đề xuất
                    </p>
                  </div>
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-1-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#4EAAFF] text-white p-[10px] rounded-md">
                      Khảo sát và xác định
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse">
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-8-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#56c34a] text-white p-[10px] rounded-md text-[16px] lg:text-[20px]">
                      5% còn lại sẽ được ngân hàng giữ hộ cho đến khi hết bảo
                      hành
                    </p>
                  </div>
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-7-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#4EAAFF] text-white p-[10px] rounded-md">
                      Chốt sản phẩm và thanh toán
                    </p>
                  </div>
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-6-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#56c34a] text-white p-[10px] rounded-md">
                      Lắng nghe và chỉnh sửa theo ý khách hàng
                    </p>
                  </div>
                  <div className="flex items-center mb-[6px] lg:mb-[20px]">
                    <i className="bi bi-5-circle text-center top-[-50px] text-[24px] mr-[20px] text-main"></i>
                    <p className="bg-[#4EAAFF] text-white p-[10px] rounded-md">
                      Thực hiện nghiệm vụ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* display hight resolution */}
        <div
          ref={fullwidth}
          className="w-0 h-[1.5px] bg-main xl:flex hidden  transition-all duration-[2s] ease-in-out absolute z-30 top-[360px]  justify-between "
        >
          <div
            ref={fullwidthItems}
            className="opacity-0 flex  w-full justify-around transition-all duration-[2s] ease-in-out "
          >
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-1-circle absolute text-center top-[-50px] text-[30px] text-main"></i>

              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#4EAAFF]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#4EAAFF] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center ">
                    Khảo sát và xác định
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-2-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#56c34a]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#56c34a] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center">
                    Tư vấn và đề xuất
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-3-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#4EAAFF]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#4EAAFF] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center">
                    Báo giá
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-4-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#56c34a]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#56c34a] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center">
                    Làm hợp đồng
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-5-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#4EAAFF]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#4EAAFF] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center">
                    Thực hiện nghiệm vụ
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-6-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#56c34a]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#56c34a] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center">
                    Lắng nghe và chỉnh sửa theo ý khách hàng
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-7-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#4EAAFF]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#4EAAFF] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center">
                    Chốt sản phẩm và thanh toán
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-[230px]  flex-col items-center relative">
              <i className="bi bi-8-circle absolute text-center top-[-50px] text-[30px] text-main"></i>
              <div className="w-[1px] h-[60px] bg-main"></div>
              <div className="w-[150px] h-[150px] bg-transparent transition-all duration-[3s] ease-in-out border-[1px] border-[#56c34a]  rotate-45 flex justify-center items-center rounded-md  translate-y-7 ">
                <div className="w-[130px] h-[130px] bg-[#56c34a] rounded-md flex justify-center items-center">
                  <div className="rotate-[315deg] text-white text-center text-[14px]">
                    5% còn lại được ngân hàng giữ đến khi hết bảo hành
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProcessWork;
