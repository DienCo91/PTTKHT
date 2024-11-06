import botpng from "../../assets/img/bot.png";
import toolpng from "../../assets/img/tool.png";
import Footer from "../../Component/Footer/Footer";
import "../../page/ToolAndBot/dev.css";
import ContactZalo from "../../Component/Contact/ContactZalo";
import { useRef, useEffect } from "react";
const DevToolBot = () => {
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
        className="mb-[144px] mt-[200px] w-4/5 mx-auto opacity-0 transition-all duration-[1s] ease-in-out"
      >
        <h1 className="text-main font-sans text-4xl mb-5 font-semibold">
          Develop a tool/bot
        </h1>
        <div className="flex mt-[16px] mb-[60px] main">
          <div>
            <div className="text-base">
              Công ty của chúng tôi tự hào giới thiệu dịch vụ phát triển
              tool/bot cá nhân hóa để đáp ứng các nhu cầu đặc biệt của bạn.
              Chúng tôi hiểu rằng mỗi doanh nghiệp và cá nhân đều có yêu cầu
              riêng biệt, và chúng tôi đã xây dựng một đội ngũ tài năng và kỹ
              thuật với kiến thức sâu rộng về lập trình và trí tuệ nhân tạo để
              giúp bạn tạo ra các tool tự động hoặc bot độc đáo, linh hoạt và
              mạnh mẽ. Dịch vụ của chúng tôi bao gồm:
            </div>
            <ul>
              <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                Phân Tích và Thiết Kế: Chúng tôi sẽ hợp tác cùng bạn để xác định
                các yêu cầu cụ thể và thiết kế một tool/bot phù hợp với mục tiêu
                của bạn.
              </li>
              <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                Phát Triển Tùy Chỉnh: Chúng tôi sử dụng kỹ thuật và công nghệ
                tiên tiến để xây dựng và tối ưu hóa tool/bot của bạn để đáp ứng
                mọi yêu cầu.
              </li>
              <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                Kiểm Tra và Đảm Bảo Chất Lượng: Chúng tôi thực hiện kiểm tra kỹ
                thuật và chất lượng để đảm bảo rằng tool/bot của bạn hoạt động
                một cách ổn định và hiệu quả.
              </li>
              <li className="text-sm my-2.5 tracking-wider list-decimal ml-8">
                Hỗ Trợ Kỹ Thuật: Chúng tôi sẽ luôn sẵn sàng để hỗ trợ và duy trì
                tool/bot của bạn để đảm bảo tính liên tục và hiệu suất.
              </li>
            </ul>
            <div className="text-base">
              Với sự tập trung vào sáng tạo và cá nhân hóa, chúng tôi cam kết
              mang đến cho bạn các tool/bot độc đáo giúp tối ưu hóa quy trình
              công việc và tạo ra giá trị cho doanh nghiệp của bạn. Hãy để chúng
              tôi giúp bạn thực hiện những ý tưởng độc đáo của bạn và giảm thiểu
              công việc thủ công.
            </div>
          </div>
          <img src={botpng} alt="bot" className="max-w-[30%] img h-[295px]" />
        </div>

        <div className="mb-[60px]">
          <h1 className="text-2xl font-bold mb-[30px] text-main text">
            Lợi ích
          </h1>
          <div className="flex main">
            <div className="mg-b">
              <i className="text-icon flex justify-center mb-[16px] text-8xl text-center bi bi-clock-history"></i>
              <p className="text-center mb-[8px] font-bold text-lg">
                Tiết kiệm thời gian
              </p>
              <p className=" text-center m-auto w-[90%]">
                Tool/bot giúp bạn tiết kiệm được phần lớn thời gian khi mà
                Tool/bot sẽ thay bạn làm những việc bạn mong muốn thay bạn
              </p>
            </div>
            <div className="mg-b">
              <i className="text-icon flex justify-center mb-[16px] text-8xl text-center bi bi-speedometer"></i>
              <p className="text-center mb-[8px] font-bold text-lg">
                Gia tăng tốc độ
              </p>
              <p className=" text-center m-auto w-4/5">
                Đối với những công việc hay thao tác cần tốc độ cao. Tool/bot
                với sự lập trình sẵn luôn luôn cho bạn một tốc độ tối đa nhất mà
                con người không thể đạt được
              </p>
            </div>
            <div className="mg-b">
              <i className="text-icon flex justify-center mb-[16px] text-8xl text-center bi bi-piggy-bank"></i>
              <p className="text-center mb-[8px] font-bold text-lg">
                Tiết kiệm chi phí
              </p>
              <p className=" text-center m-auto w-4/5">
                Luôn giúp bạn tiết kiệm chi phí nhân công hoặc có thể làm thay
                phần việc của bạn để bạn có thể có quỹ thời gian làm những việc
                quan trọng hơn{" "}
              </p>
            </div>
            <div className="mg-b">
              <i className="text-icon flex justify-center mb-[16px] text-8xl text-center bi bi-bullseye"></i>
              <p className="text-center mb-[8px] font-bold text-lg">
                Độ chính xác cao{" "}
              </p>
              <p className=" text-center m-auto w-4/5">
                Máy móc Tool/bot hay robot đều có một độ chính xác rất cao và
                gần như không có sai sót trong công việc giúp bạn tránh được
                những sai lầm không đáng có{" "}
              </p>
            </div>
            <img
              className="max-w-[24%] h-[180px] mt-[50px] img-2"
              src={toolpng}
              alt="tool"
            />
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mb-[30px] text-main ">
            Một số gợi ý về ngành nghề sử dụng{" "}
          </p>
          <ul>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Quản lý thời gian: Một ứng dụng quản lý thời gian hoặc bot có thể
              lên lịch cho bạn, gửi nhắc nhở, và tự động hóa việc theo dõi thời
              gian làm việc.
            </li>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Quản lý email: Bot có thể loại bỏ email rác, phân loại email quan
              trọng, và trả lời tự động những email cố định.
            </li>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Marketing trực tuyến: Công cụ marketing trực tuyến giúp bạn tự
              động hóa việc quảng cáo, quản lý mạng xã hội, và theo dõi dữ liệu
              hiệu suất.
            </li>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Quản lý dự án: Công cụ quản lý dự án tự động hóa việc theo dõi
              tiến độ dự án, phân chia công việc, và gửi thông báo khi có thay
              đổi.
            </li>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Chăm sóc khách hàng: Bot có thể cung cấp hỗ trợ khách hàng trực
              tuyến 24/7 và trả lời các câu hỏi phổ biến.
            </li>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Thu thập dữ liệu: Công cụ có thể tự động thu thập và tổng hợp
              thông tin từ các nguồn khác nhau để bạn có cái nhìn toàn diện hơn
              về dự án hoặc thị trường.
            </li>
            <li className="text-base my-2.5 tracking-wider list-decimal ml-8">
              Giao dịch tài chính: Bot giao dịch tự động trên thị trường tài
              chính có thể giúp bạn theo dõi và đầu tư tài sản một cách thông
              minh.
            </li>
          </ul>
        </div>
        <div className="flex justify-end w-[100%] mt-[60px] mb-[60px]">
          <ContactZalo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DevToolBot;
