import aboutUs1 from "../../assets/img/aboutus1.png";
import aboutUs2 from "../../assets/img/aboutus2.png";
import aboutUs3 from "../../assets/img/aboutus3.png";
import aboutUs4 from "../../assets/img/aboutUs4.png";

import Footer from "../../Component/Footer/Footer.tsx";
import ContactZalo from "../../Component/Contact/ContactZalo.tsx";
import "./style.scss";
const AboutUS = () => {
  return (
    <div className="mt-[200px] flex flex-col items-center w-full ">
      <div className="w-4/5 flex flex-col">
        <div className="text-3xl font-bold text-main text-center mb-[40px]">
          Về chúng tôi
        </div>

        <div className="w-full ">
          <p className=" text-justify text-[1rem] lg:text-[1.2rem]">
            Treepulse luôn tự hào khi có thể đem đến cho bạn sự trải nghiệm dịch
            vụ một cách hài lòng nhất. Chúng tôi luôn mang đến
            <span className="font-semibold">
              {" "}
              GIÁ TRỊ ĐỂ BẠN TIN TƯỞNG VÀ THỰC HIỆN TẤT CẢ KẾ HOẠCH KINH DOANH
              TRONG LĨNH VỰC
            </span>
            truyền thông CNTT. Đối với chúng tôi mọi hợp đồng đối với khách hàng
            đều phải đặt tiêu chí trách nghiệm và minh bạch lên hàng đầu và luôn
            luôn đảm bảo rằng sự hài lòng của khách hàng là niềm tự hào của
            chúng tôi
          </p>
          <p className="text-justify text-[1rem] lg:text-[1.2rem] mt-10">
            Đối với chúng tôi, định nghĩa thành công là đạt được sự hài lòng của
            khách hàng. Chúng tôi cống hiến kinh nghiệm, niềm đam mê và kiến
            thức của mình cho từng dự án chúng tôi tham gia để mang lại dịch vụ
            tốt nhất cho các đối tác.
          </p>
        </div>
        <div className="lg:flex lg:flex-row ">
          <div className="flex flex-col m-5  lg:mt-12 lg:w-[100%] ">
            <div className="flex flex-row">
              <img
                className="lg:w-100[px] lg:h-[100px] md:w-[110px] md:h-[110px]"
                src={aboutUs1}
              />
              <div className="bg-black w-[1px] mr-4 h-[65px] lg:h-[90px] md:h-[100px]"></div>
              <div className="text-center flex flex-col">
                <div className="font-bold text-main mt-3 lg:mt-7 lg:text-xl md:text-xl md:mt-9 ">
                  Tầm nhìn và sứ mệnh của chúng tôi
                </div>
                <div className="mt-2 md:mt-9 text-justify lg:mt-3 ">
                  Phương châm của chúng tôi là mang đến một cuộc cách mạng trong
                  lĩnh vực phát triển phần mềm, gia công phần mềm và thực hiện
                  truyền thông. Chúng tôi dự định thực hiện điều này bằng cách
                  liên tục cung cấp các dịch vụ hiệu quả cho khách hàng và giới
                  thiệu công nghệ tiên tiến với mức giá phải chăng.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col m-5 mt-12  lg:w-[100%]  ">
            <div className="flex flex-row ">
              <img
                className="hidden lg:block lg:w-110[px] lg:h-[110px]  mt-[-20px]  "
                src={aboutUs2}
              />
              <div className=" hidden lg:block bg-black w-[1px] mr-4 h-[65px] lg:h-[90px]"></div>
              <div className="text-center flex flex-col">
                <div className="font-bold text-main mt-6 lg:text-xl lg:mt-9 lg:mb-5">
                  Giá trị của chúng tôi
                </div>
                <div className="mt-5 lg:mt-2 text-justify">
                  Thành công của chúng tôi được thúc đẩy bởi các giá trị của
                  chúng tôi. Làm việc thông minh và chăm chỉ. Chính trực và tôn
                  trọng người khác. Làm việc để tạo ra sự khác biệt tích cực
                  trong cuộc sống của mọi người. Cách tiếp cận hợp tác cởi mở và
                  minh bạch
                </div>
              </div>
              <div className=" lg:hidden bg-black w-[1px] ml-4 h-[65px]"></div>
              <img
                className="mt-[-30px] block lg:hidden md:w-[120px] md:h-[120px]"
                src={aboutUs2}
              />
            </div>
          </div>
          <div className="flex flex-col m-5  mt-12 lg:w-[100%] ">
            <div className="flex flex-row">
              <img
                className="lg:w-120[px] lg:h-[120px] mt-[-15px]  md:w-[120px] md:h-[120px]"
                src={aboutUs3}
              />
              <div className="bg-black w-[1px] mr-4 h-[65px] lg:h-[90px] md:h-[90px]"></div>
              <div className="text-center flex flex-col">
                <div className="font-bold text-main mt-3 lg:mt-9 lg:text-xl lg:mb-4 md:mt-9">
                  Trách nghiệm của chúng tôi
                </div>
                <div className="mt-2 md:mt-9 lg:mt-2 text-justify">
                  Treepulse luôn luôn có trách nghiệm trong từng sản phẩm đối
                  với khách hàng. Đối với chúng sự thoải mái khi sử dụng dịch vụ
                  của khách hàng đầu. Không chỉ với những sản phẩm đang thực
                  hiện mà là toàn bộ sản phẩm chúng tôi đã và đang làm ra. Chúng
                  tôi luôn cam kết sự phù hợp của sản phẩm đối với nhu cầu của
                  bạn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full mt-5" src={aboutUs4} />
      <div className=" m-12 text-3xl font-bold text-main text-center ">
        Dịch vụ truyền thông và phát triển phần mềm
      </div>
      <div className="w-4/5 justify-center flex flex-col lg:flex-row items-center lg:items-start lg:justify-center flex-wrap">
        <div className="my-[20px] md:h-[420px] xl:h-[600px] lg:w-[40%] 2xl:w-1/5 title transition-all ease-in-out duration-[0.4s] relative w-4/5 ml-10 z-[1] text-center lg:mt-12  flex flex-col items-center rounded-md overflow-hidden">
          <div className="absolute bg-main override  left-0 right-0 bottom-0 z-[-1] transition-all ease-in-out duration-[0.5s]"></div>
          <div className="w-1/2 lg:w-[250px] lg:h-[250px] lg:mb-[-50px] flex items-center justify-center">
            <i className="bi bi-globe text-[100px] "></i>
          </div>
          <div className="text-2xl  mb-2 lg:mt lg:mt-[14px]">
            Phát triển web
          </div>
          <div className="text-center mt-4 mr-12 ml-12 pb-[80px] lg:mt-10 ">
            Nhóm chuyên gia web của chúng tôi đã thực hiện nhiều thiết kế trang
            web tùy chỉnh và cả ứng dụng web với các tính năng phức tạp và an
            toàn. Chúng tôi đã thực hiện các trang web thương mại điện tử, web
            xã hội bằng cách sử dụng BoonEx Dolphin, Shopify, Opencart, v.v.
          </div>
        </div>
        <div className=" my-[20px] md:h-[420px] xl:h-[600px] lg:w-[40%] 2xl:w-1/5  title transition-all ease-in-out duration-[0.4s] relative w-4/5 ml-10 z-[1] text-center lg:mt-12  flex flex-col items-center rounded-md overflow-hidden ">
          <div className="absolute bg-main override  left-0 right-0 bottom-0 z-[-1] transition-all ease-in-out duration-[0.5s]"></div>
          <div className="w-1/2 lg:w-[250px] lg:h-[250px] lg:mb-[-50px] flex items-center justify-center">
            <i className="bi bi-controller text-[100px] "></i>
          </div>
          <div className="text-2xl  mb-2 lg:mt-[15px]">Phát triển game </div>
          <div className=" text-center mt-4 mr-12 ml-12 pb-[80px] lg:mt-10 ">
            Chúng tôi đã hợp tác với nhiều studio trò chơi và tham gia vào nhiều
            dự án trò chơi, đặc biệt là game nhập vai, trò chơi chiến lược, trò
            chơi nhiều người chơi trong thời gian thực, trò chơi board game, trò
            chơi 2D/3D, trò chơi mô phỏng, trò chơi thể thao, trò chơi AAA, v.v.
            và các dự án trò chơi blockchain.. Chúng tôi luôn phát triển game
            theo ý muốn của bạn
          </div>
        </div>
        <div className="my-[20px] md:h-[420px] xl:h-[600px] lg:w-[40%] 2xl:w-1/5 title transition-all ease-in-out duration-[0.4s] relative w-4/5 ml-10 z-[1] text-center lg:mt-12  flex flex-col items-center rounded-md overflow-hidden">
          <div className="absolute bg-main override  left-0 right-0 bottom-0 z-[-1] transition-all ease-in-out duration-[0.5s]"></div>
          <div className="w-1/2 lg:w-[250px] lg:h-[250px] lg:mb-[-50px] flex items-center justify-center">
            <i className="bi bi-tv text-[100px] "></i>
          </div>
          <span className="text-2xl lg:mt-[14px] px-[6px]">
            Phát triển truyền thông
          </span>
          <div className=" text-center mr-12 ml-12 pb-[90px] lg:mt-10">
            Công ty của chúng tôi tự hào giới thiệu một loạt dịch vụ đa dạng
            nhằm giúp bạn tạo nên một hiện diện mạnh mẽ và ấn tượng trên mxh
            (Tiktok,Fb,Ig,X...). Với sự tập trung vào nền tảng mạng xã hội và
            giải trí, chúng tôi mang đến các giải pháp chất lượng và sáng tạo để
            thúc đẩy sự thành công của bạn
          </div>
        </div>
        <div className="my-[20px] md:h-[420px] xl:h-[600px] lg:w-[40%] 2xl:w-1/5 title transition-all ease-in-out duration-[0.4s] relative w-4/5 ml-10 z-[1] text-center lg:mt-12  flex flex-col items-center rounded-md overflow-hidden">
          <div className="absolute bg-main override  left-0 right-0 bottom-0 z-[-1] transition-all ease-in-out duration-[0.5s]"></div>
          <div className="w-1/2 lg:w-[250px] lg:h-[250px] lg:mb-[-50px] flex items-center justify-center relative">
            <i className="bi bi-cloud text-[100px] "></i>
            <i className="bi bi-shield-fill-check text-[32px]  absolute"></i>
          </div>
          <div className="text-2xl  mb-2 mt-[14px] px-[10px] ">
            Bảo mật và lưu trữ đám mây
          </div>
          <div className=" text-center mt-4 mr-12 ml-12 pb-[80px]">
            Với sự kết hợp giữa kiến thức sâu rộng về an ninh mạng và công nghệ
            đám mây, chúng tôi cam kết mang đến sự yên tâm và bảo vệ tối đa cho
            hệ thống và dữ liệu của bạn. Hãy để chúng tôi giúp bạn duyệt qua các
            thách thức an ninh mạng và tận hưởng lợi ích của môi trường đám mây
            một cách an toàn và hiệu quả.
          </div>
        </div>
      </div>
      <div className="w-4/5 flex justify-end  mt-[60px]">
        <ContactZalo />
      </div>
      <div className="w-full mt-[200px] ">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUS;
