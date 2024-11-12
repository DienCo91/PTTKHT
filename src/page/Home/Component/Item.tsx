import { useNavigate } from 'react-router-dom';

interface IItem {
  item: any;
  style?: React.CSSProperties | undefined;
}

const Item: React.FC<IItem> = ({ item, style }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#F4F5F7] mb-[24px] rounded-sm w-[calc(25%-20px)] box-border shadow-lg hover:translate-y-[-10px] active:translate-y-[-6px] hover:shadow-[#d8eafe] transition-all duration-[0.16s] ease-in-out cursor-pointer "
      style={style}
      onClick={() => {
        navigate(`/detail/${item.productID}`);
      }}>
      <img src={item.media.link[0]} alt="12312" />
      <div className="px-[16px] py-[8px]">
        <p className="font-semibold line-clamp-1">{item.productName}</p>
        <p className="mt-[8px] opacity-50 ">{item.productColor}</p>
        <h2 className="mt-[8px] font-semibold">{item.productPrice}</h2>
      </div>
    </div>
  );
};

export default Item;
