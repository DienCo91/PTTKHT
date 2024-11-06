import imgWebService from "../../assets/img/websevice.png";
import imgReact from "../../assets/img/react.png";
import imgPhp from "../../assets/img/PHP.png";
import imgAgular from "../../assets/img/Angular.png";
import imgDocker from "../../assets/img/1200px-Docker_(container_engine)_logo.svg.png";
import imgNode from "../../assets/img/1200px-Node.js_logo.svg.png";
import imgPostgre from "../../assets/img/Postgresql_elephant.svg.png";
import imgPy from "../../assets/img/Python.png";
import imgAsp from "../../assets/img/asp.net.png";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../../Component/Footer/Footer";

const ServiceWeb = () => {
  const down = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLImageElement>(null);
  const slider = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        slider.current?.classList.remove(..."mt-[300px] opacity-0".split(" "));
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="mt-[200px] flex flex-col items-center w-full relative">
      <img
        ref={right}
        src={imgWebService}
        alt="imgWebService"
        className=" mt-[-100px] hidden lg:block  lg:absolute   lg:right-[30px] opacity-0 lg:top-[100px]  transition-all duration-[1s] ease-in-out"
      />

      <div className="w-[80%] px-[10px]">
        <div
          ref={down}
          className="opacity-0 transition-all  duration-[1s] ease-in-out"
        >
          <div className="text-main text-[30px] font-semibold ">
            Website Design & Development
          </div>
          <div className="lg:w-[60%] w-full my-[40px] text-[1.1em]">
            Treepulse coi khách hàng của chúng tôi là đối tác chứ không chỉ là
            khách hàng: chúng tôi tin tưởng vào ý tưởng của bạn và biết cách
            chuyển tầm nhìn của bạn thành các ứng dụng Website hàng đầu và trang
            Website được cá nhân hóa
          </div>
        </div>
        <div ref={left} className="flex flex-col  text-[1.1em] opacity-0 ">
          <img
            src={imgWebService}
            alt="imgWebService"
            className=" mt-[20px] block lg:hidden  lg:top-[100px] h-[260px] object-contain transition-all duration-[1s] ease-in-out"
          />
          <div className="flex justify-between lg:w-[50%] w-full">
            <div>
              <div>
                <i className="bi bi-activity text-[24px] px-3 text-icon"></i>
                Website chăm sóc sức khỏe
              </div>
              <div>
                <i className="bi bi-mortarboard-fill text-[24px] px-3 text-icon"></i>
                Website giáo dục
              </div>
              <div>
                <i className="text-[24px] px-3 text-icon bi bi-bag"></i>Website
                thương mại điện tử & bán lẻ
              </div>
              <div>
                <i className="text-[24px] px-3 text-icon bi bi-house"></i>
                Website bất động sản
              </div>
              <div>
                <i className="text-[24px] px-3 text-icon bi bi-phone"></i>
                Website Fintech
              </div>
              <div>
                <i className="text-[24px] px-3 text-icon bi bi-globe"></i>Mạng
                xã hội
              </div>
            </div>
          </div>
        </div>
        <div
          ref={slider}
          className="mt-[200px] mt-[300px] opacity-0 transition-all duration-[1s] ease-in-out"
        >
          <div className="xl:flex hidden  items-center">
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className="flex items-center ">
                  <img
                    src={imgReact}
                    alt="img react"
                    className="h-[100px] object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={imgAgular}
                  alt="img angular"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgAsp}
                  alt="imgAsp"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgDocker}
                  alt="imgDocker"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={imgNode}
                  alt="imgNode"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgPostgre}
                  alt="imgPostgre"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgPy}
                  alt="imgPy"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={imgPhp}
                  alt="imgDocker"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex xl:hidden  items-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className="flex items-center ">
                  <img
                    src={imgReact}
                    alt="img react"
                    className="h-[100px] object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={imgAgular}
                  alt="img angular"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgAsp}
                  alt="imgAsp"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgDocker}
                  alt="imgDocker"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={imgNode}
                  alt="imgNode"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgPostgre}
                  alt="imgPostgre"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src={imgPy}
                  alt="imgPy"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={imgPhp}
                  alt="imgDocker"
                  className="h-[100px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mt-[200px]">
          <div className="text-main text-[30px] font-semibold">
            Development and Maintenance Policy
          </div>
          <div className="mt-[60px] text-justify text-[1.1em]">
            <div>
              {" "}
              <span className="text-icon font-semibold"> 1.</span> Mục đích và
              Phạm vi Chính sách này được thiết lập để định rõ quy trình phát
              triển và bảo trì trang web cho khách hàng của chúng tôi. Nhiệm vụ
              của chúng tôi là cung cấp các dịch vụ chất lượng cao, duyệt qua và
              bảo trì các ứng dụng web của bạn, nhằm đảm bảo tính ổn định, hiệu
              suất và bảo mật.
            </div>{" "}
            <div className="mt-[20px]">
              {" "}
              <span className="text-icon font-semibold"> 2.</span> Phát Triển
              Trang Web
            </div>{" "}
            <div className="mt-[10px] ml-[10px]">
              <span>
                <i className="bi bi-check-lg text-icon text-[1.4em]"></i>
              </span>{" "}
              Phân Tích và Lập Kế Hoạch: Trước khi bắt đầu phát triển, chúng tôi
              sẽ tiến hành phân tích yêu cầu, lập kế hoạch và thiết kế chi tiết
              để đảm bảo rằng trang web sẽ đáp ứng tất cả các yêu cầu của bạn.
            </div>{" "}
            <div className="mt-[10px] ml-[10px]">
              <span>
                <i className="bi bi-check-lg text-icon text-[1.4em]"></i>
              </span>{" "}
              Phát Triển: Chúng tôi sẽ tiến hành phát triển trang web dưới sự
              giám sát chặt chẽ và tuân thủ các tiêu chuẩn và quy định ngành.
            </div>{" "}
            <div className=" mt-[20px]">
              <span className="text-icon font-semibold"> 3.</span> Bảo Trì Trang
              Web
            </div>
            <div className="mt-[10px] ml-[10px]">
              {" "}
              <span>
                <i className="bi bi-check-lg text-icon text-[1.4em]"></i>
              </span>{" "}
              Sự Quan Tâm Liên Tục: Chúng tôi cam kết cung cấp bảo trì định kỳ
              và theo yêu cầu để đảm bảo tính ổn định và hiệu suất của trang
              web.{" "}
            </div>
            <div className="mt-[10px] ml-[10px]">
              <span>
                <i className="bi bi-check-lg text-icon text-[1.4em]"></i>
              </span>{" "}
              Cập Nhật và Bảo Mật: Chúng tôi sẽ duyệt qua và cập nhật trang web
              để giữ hệ thống / mạng lưới website luôn an toàn và tuân thủ các
              tiêu chuẩn bảo mật hiện hành.
            </div>{" "}
            <div className="mt-[20px]">
              {" "}
              <span className="text-icon font-semibold"> 4.</span> Hợp Đồng và
              Thanh Toán
            </div>{" "}
            <div className="mt-[10px] ml-[10px]">
              <span>
                <i className="bi bi-check-lg text-icon text-[1.4em]"></i>
              </span>{" "}
              Hợp Đồng Dịch Vụ: Mọi thông tin về giá cả, thời gian hoàn thành,
              và dịch vụ tiêu chuẩn sẽ được thể hiện trong hợp đồng dịch vụ cụ
              thể cho mỗi dự án.
            </div>{" "}
            <div className="mt-[10px] ml-[10px]">
              <span>
                <i className="bi bi-check-lg text-icon text-[1.4em]"></i>
              </span>{" "}
              Thanh Toán: Thanh toán sẽ được thực hiện theo các điều khoản và
              thời hạn đã được thỏa thuận trong hợp đồng.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default ServiceWeb;
