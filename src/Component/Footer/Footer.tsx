import logo from "../../assets/img/logo.png";
import zalo from "../../assets/img/zalo-icon.png";
import fb from "../../assets/img/fb.png";
import map from "@/assets/img/map.png";
const Footer = () => {
  return (
    <div className=" bg-main z-[101]  flex justify-center text-white items-center w-full">
      <div className="w-[80%] py-[18px] flex-col lg:flex-row items-center flex justify-between">
        <div className="flex items-center w-full lg:w-auto">
          <div>
            <div className="flex  items-start flex-col">
              <div>
                <img src={logo} alt="logo" className="h-[100px]" />
              </div>
              <div className="text-[1.6em] font-bold">Treepulse</div>
            </div>
            <div className="my-[10px] text-start">
              Techonology and Communications
            </div>
            <div className=" font-bold">Văn phòng đại diện:</div>
            <div className="my-[10px]">
              <span>Địa chỉ: Tầng 2 số 59 P.Nguyễn Văn Giáp,</span>
              <br />
              <span>Cầu Diễn, Nam Từ Liêm, Hà Nội, Việt Nam</span>
            </div>
            <div className="font-bold">Liên lạc: 0981934720</div>
            <div className="flex">
              <div className="font-bold mr-[10px]">Email:</div>
              <div>
                <h1>treepulse6@gmail.com</h1>
                {/* <h1 className="text-center opacity-70">hoặc</h1>
                <h1>duydong2203@gmail.com</h1> */}
              </div>
            </div>
            <div className="mt-[10px] flex h-[30px] cursor-pointer">
              <img
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://zalo.me/0981934720", "_blank");
                }}
                src={zalo}
                alt="zalo"
              />

              <img
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.facebook.com/TechnologyandCommunications?mibextid=LQQJ4d&locale=vi_VN",
                    "_blank"
                  );
                }}
                src={fb}
                alt="fb"
                className="mx-[20px]"
              />
            </div>
          </div>
        </div>

        <div className=" flex  flex-col justify-center px-[10px]  w-full lg:w-auto ">
          <div className="h-[200px] mt-[40px] lg:mt-0">
            <h1 className="font-semibold text-[1.4em]">Dịch vụ</h1>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Làm web theo yêu cầu
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Phát triển game
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Phát triển tool/bot
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Thiết kế UI/UX
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Dịch vụ truyền thông
            </p>
          </div>
        </div>

        <div className="px-[10px] flex  flex-col justify-center  w-full lg:w-auto">
          <div className="h-[200px]  mt-[40px] lg:mt-0">
            <h1 className="font-semibold text-[1.4em]">Lĩnh vực</h1>
            <p className="my-[6px] text-[1.2em] border-b-[2px] text-center lg:text-start border-solid  border-white">
              Công nghệ
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Truyền thông
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              Human research
            </p>
            <p className="my-[6px] text-[1.2em] border-b-[2px] border-solid text-center lg:text-start border-white">
              {" "}
              AI research
            </p>
          </div>
        </div>

        <div
          className="flex  flex-col justify-center cursor-pointer w-full lg:w-auto items-center"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.google.com/maps/place/59+P.+Nguy%E1%BB%85n+V%C4%83n+Gi%C3%A1p,+C%E1%BA%A7u+Di%E1%BB%85n,+Nam+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i/@21.0388692,105.7610437,17z/data=!3m1!4b1!4m6!3m5!1s0x313454bf86eaf657:0x192c982174eb5fd!8m2!3d21.0388692!4d105.7610437!16s%2Fg%2F11q45kx0hv?entry=ttu",
              "_blank"
            );
          }}
        >
          <div className="">
            <img
              src={map}
              alt="map"
              className="md:w-[400px] lg:w-[200px] rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
