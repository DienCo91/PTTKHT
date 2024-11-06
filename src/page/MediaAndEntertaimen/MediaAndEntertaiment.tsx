import  { useEffect, useRef } from "react";
import computer from "@/assets/img/computer.png";
import Footer from "@/Component/Footer/Footer";
import "@/page/MediaAndEntertaimen/Media.css";
import ContactZalo from "@/Component/Contact/ContactZalo";
import facebook from "../../assets/img/facebook.png";
import tiktok from "../../assets/img/tiktiok.png";
import insta from "../../assets/img/insta.png";
import link from "../../assets/img/in.png";
import X from "../../assets/img/x.png";
const MediaAndEntertaiment = () => {
  const down = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      down.current?.classList.remove("opacity-0");
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div>
      <div
        ref={down}
        className="mt-[200px] mx-auto w-4/5 opacity-0 transition-all duration-[1s] ease-in-out"
        data-aos="fade-up"
      >
        <h1 className="text-main font-sans text-4xl mb-5 font-semibold">
          Media and entertainment
        </h1>
        <div className=" ">
          <div className="text">
            <div className="flex main">
              <div className="mgb-20">
                <p className="text-base">
                  {" "}
                  Công ty của chúng tôi tự hào giới thiệu một loạt dịch vụ đa
                  dạng nhằm giúp bạn tạo nên một hiện diện mạnh mẽ và ấn tượng
                  trên internet. Với sự tập trung vào nền tảng mạng xã hội và
                  giải trí, chúng tôi mang đến các giải pháp chất lượng và sáng
                  tạo để thúc đẩy sự thành công của bạn:
                </p>
                <ul>
                  <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                    Review trên TikTok: Chúng tôi có đội ngũ những người tài
                    năng và sáng tạo sẽ tạo ra những video review ấn tượng trên
                    TikTok để giới thiệu sản phẩm hoặc dịch vụ của bạn đến hàng
                    triệu người dùng trên nền tảng này.
                  </li>
                  <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                    Booking: Dịch vụ booking của chúng tôi giúp bạn quản lý và
                    tối ưu hóa lịch làm việc, sự kiện hoặc cuộc họp một cách dễ
                    dàng và hiệu quả.
                  </li>
                  <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                    Chạy quảng cáo trên các nền tảng mạng xã hội: Chúng tôi sử
                    dụng kiến thức sâu rộng về quảng cáo trực tuyến để tạo ra
                    chiến dịch quảng cáo hiệu quả trên các nền tảng mạng xã hội
                    như Facebook, Instagram, và Twitter.
                  </li>
                  <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                    Làm các clip và bài viết giải trí: Đội ngũ sáng tạo của
                    chúng tôi sẽ tạo ra các video clip và bài viết giải trí độc
                    đáo, đảm bảo thu hút sự chú ý của khán giả và tạo nên một
                    thương hiệu độc đáo và thú vị.
                  </li>
                </ul>
              </div>
              <img
                src={computer}
                alt="ảnh"
                className="w-[537px] h-[470px] mt-[-80px]"
              />
            </div>
            <p className="text-base mb-5 w-[56%] para">
              Chúng tôi cam kết cùng bạn xây dựng một hiện diện trực tuyến mạnh
              mẽ và thú vị, giúp bạn tiếp cận khách hàng tiềm năng và phát triển
              kinh doanh một cách bền vững. Hãy để chúng tôi hỗ trợ bạn trên
              hành trình này!
            </p>
            <div className="flex flex-wrap servise" data-aos="fade-right">
              <h3 className="btn2 drop-shadow-md rounded-2xl bg-main mr-7 text-white text-base text-center py-4 px-3 mb-5">
                Tư vấn dịch vụ
              </h3>
              <h3 className="btn2 drop-shadow-md rounded-2xl bg-main mr-7 text-white text-base text-center py-4 px-3 mb-5">
                Chiến dịch quảng bá
              </h3>
              <h3 className="btn2 drop-shadow-md rounded-2xl bg-main mr-7 text-white text-base text-center py-4 px-3 mb-5">
                Hỗ trợ quảng cáo
              </h3>
              <h3 className="btn2 drop-shadow-md rounded-2xl bg-main mr-7 text-white text-base text-center py-4 px-3 mb-5">
                Các nền tảng mạng xã hội
              </h3>
            </div>
          </div>
          {/* <img src={computer} alt="ảnh" className="w-[537px] h-[470px]"/> */}
        </div>
        <div className="my-11 flex icon ">
          <a
            href="https://www.facebook.com/TechnologyandCommunications?mibextid=LQQJ4d&locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            className="margin-12px button h-[fit-content] mx-[20px] my-11 w-[48px]"
          >
            <img src={facebook} alt="icon" />
          </a>
          <a
            className="margin-12px button h-[fit-content] mx-[20px] my-11 w-[48px]"
            href=""
          >
            <img src={insta} alt="icon" />
          </a>
          <a
            className="margin-12px button h-[fit-content] mx-[20px] my-11 w-[48px]"
            href="https://www.tiktok.com/@bimbimvidau?_t=8gO6SSzdr0M&_r=1"
          >
            <img src={tiktok} alt="icon" />
          </a>
          <a
            className="margin-12px button h-[fit-content] mx-[20px] my-11 w-[48px]"
            href="https://www.linkedin.com/in/pulse-tree-06342a295"
          >
            <img src={link} alt="icon" />
          </a>
          <a
            className="margin-12px button h-[fit-content] mx-[20px] my-11 w-[48px]"
            href="https://twitter.com/TreePulse"
          >
            <img src={X} alt="icon" />
          </a>
        </div>
        <div className="flex justify-end w-[100%] mt-[60px] mb-[60px]">
          <ContactZalo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaAndEntertaiment;
