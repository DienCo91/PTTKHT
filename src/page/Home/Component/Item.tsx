import { Product } from '@/util/types';
import { useNavigate } from 'react-router-dom';

interface IItem {
  item: Product;
  style?: React.CSSProperties | undefined;
}

const Item: React.FC<IItem> = ({ item, style }) => {
  const navigate = useNavigate();

  if (!item) return <div className="w-[calc(25%-20px)]"></div>;

  return (
    <div
      className="bg-[#F4F5F7] mb-[24px] rounded-sm w-[calc(25%-20px)] mx-[10px] box-border shadow-lg hover:translate-y-[-10px] active:translate-y-[-6px] hover:shadow-[#d8eafe] transition-all duration-[0.16s] ease-in-out cursor-pointer "
      style={style}
      onClick={() => {
        navigate(`/detail/${item.productID}`);
      }}>
      <img src={item.media.link[0]} alt="12312" style={{ height: 280, width: '100%', objectFit: 'cover' }} />
      <div className="px-[16px] py-[8px]">
        <p className="font-semibold line-clamp-1">{item.productName}</p>
        <p className="mt-[8px] opacity-50 h-[20px]">{item?.productColor || ''}</p>
        <div className="flex justify-between items-center">
          <h2 className="mt-[8px] font-semibold">{item.productPrice}</h2>
          <p className="opacity-60">{item.quantity} left</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
