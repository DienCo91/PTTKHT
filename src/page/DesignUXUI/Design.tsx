import designuxui1 from "../../assets/img/designuxui1.png";
import Footer from "../../Component/Footer/Footer.tsx";
import ContactZalo from "../../Component/Contact/ContactZalo.tsx";
import { useRef, useState, useEffect } from "react";

const Design = () => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const showFull = useRef<HTMLDivElement>(null);
  const down = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLImageElement>(null);
  const right = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      right.current?.classList.remove("opacity-0");
      down.current?.classList.remove("opacity-0");
      left.current?.classList.remove("opacity-0");

      // Thực hiện các tác vụ khác ở đây nếu cần
    }, 400);

    // Đảm bảo hủy timeout khi component unmount để tránh lỗi
    return () => {
      clearTimeout(timer);
    };
  });
  const HandleShowFull = () => {
    setIsDown(!isDown);
    showFull.current?.classList.toggle("line-clamp-[4]");
  };
  return (
    <div className="mt-[200px] flex flex-col items-center w-full ">
      <img
        ref={left}
        className="mt-[-350px] hidden lg:block lg:absolute lg:right-[50px]  lg:top-[240px] opacity-0 transition-all duration-[1s] ease-in-out"
        src={designuxui1}
      />
      <div
        ref={down}
        className="w-4/5 flex flex-col opacity-0  transition-all duration-[2s] ease-in-out"
      >
        <div className=" text-3xl font-bold text-main ">Design UX & UI</div>
        <div
          ref={showFull}
          className="w-full lg:w-[60%] mt-8 text-justify line-clamp-[4] lg:line-clamp-none  transition-all duration-[0.5s] ease-in-out"
        >
          <p>
            Dịch vụ UI (User Interface) & UX (User Experience) Design của chúng
            tôi là một sự kết hợp tinh tế giữa nghệ thuật và khoa học để tạo ra
            trải nghiệm người dùng tuyệt vời trên mọi giao diện số. Chúng tôi
            không chỉ tập trung vào việc tạo ra giao diện đẹp mắt mà còn chú
            trọng đến việc tối ưu hóa trải nghiệm người dùng, giúp sản phẩm của
            bạn thu hút và nắm bắt sự chú ý của khách hàng một cách hiệu quả.
            Đội ngũ thiết kế của chúng tôi sẽ làm việc cùng bạn để hiểu rõ mục
            tiêu kinh doanh của bạn và đối tượng người dùng mục tiêu. Chúng tôi
            sẽ tạo ra giao diện dễ sử dụng, thân thiện với người dùng, và tối ưu
            hóa chức năng để đảm bảo rằng sản phẩm của bạn sẽ mang lại trải
            nghiệm đáng nhớ và tạo sự tương tác tích cực. Với sự kết hợp giữa
            sáng tạo và tầm nhìn chiến lược, chúng tôi cam kết giúp bạn xây dựng
            một giao diện thú vị và tối ưu hóa trải nghiệm người dùng, giúp sản
            phẩm của bạn nổi bật và thành công trong thế giới số hóa ngày nay.
          </p>
        </div>
        <div
          onClick={() => {
            HandleShowFull();
          }}
          className="w-full flex items-center justify-center  cursor-pointer z-30 lg:hidden "
        >
          {isDown ? (
            <i className="bi bi-chevron-compact-up text-[3em] text-main"></i>
          ) : (
            <i className="bi bi-chevron-compact-down text-[3em] text-main"></i>
          )}
        </div>
      </div>
      <div className="flex justify-center py-[100px] md:py-0">
        <img
          className=" block w-full md:w-auto   object-cover lg:hidden  mt-[-80px] mb-[-100px] md:mt-[-200px] "
          src={designuxui1}
        />
      </div>
      <div
        ref={right}
        className="w-4/5 flex flex-col  opacity-0  transition-all duration-[3s] ease-in-out"
      >
        <div className=" text-[20px] font-bold text-main lg:mt-[180px] md:mt-[-150px] ">
          Tiêu chí làm thiết kế
        </div>
        <div className="flex flex-col text-center mt-5  lg:flex-row">
          <div className="lg:w-1/2 lg:flex-row">
            <div className="font-medium tracking-wider lg:m-4 rounded-3xl text-[1em] p-4 text-center bg-main text-white mt-2 mb-2 ">
              Giao diện thân thiện, dễ sử dụng{" "}
            </div>
            <div className="font-medium tracking-wider lg:m-4 rounded-3xl text-[1em] p-4 text-center bg-main text-white mt-2 mb-2">
              Tốc độ tải nhanh, dưới 3s{" "}
            </div>
            <div className="font-medium tracking-wider lg:m-4 rounded-3xl text-[1em] p-4 text-center bg-main text-white mt-2 mb-2">
              Thiết kế chuẩn SEO
            </div>
          </div>
          <div className="lg:w-1/2 lg:flex-row">
            <div className="font-medium tracking-wider lg:m-4 rounded-3xl text-[1em] p-4 text-center bg-main text-white mt-2 mb-2">
              Hiện đại, đơn giản, phù hợp xu hướng tiếp cận{" "}
            </div>
            <div className="font-medium tracking-wider lg:m-4 rounded-3xl text-[1em] p-4 text-center bg-main text-white mt-2 mb-2">
              Thực hiện hóa mọi yêu cầu của khách hàng{" "}
            </div>
            <div className="font-medium tracking-wider lg:m-4 rounded-3xl text-[1em] p-4 text-center bg-main text-white mt-2 mb-2">
              Luôn ưu tiên khách hàng và chất lượng dịch vụ{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[80%] mt-[60px] ">
        <ContactZalo />
      </div>
      <div className="w-full mt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default Design;
