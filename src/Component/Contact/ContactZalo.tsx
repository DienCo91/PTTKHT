import imgZalo from "../../assets/img/zalo-icon.png";
const ContactZalo = () => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        window.open("https://zalo.me/0981934720", "_blank");
      }}
      className="bg-icon flex items-center px-[20px] py-[10px] rounded-md text-white cursor-pointer shadow-lg"
    >
      <div>Liên Hệ Ngay </div>
      <img src={imgZalo} alt="imgZalo" className="w-[40px] ml-[20px]" />
    </div>
  );
};

export default ContactZalo;
