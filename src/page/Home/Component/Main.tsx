import { data } from '@/util/data';
import { useEffect, useRef } from 'react';
import Item from './Item';
import SearchAppBar from './SearchComponent';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';
import Trending from './Trending';

const Main = () => {
  const showTag = useRef<HTMLDivElement>(null);
  const showCommit = useRef<HTMLDivElement>(null);

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
        <SearchAppBar />
        <div className="flex flex-wrap justify-between mt-[20px]">
          {/* item */}
          {data.map(item => (
            <Item item={item} key={item.productID} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
