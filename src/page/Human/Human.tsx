import human1 from "../../assets/img/human1.png";
import human2 from "../../assets/img/human2.png";
import human3 from "../../assets/img/human3.png";
import human4 from "../../assets/img/human4.png";
import facebook from "../../assets/img/facebook.png";
import tiktok from "../../assets/img/tiktiok.png";
import Footer from "../../Component/Footer/Footer.tsx";

const Human = () => {
  return (
    <div className="mt-[200px] flex flex-col items-center w-full relative">
      <div className="w-4/5 flex flex-col">
        <img
          className="mt-[-100px] hidden lg:block  lg:absolute   lg:right-[30px] opacity-0 lg:top-[100px]"
          src={human1}
        />
        <div className="lg:text-3xl text-2xl font-bold text-main">
          Phát triển nghiên cứu con người{" "}
        </div>
        <div className="flex flex-row ">
          <div className="lg:block hidden text-justify ">
            Phát triển nghiên cứu con người (Human Research Development) là một
            lĩnh vực quan trọng trong nghiên cứu và phát triển, tập trung vào
            việc tìm hiểu và nâng cao kiến thức về con người. Lĩnh vực này không
            chỉ đóng vai trò quan trọng trong việc cải thiện sức khỏe và chất
            lượng cuộc sống của con người mà còn ảnh hưởng đến nhiều khía cạnh
            khác của xã hội và kinh tế, từ giáo dục và đào tạo đến công nghiệp
            và công nghệ. Phát triển nghiên cứu con người giúp chúng ta hiểu rõ
            hơn về bản chất của con người và tận dụng tối đa tiềm năng của họ để
            đóng góp vào sự phát triển bền vững của xã hội.
          </div>
          <img
            className="lg:block hidden ml-[10px] pl-[80px] mt-[-50px] lg:w-[430px]"
            src={human1}
          />
        </div>

        <div className="mt-2  lg:hidden text-justify">
          Phát triển nghiên cứu con người (Human Research Development) là một
          lĩnh vực quan trọng trong nghiên cứu và phát triển, tập trung vào việc
          tìm hiểu và nâng cao kiến thức về con người. Lĩnh vực này không chỉ
          đóng vai trò quan trọng trong việc cải thiện sức khỏe và chất lượng
          cuộc sống của con người mà còn ảnh hưởng đến nhiều khía cạnh khác của
          xã hội và kinh tế, từ giáo dục và đào tạo đến công nghiệp và công
          nghệ.
        </div>
        <img className="mr-2  lg:hidden" src={human1} />
        <div className="mt-2  lg:hidden text-justify">
          Phát triển nghiên cứu con người giúp chúng ta hiểu rõ hơn về bản chất
          của con người và tận dụng tối đa tiềm năng của họ để đóng góp vào sự
          phát triển bền vững của xã hội.
        </div>
        <div className="lg:mt-9 lg:mb-[-30px] mt-4  lg:text-3xl text-2xl font-bold text-main ">
          Tác động của giáo dục{" "}
        </div>
        <div className="flex flex-row lg:mt-10 ">
          <div className="lg:block hidden text-justify ">
            "Tác Động của Giáo Dục" không chỉ giới hạn trong phạm vi lớp học và
            sách giáo trình, mà còn sâu rộng ảnh hưởng đến cá nhân, xã hội và
            cộng đồng toàn cầu. Giáo dục trang bị cho cá nhân những kiến thức và
            kỹ năng cần thiết, giúp họ đưa ra các quyết định có căn cứ và phát
            triển trong một thế giới luôn biến đổi. Nó mở cánh cửa cho các cơ
            hội, tăng khả năng thu nhập và cải thiện chất lượng cuộc sống. Trong
            xã hội, giáo dục thúc đẩy tiến bộ xã hội và công bằng, giảm thiểu
            nghèo đói, cải thiện sức khỏe cộng đồng và khuyến khích sự tham gia
            vào cuộc sống công dân. Trên phạm vi toàn cầu, giáo dục tạo điều
            kiện cho hợp tác quốc tế, hòa bình và sự đổi mới. Tóm lại, giáo dục
            là một lực lượng biến đổi cho cả cá nhân lẫn xã hội. Nó trao quyền,
            thúc đẩy công bằng và đóng góp vào một thế giới sáng sủa, liên kết
            hơn.
          </div>
          <img
            className="lg:block hidden ml-[10px] pl-[80px] mt-[-50px] lg:w-[430px]"
            src={human2}
          />
        </div>
        <div className="mt-2 text-justify lg:hidden">
          "Tác Động của Giáo Dục" không chỉ giới hạn trong phạm vi lớp học và
          sách giáo trình, mà còn sâu rộng ảnh hưởng đến cá nhân, xã hội và cộng
          đồng toàn cầu. Giáo dục trang bị cho cá nhân những kiến thức và kỹ
          năng cần thiết, giúp họ đưa ra các quyết định có căn cứ và phát triển
          trong một thế giới luôn biến đổi. Nó mở cánh cửa cho các cơ hội, tăng
          khả năng thu nhập và cải thiện chất lượng cuộc sống.
        </div>
        <img className="mt-2   lg:hidden" src={human2} />
        <div className="mt-2 text-justify lg:hidden">
          {" "}
          Trong xã hội, giáo dục thúc đẩy tiến bộ xã hội và công bằng, giảm
          thiểu nghèo đói, cải thiện sức khỏe cộng đồng và khuyến khích sự tham
          gia vào cuộc sống công dân. Trên phạm vi toàn cầu, giáo dục tạo điều
          kiện cho hợp tác quốc tế, hòa bình và sự đổi mới. Tóm lại, giáo dục là
          một lực lượng biến đổi cho cả cá nhân lẫn xã hội. Nó trao quyền, thúc
          đẩy công bằng và đóng góp vào một thế giới sáng sủa, liên kết hơn.
        </div>
      </div>
      <img className="lg:mt-[150px] mt-2  w-full object-cover" src={human3} />
      <div className="w-4/5 flex flex-col lg:mt-10">
        <div className="lg:text-3xl text-2xl font-bold text-main mt-2 lg:mt-[50px]">
          Giáo dục mang lại những lợi ích gì?{" "}
        </div>
        <img
          className="mt-[-100px] hidden lg:block  lg:absolute   lg:right-[30px] opacity-0 lg:top-[100px]"
          src={human1}
        />
        <div className="flex flex-row lg:mt-[20px] ">
          <div className=" lg:block hidden text-justify ">
            Giáo dục là một lực lượng biến đổi, mang đến nhiều lợi ích đối với
            cả cá nhân và xã hội. Nó trao quyền cho cá nhân với kiến thức và kỹ
            năng tư duy phê phán, giúp họ đưa ra các quyết định có căn cứ và
            đóng góp ý nghĩa vào cộng đồng của họ. Giáo dục còn tăng cơ hội bằng
            cách cải thiện khả năng tìm việc làm và tiềm năng thu nhập, cuối
            cùng là giảm thiểu tỷ lệ nghèo đói và thất nghiệp. Ngoài các lợi ích
            cá nhân, giáo dục thúc đẩy sự gắn kết xã hội bằng cách khuyến khích
            sự hiểu biết và lòng trung hiếu giữa các nhóm đa dạng. Nó thúc đẩy
            sự đổi mới và tăng trưởng kinh tế, làm cho các quốc gia trở nên cạnh
            tranh hơn trên trường quốc tế. Hơn nữa, giáo dục khuyến khích sự đạt
            được trọn vẹn cá nhân, trang bị cho người học khả năng giải quyết
            vấn đề và khả năng tư duy phê phán. Về bản chất, giáo dục là nền
            móng của sự phát triển cá nhân và tiến bộ xã hội, làm giàu cuộc sống
            và mở đường cho một tương lai tươi sáng.
          </div>
          <img
            className="lg:block hidden ml-[10px] pl-[80px] mt-[-50px] lg:w-[430px]"
            src={human4}
          />
        </div>

        <div className="mt-2  lg:hidden text-justify">
          Giáo dục là một lực lượng biến đổi, mang đến nhiều lợi ích đối với cả
          cá nhân và xã hội. Nó trao quyền cho cá nhân với kiến thức và kỹ năng
          tư duy phê phán, giúp họ đưa ra các quyết định có căn cứ và đóng góp ý
          nghĩa vào cộng đồng của họ. Giáo dục còn tăng cơ hội bằng cách cải
          thiện khả năng tìm việc làm và tiềm năng thu nhập, cuối cùng là giảm
          thiểu tỷ lệ nghèo đói và thất nghiệp.
        </div>
        <img className="mt-4  lg:hidden" src={human4} />
        <div className="mt-2  lg:hidden text-justify">
          Ngoài các lợi ích cá nhân, giáo dục thúc đẩy sự gắn kết xã hội bằng
          cách khuyến khích sự hiểu biết và lòng trung hiếu giữa các nhóm đa
          dạng. Nó thúc đẩy sự đổi mới và tăng trưởng kinh tế, làm cho các quốc
          gia trở nên cạnh tranh hơn trên trường quốc tế. Hơn nữa, giáo dục
          khuyến khích sự đạt được trọn vẹn cá nhân, trang bị cho người học khả
          năng giải quyết vấn đề và khả năng tư duy phê phán. Về bản chất, giáo
          dục là nền móng của sự phát triển cá nhân và tiến bộ xã hội, làm giàu
          cuộc sống và mở đường cho một tương lai tươi sáng.
        </div>
        <div className="lg:text-3xl text-2xl font-bold text-main mt-2 lg:mt-[50px]">
          Nền giáo dục chúng tôi cung cấp{" "}
        </div>
        <div className="mt-2 text-justify ">
          Treepulse mang đến một trải nghiệm giáo dục hoàn toàn mới, tập trung
          chủ yếu vào sự đổi mới và đặc biệt chú trọng vào con người. Chúng tôi
          hiểu rằng để thúc đẩy sự phát triển và học tập hiệu quả, việc tập
          trung vào người học là quan trọng hàng đầu. Chúng tôi ưu tiên sự đổi
          mới, tạo ra một môi trường giáo dục thoải mái và thúc đẩy. Thay vì các
          bài giảng cứng nhắc, chúng tôi truyền đạt kiến thức thông qua các
          video vui nhộn và hấp dẫn liên quan đến các chủ đề giáo dục. Mỗi video
          không chỉ là một bài học mà còn là một cuộc khám phá thú vị. Chúng tôi
          tin rằng việc học cần phải là một trải nghiệm thú vị, và chúng tôi đã
          biến điều đó thành hiện thực. Với Treepulse, việc học trở nên thú vị
          hơn, và người học có thể tích cực hấp thụ kiến thức. Chúng tôi cam kết
          cung cấp cơ hội nâng cao kỹ năng và phát triển cá nhân cho mọi người.
          Hãy tham gia cùng chúng tôi trong việc khám phá thế giới kiến thức và
          học tập liên tục tại Treepulse.
        </div>
        <div className="lg:text-3xl text-2xl font-bold text-main mt-2 lg:mt-[50px]">
          Nền tảng mạng xã hội{" "}
        </div>
        <div className=" flex icon ">
          <a
            className="margin-12px button h-fit mx-[10px] my-9 w-[48px]"
            href="https://www.facebook.com/profile.php?id=100084100552187&mibextid=9R9pXO "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="icon" />
          </a>
          <a
            className="margin-12px button h-fit mx-[10px] my-9 w-[48px]"
            href="https://www.tiktok.com/@bimbimvidau?_t=8gO6SSzdr0M&_r=1"
          >
            <img src={tiktok} alt="icon" />
          </a>
        </div>
      </div>
      <div className="w-full mt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default Human;
