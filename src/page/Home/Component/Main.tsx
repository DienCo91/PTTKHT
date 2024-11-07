import { data } from '@/util/data';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import { Search } from '@mui/icons-material';
import SearchAppBar from './SearchComponent';
const Main = () => {
  const showTag = useRef<HTMLDivElement>(null);
  const showCommit = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 250) {
        showTag.current?.classList.remove(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
      }
      if (scrollY > 830) {
        showCommit.current?.classList.remove(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
      }
      if (scrollY < 200) {
        showTag.current?.classList.add(...'opacity-0 pointer-events-none mt-[200px]'.split(' '));
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
      {/* tag */}
      <div
        className="flex w-[80%] flex-col  opacity-0 pointer-events-none transition-all duration-[1s] ease-in-out "
        ref={showTag}>
        {/* code shop here */}
        <h1 className="text-[32px] font-bold mb-[20px]">Shop</h1>
        <SearchAppBar />
        <div className="flex flex-wrap justify-between mt-[20px]">
          {/* item */}
          {data.map(item => (
            <Item item={item} key={item.productID} />
          ))}
        </div>
      </div>
      {/* commit */}
      <div
        className="flex flex-col items-center w-[80%]  opacity-0 pointer-events-none transition-all duration-[1s] ease-in-out mt-[200px]"
        ref={showCommit}>
        {/* code */}
      </div>
    </div>
  );
};

export default Main;
