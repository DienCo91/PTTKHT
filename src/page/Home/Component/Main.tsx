import { useNavigate } from "react-router-dom";
import commit from "../../../assets/img/commit.png";
import { useRef, useEffect } from "react";
const Main = () => {
  const showTag = useRef<HTMLDivElement>(null);
  const showCommit = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 250) {
        showTag.current?.classList.remove(
          ..."opacity-0 pointer-events-none mt-[200px]".split(" ")
        );
      }
      if (scrollY > 830) {
        showCommit.current?.classList.remove(
          ..."opacity-0 pointer-events-none mt-[200px]".split(" ")
        );
      }
      if (scrollY < 200) {
        showTag.current?.classList.add(
          ..."opacity-0 pointer-events-none mt-[200px]".split(" ")
        );
        showCommit.current?.classList.add(
          ..."opacity-0 pointer-events-none mt-[200px]".split(" ")
        );
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="z-[100]  flex items-center mt-[80px] flex-col">
      {/* tag */}
      <div
        className="flex flex-wrap justify-around w-[80%]  opacity-0 pointer-events-none transition-all duration-[1s] ease-in-out mt-[200px]"
        ref={showTag}
      >
        <div className="flex flex-col">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/design-ui-ux");
            }}
            className="bg-main rounded-full py-[20px] px-[30px] text-[1.2em] text-white flex mt-[20px] hover:shadow-xl cursor-pointer hover:translate-y-[-6px] hover:opacity-90 transition-all ease-in-out duration-[0.2s]"
          >
            <i className="bi bi-pencil-square mr-[10px]"></i>
            <div>UI & UX Design</div>
          </div>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/media-and-entertaiment");
            }}
            className="bg-main rounded-full py-[20px] px-[30px] text-[1.2em] text-white flex mt-[20px] hover:shadow-xl cursor-pointer hover:translate-y-[-6px] hover:opacity-90 transition-all ease-in-out duration-[0.2s]"
          >
            <i className="bi bi-megaphone mr-[10px]"></i>
            <div>Media And Entertainment</div>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/cloud");
            }}
            className="bg-main rounded-full py-[20px] px-[30px] text-[1.2em] text-white flex mt-[20px] hover:shadow-xl cursor-pointer hover:translate-y-[-6px] hover:opacity-90 transition-all ease-in-out duration-[0.2s] "
          >
            <i className="bi bi-cloud mr-[10px]"></i>
            <div>Cloud computing and Cybersecurity</div>
          </div>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/games");
            }}
            className="bg-main rounded-full py-[20px] px-[30px] text-[1.2em] text-white flex mt-[20px] hover:shadow-xl cursor-pointer hover:translate-y-[-6px] hover:opacity-90 transition-all ease-in-out duration-[0.2s]"
          >
            <i className="bi bi-controller mr-[10px]"></i>
            <div>Create games, maintain and develop</div>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/webdesign&development");
            }}
            className="bg-main rounded-full py-[20px] px-[30px] text-[1.2em] text-white flex mt-[20px] hover:shadow-xl cursor-pointer hover:translate-y-[-6px] hover:opacity-90 transition-all ease-in-out duration-[0.2s]"
          >
            <i className="bi bi-browser-chrome mr-[10px]"></i>
            <div>Web Design & Development</div>
          </div>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/tool-bot");
            }}
            className="bg-main rounded-full py-[20px] px-[30px] text-[1.2em] text-white flex mt-[20px] hover:shadow-xl cursor-pointer hover:translate-y-[-6px] hover:opacity-90 transition-all ease-in-out duration-[0.2s]"
          >
            <i className="bi bi-robot mr-[10px]"></i>
            <div>Develop a tool/bot</div>
          </div>
        </div>
      </div>
      {/* commit */}
      <div
        className="flex flex-col items-center w-[80%]  opacity-0 pointer-events-none transition-all duration-[1s] ease-in-out mt-[200px]"
        ref={showCommit}
      >
        <div className="text-main mt-[80px] text-[36px] tracking-normal font-semibold text-center">
          Trách nghiệm và sứ mệnh đối với khách hàng{" "}
        </div>
        <div className="flex mt-[80px] justify-between flex-wrap">
          <div className="text-center px-[24px] xl:w-1/4 w-full sm:w-1/2">
            <i className="bi bi-search text-[#0075FF] text-[60px]"></i>
            <div className="text-[20px] font-semibold">Xác Định</div>
            <div className="text-justify">
              Xác định mục tiêu hướng phát triển và lợi thế cạnh tranh của doanh
              nghiệp một cách tỉ mỉ và chính xác.
            </div>
          </div>
          <div className="text-center px-[24px] xl:w-1/4 w-full sm:w-1/2">
            <i className="bi bi-info-circle text-[#0075FF] text-[60px]"></i>
            <div className="text-[20px] font-semibold">Đề xuất & Tư Vấn</div>
            <div className="text-justify">
              Dựa trên các mặt lợi thế của khách hàng đưa ra hướng sử dụng dịch
              vụ một cách tối ưu nhất.
            </div>
          </div>
          <div className="text-center px-[24px] xl:w-1/4 w-full sm:w-1/2">
            <i className="bi bi-bar-chart-fill text-[#0075FF] text-[60px]"></i>
            <div className="text-[20px] font-semibold">Phát triển</div>
            <div className="text-justify">
              Hỗ trợ khách hàng phát triển trong thời gian đầu sử dụng sản phẩm
              một cách tận tâm và nhiệt tình.
            </div>
          </div>
          <div className="text-center px-[24px] xl:w-1/4 w-full sm:w-1/2">
            <i className="bi bi-code-slash text-[#0075FF] text-[60px]"></i>
            <div className="text-[20px] font-semibold">Vận hành và bảo trì</div>
            <div className="text-justify">
              Luôn luôn có trách nghiệm và sự cam kết trên từng sản phẩm mà
              Treepluse làm ra hướng khách hàng tới một sự trải nghiệm thoải mái
              nhất.
            </div>
          </div>
        </div>

        <div className="mt-[80px] relative w-full  sm:h-[600px] h-[800px] xl:h-auto">
          <img
            src={commit}
            alt="commit"
            className=" relative object-cover rounded-lg w-full sm:h-[600px] h-[800px] xl:h-auto"
          />
          <div className="absolute  text-white top-1/2 translate-y-50  px-[20px]">
            <h1 className="sm:text-[30px] text-[24px] text-icon font-bold tracking-widest">
              LỜI CAM KẾT CỦA CHÚNG TÔI !
            </h1>
            <div className="text-justify xl:mt-[40px] sm:text-[1.4em] text-[18px]">
              Treepluse cam kết tận tâm và không ngừng nỗ lực để đảm bảo chất
              lượng dịch vụ hàng đầu cho khách hàng của mình. Chúng tôi luôn
              luôn lắng nghe và đáp ứng đầy đủ nhu cầu và mong muốn của bạn.
              Khách hàng là tài sản quý báu của chúng tôi, và chúng tôi sẽ luôn
              giữ trách nhiệm với sự tin tưởng mà bạn đã đặt vào chúng tôi. Hãy
              để chúng tôi đồng hành cùng bạn trong việc đạt được mục tiêu và
              thành công trong lĩnh vực truyền thông và công nghệ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
