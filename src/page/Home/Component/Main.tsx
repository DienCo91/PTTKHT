import { data } from '@/util/data';
import { useEffect, useRef, useState } from 'react';
import Item from './Item';
import SearchAppBar from './SearchComponent';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';
import Trending from './Trending';
import { Product } from '@/util/types';

const TYPE = {
  shirt: 'Top | Nửa trên',
  shoe: 'Footwear | Lên chân',
  accessory: 'Accessories | Phụ kiện',
  other: 'Football Equipment',
};

const Main = () => {
  const showTag = useRef<HTMLDivElement>(null);
  const showCommit = useRef<HTMLDivElement>(null);

  const [dataProduct, setDataProduct] = useState<Product[]>(data as Product[]);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 600) {
        showTag.current?.classList.remove(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
      }
      if (scrollY > 400) {
        showCommit.current?.classList.remove(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
      }
      if (scrollY < 200) {
        showTag.current?.classList.add(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
      }
      if (scrollY < 100) {
        showCommit.current?.classList.add(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = ({ val, type }: { val: string; type: string }) => {
    const lowerVal = val.toLowerCase();

    let newData = data.filter(item => {
      const matchesName = item.productName.toLowerCase().includes(lowerVal);
      const matchesType = type ? item.category.includes(TYPE[type as keyof typeof TYPE] as string) : true;
      return matchesName && matchesType;
    });

    const remainder = newData.length % 4;
    if (remainder > 0) {
      const itemsToAdd = 4 - remainder;
      newData = [...newData, ...Array(itemsToAdd).fill(null)];
    }
    setDataProduct(newData as Product[]);
  };

  return (
    <div className="z-[100]  flex items-center flex-col" id="shop">
      {/* trending */}
      <div
        className={`flex flex-col w-[80%] transition-all duration-[1s] ease-in-out opacity-0 pointer-events-none mt-[200px]`}
        ref={showCommit}>
        <Trending />
      </div>

      <div
        className="flex w-[80%] flex-col  opacity-0 pointer-events-none transition-all duration-[1s] ease-in-out "
        ref={showTag}>
        <h1 className="text-[32px] font-bold mb-[20px]">Shop</h1>
        <SearchAppBar handleSearch={handleSearch} />
        <div className="flex flex-wrap justify-start mt-[20px]">
          {/* item */}
          {dataProduct.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
