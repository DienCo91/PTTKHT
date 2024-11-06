import gameHeader from "@/assets/img/gameHeader.png";
import controlGame from "@/assets/img/controlGame.png";
import gameMain from "@/assets/img/gameMain.png";
import gameUnity from "@/assets/img/unity.png";
import gameUnreal from "@/assets/img/Unreal.png";
import ContactZalo from "@/Component/Contact/ContactZalo";
import Footer from "@/Component/Footer/Footer";
import { useEffect, useRef } from "react";
const Game = () => {
  const imgHeader = useRef<HTMLDivElement>(null);
  const titleHeader = useRef<HTMLDivElement>(null);
  const gameTag = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      imgHeader.current?.classList.remove(
        ..."mr-[-100px] opacity-0".split(" ")
      );
      titleHeader.current?.classList.remove(
        ..."mt-[400px] opacity-0".split(" ")
      );
      // Thực hiện các tác vụ khác ở đây nếu cần
    }, 800);

    // Đảm bảo hủy timeout khi component unmount để tránh lỗi
    return () => {
      clearTimeout(timer);
    };
  });
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY >= 120) {
        console.log(2);

        gameTag.current?.classList.remove(..."mt-[400px] opacity-0".split(" "));
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="mt-[200px] flex flex-col items-center">
      <div className="w-[80%]">
        <div className="flex md:flex-row md:justify-between flex-wrap items-center">
          <div
            ref={titleHeader}
            className="w-full md:w-[60%] transition-all duration-[1s] ease-in-out mt-[400px] opacity-0"
          >
            <h1 className="text-main text-[30px] font-semibold ">
              Create Games, Maintain And Develop
            </h1>
            <span className="my-[30px] border-main border-solid border-[1px] text-main rounded-full py-[10px] px-[20px] text-[1em]  shadow-lg cursor-pointe inline-block">
              Tạo Ra Trò Chơi Của Bạn
            </span>
            <div className="lg:m-[30px] m-2 border-main border-solid border-[1px] rounded-full py-[10px] px-[20px] text-[1em] text-main  shadow-lg cursor-pointe inline-block">
              Duy Trì Và Phát Triển
            </div>
            <div className="text-justify text-[1.2em]  mt-[60px]">
              Dịch vụ phát triển và sáng tạo game theo yêu cầu của chúng tôi.
              Với kinh nghiệm và tài năng của đội ngũ chúng tôi, chúng tôi cam
              kết biến mọi ý tưởng của bạn thành hiện thực trong thế giới trò
              chơi. Chúng tôi không chỉ cung cấp các giải pháp kỹ thuật xuất sắc
              mà còn chú trọng đến sự sáng tạo và trải nghiệm người dùng để tạo
              ra những trò chơi độc đáo và thú vị. Hãy để chúng tôi giúp bạn
              thực hiện dự án game ấn tượng của bạn và đem đến cho người chơi
              những trải nghiệm đáng nhớ.
            </div>
          </div>

          <div
            ref={imgHeader}
            className="mr-[-100px] opacity-0  transition-all duration-[1.4s] ease-in-out "
          >
            <img
              src={gameHeader}
              alt="gameHeader"
              className="h-[240px] sm:h-[180px] md:h-[200px] xl:h-[300px]"
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-[60px] ">
          <span className="text-main text-[30px] font-semibold">
            Một số thể loại gợi ý
          </span>

          <div
            ref={gameTag}
            className="flex  sm:justify-between flex-wrap mt-[60px] mt-[400px] opacity-0 transition-all duration-[1s] ease-in-out"
          >
            <div className="flex flex-col">
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Đua Xe</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Đuổi Bắt</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Kinh Dị</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Mô Phỏng</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Đối Kháng</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Trí Tuệ, Giải Đố</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Game hành động nhập vai PvE</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>FPS</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Phiêu lưu</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Chiến thuật</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Blockchain</span>
              </div>
              <div className="flex items-center text-[1.2em]">
                <img src={controlGame} alt="controlGame" />
                <span>Thể Thao</span>
              </div>
            </div>
            <div>
              <img src={gameMain} alt="gameMain" />
            </div>
          </div>

          <div className=" mt-[60px]">
            <span className="text-main text-[30px] font-semibold">
              Công nghệ chính
            </span>
            <div className="flex justify-center md:justify-between flex-wrap mt-[40px]">
              <img
                src={gameUnity}
                alt="gameUnity"
                className="object-contain h-[200px]"
              />
              <img
                src={gameUnreal}
                alt="gameUnreal"
                className="object-contain h-[200px]"
              />
            </div>
            <div className="flex justify-end mt-[40px]">
              <ContactZalo />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[60px]">
        <Footer />
      </div>
    </div>
  );
};

export default Game;
