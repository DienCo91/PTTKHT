import Cloud1 from "../../assets/img/cloud1.png";
import Footer from "../../Component/Footer/Footer.tsx";
import ContactZalo from "../../Component/Contact/ContactZalo.tsx";
import { useRef, useEffect } from "react";
const Cloud = () => {
  const down = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
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
  return (
    <div className="mt-[200px] w-full flex flex-col items-center ">
      <div className="w-4/5 flex flex-col">
        <div
          ref={down}
          className="text-4xl mb-[60px] font-bold text-[#093C59]  opacity-0 transition-all duration-[0.5s] ease-in-out text-center "
        >
          Cloud computing and Cybersecurity
        </div>
        <div className="w-full flex justify-between lg:flex-row flex-col">
          <div
            ref={left}
            className="w-full  flex flex-col mr-0 md:mr-[20px]  opacity-0 transition-all duration-[1.5s] ease-in-out"
          >
            <div className="mt-4 text2 ">
              <div className="font-bold text-xl ">An ninh mạng:</div>
              <ul className=" text-justify">
                <li className="list-decimal">
                  Kiểm tra và Đánh Giá Rủi Ro: Chúng tôi sẽ thực hiện kiểm tra
                  toàn diện để xác định các rủi ro tiềm ẩn trong hệ thống và đề
                  xuất các biện pháp bảo mật cụ thể.
                </li>
                <li className="list-decimal">
                  Giám Sát Liên Tục: Chúng tôi cung cấp giám sát liên tục 24/7
                  để phát hiện và ứng phó với các mối đe dọa mạng ngay lập tức.
                </li>
                <li className="list-decimal">
                  Bảo Mật Dữ Liệu: Chúng tôi sử dụng các biện pháp bảo mật tiên
                  tiến để bảo vệ dữ liệu của bạn, đảm bảo tính toàn vẹn và không
                  ai có thể truy cập nó mà không được phép.
                </li>
                <li className="list-decimal">
                  Hỗ Trợ Kỹ Thuật: Chúng tôi luôn sẵn sàng hỗ trợ bạn với các
                  vấn đề liên quan đến an ninh mạng và đám mây.
                </li>
              </ul>
              <p>
                Với sự kết hợp giữa kiến thức sâu rộng về an ninh mạng và công
                nghệ đám mây, chúng tôi cam kết mang đến sự yên tâm và bảo vệ
                tối đa cho hệ thống và dữ liệu của bạn. Hãy để chúng tôi giúp
                bạn duyệt qua các thách thức an ninh mạng và tận hưởng lợi ích
                của môi trường đám mây một cách an toàn và hiệu quả.
              </p>
            </div>
            <div className="mt-5  font-bold text-2xl mb-5 main">
              Điện toán đám mây{" "}
            </div>
            <div className="lg:flex flex-row mr-0 md:mr-10 icon170 main text-justify">
              <div className="text-center flex flex-col my-[60px]">
                <div className="text-center text-8xl  text-blue-500  ">
                  <i className="bi bi-arrows-move"></i>
                </div>
                <div className="font-bold mt-3 mb-3">Khả năng mở rộng</div>
                <div className="pl-3 pr-3">
                  Ứng dụng tỷ lệ tăng dung lượng lưu trữ và hiệu suất theo yêu
                  cầu, khi dữ liệu tăng lên dự đoán hoặc trong trường hợp khác.
                </div>
              </div>
              <div className="text-center flex flex-col my-[60px] ">
                <div className="text-center text-8xl text-blue-500 ">
                  <i className="bi bi-patch-check"></i>
                </div>
                <div className="font-bold mt-3 mb-3 ">Khả dụng</div>
                <div className="pl-3 pr-3">
                  Bảo vệ dữ liệu của bạn khỏi sự cố ngừng hoạt động của đĩa,
                  nút, giá và trang web cụ thể.
                </div>
              </div>
              <div className="text-center my-[60px]">
                <div className="text-center text-8xl text-blue-500 ">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div className="font-bold mt-3 mb-3"> Hiệu suất</div>
                <div className="pl-3 pr-3">
                  Cung cấp hàng triệu IOP cho các ứng dụng đòi hỏi khắt khe nhất
                  của bạn.
                </div>
              </div>
              <div className="text-center my-[60px]">
                <div className="text-center text-8xl text-blue-500 ">
                  <i className="bi bi-circle"></i>
                </div>
                <div className="font-bold mt-3 mb-3">Linh động</div>
                <div className="pl-3 pr-3">
                  Đơn giản hóa việc quản lý lưu trữ của bạn. Lưu trữ khối, hệ
                  thống tệp chia sẻ / song song và lưu trữ đối tượng.
                </div>
              </div>
            </div>
          </div>
          <div
            ref={right}
            className="w-full flex flex-col  items-center md:block  main margin30 opacity-0 transition-all duration-[1.5s] ease-in-out"
          >
            <div className="w-full flex justify-center">
              <img className="mt-[-80px] " src={Cloud1} />
            </div>
            <div className="mt-10 flex flex-row mb-7 items-center ">
              <div className="font-bold  rounded-2xl text-xl w-1/2 p-5 text-center mr-2 bg-main text-white ">
                Xây tường lửa
              </div>

              <div className="font-bold  rounded-2xl text-xl p-5   w-1/2 text-center ml-2 bg-main text-white">
                Lưu trữ đám mây
              </div>
            </div>
            <div className="mt-3 marginTop10 text-justify">
              Dịch vụ an ninh mạng điện toán đám mây của chúng tôi là bước đột
              phá trong việc đảm bảo an toàn cho dữ liệu và hệ thống của bạn
              trong môi trường đám mây ngày càng phức tạp. Chúng tôi đặc biệt
              tập trung vào việc bảo vệ thông tin quan trọng của bạn khỏi các
              mối đe dọa mạng và đảm bảo sự liên tục và tính toàn vẹn của hệ
              thống.
            </div>
            <div className="flex justify-center">
              <div className="flex justify-end w-[80%] my-[60px]">
                <ContactZalo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cloud;
