import Footer from "../../Component/Footer/Footer";
import ContactZalo from "../../Component/Contact/ContactZalo";
import { useRef, useEffect } from "react";
import securitypng from "../../assets/img/policy.png";
const Security = () => {
  const down = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      down.current?.classList.remove("opacity-0");

      // Thực hiện các tác vụ khác ở đây nếu cần
    }, 400);

    // Đảm bảo hủy timeout khi component unmount để tránh lỗi
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
        <div className="text-main text-[30px] font-semibold text-center lg:text-left">
          Chính sách bảo mật
        </div>
        <div className="mt-[30px] lg:flex my-[24px] mb-[32px]">
          <ul className="text-lg text-justify mb-[32px]">
            <li className="mb-[16px]">
              Tại Treepulse, chúng tôi luôn luôn xem trọng và cam kết đảm bảo sự
              bảo mật tuyệt đối cho thông tin và sản phẩm của khách hàng. Chúng
              tôi coi trọng sự tin tưởng mà bạn dành cho chúng tôi và cam kết
              duy trì mức độ bảo mật cao nhất cho mọi thông tin bạn chia sẻ với
              chúng tôi.
            </li>
            <li className="my-[16px]">
              Chính sách bảo mật của chúng tôi là một sự cam kết mà chúng tôi
              không bao giờ vi phạm. Chúng tôi không sử dụng thông tin của khách
              hàng cũng như thông tin về sản phẩm của bạn mà không có sự đồng ý
              rõ ràng từ phía bạn. Tất cả thông tin của bạn đều được bảo mật và
              lưu trữ một cách an toàn nhất để đảm bảo rằng chúng không bị tiết
              lộ hoặc sử dụng sai mục đích.
            </li>
            <li className="my-[16px]">
              Chúng tôi hiểu rằng sự bảo mật là một yếu tố quan trọng trong mọi
              giao dịch và chúng tôi cam kết duy trì và nâng cao hệ thống bảo
              mật của mình để bảo vệ thông tin của bạn tốt nhất có thể.
            </li>
            <li className="my-[16px]">
              Hãy yên tâm khi làm việc với chúng tôi tại Treepluse, bởi chúng
              tôi luôn đặt sự bảo mật của bạn lên hàng đầu. Cảm ơn bạn đã tin
              tưởng và lựa chọn chúng tôi.
            </li>
          </ul>
          <img src={securitypng} alt="policy" className="m-auto" />
        </div>
        <div className="text-[24px] text-main font-bold mt-[24px]">
          Bảo mật sản phẩm{" "}
        </div>
        <ul className="text-lg text-justify">
          <li className="my-[16px]">
            Tại Treepulse, chúng tôi luôn đặt sự bảo mật cao nhất lên hàng đầu
            với mọi sản phẩm mà chúng tôi tạo ra. Chúng tôi không chỉ cam kết
            tạo ra các sản phẩm chất lượng và đáng tin cậy mà còn đảm bảo rằng
            chúng được duy trì và bảo dưỡng một cách tận tâm và chuyên nghiệp.
          </li>
          <li className="my-[16px]">
            Chúng tôi hiểu rằng sự bảo mật là một phần quan trọng của trải
            nghiệm của khách hàng, và do đó, chúng tôi sử dụng chính sách bảo
            mật tối ưu nhất để đảm bảo sản phẩm của bạn được bảo vệ đầy đủ.
            Chúng tôi cam kết luôn tuân thủ các tiêu chuẩn bảo mật hàng đầu để
            đảm bảo rằng thông tin của khách hàng không bị xâm phạm và sản phẩm
            của họ luôn được duy trì ở tình trạng tốt nhất.
          </li>
          <li className="my-[16px]">
            Ngoài ra, chúng tôi cũng luôn sẵn sàng chịu trách nhiệm trong việc
            bảo trì và bảo dưỡng sản phẩm của khách hàng. Chúng tôi luôn sẵn
            sàng hỗ trợ để đảm bảo rằng sản phẩm của bạn hoạt động một cách ổn
            định và hiệu quả.
          </li>
          <li className="my-[16px]">
            Với tất cả những cam kết này, chúng tôi hy vọng rằng bạn có thể tin
            tưởng và yên tâm khi làm việc với chúng tôi tại Treepluse. Chúng tôi
            luôn xem xét sự bảo mật và sự hài lòng của khách hàng là ưu tiên
            hàng đầu.
          </li>
        </ul>
        <div className="flex justify-end w-[100%] mt-[60px] mb-[60px]">
          <ContactZalo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Security;
