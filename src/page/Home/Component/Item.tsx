interface IItem {
  item: any;
}

const Item: React.FC<IItem> = ({ item }) => {
  return (
    <div className="bg-[#F4F5F7] mb-[24px] rounded-sm w-[calc(25%-20px)] box-border shadow-lg hover:translate-y-[-10px] active:translate-y-[-6px] hover:shadow-[#d8eafe] transition-all duration-[0.16s] ease-in-out cursor-pointer ">
      <img src={item.media.link[0]} alt="12312" />
      <div className="px-[16px] py-[8px]">
        <p className="font-semibold">{item.productName}</p>
        <p className="mt-[8px] opacity-50 ">{item.productColor}</p>
        <h2 className="mt-[8px] font-semibold">{item.productPrice}</h2>
      </div>
    </div>
  );
};

export default Item;
