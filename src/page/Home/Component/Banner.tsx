import { useState, useEffect, useRef } from 'react';
import banner1 from '../../../assets/img/banner1.jpg';
import banner2 from '../../../assets/img/banner2.jpg';
import banner3 from '../../../assets/img/banner3.jpg';

import './style.scss';

const Banner = () => {
  const show = useRef<HTMLDivElement>(null);
  const [imgCurrent, setImgCurrent] = useState(0);
  const firstRender = useRef<number>(3500);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    show.current?.classList.remove(...'opacity-0 mt-[200px]'.split(' '));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      firstRender.current = 0;
      const allImg = document.querySelectorAll('.slideImg');

      if (imgCurrent === 2) {
        setImgCurrent(0);
        allImg[0].classList.remove(...'opacity-0 scale-125'.split(' '));
        allImg[2].classList.add(...'opacity-0 scale-125'.split(' '));
      } else {
        setImgCurrent(imgCurrent + 1);
        allImg[imgCurrent + 1].classList.remove(...'opacity-0 scale-125'.split(' '));
        allImg[imgCurrent].classList.add(...'opacity-0 scale-125'.split(' '));
      }
    }, 5000 - firstRender.current);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="h-screen w-full relative z-0">
      <div className="absolute">
        <img
          className="w-screen h-screen left-0 right-0 object-cover fixed z-[1] slideImg transition-all duration-[3s] ease-in-out opacity-1 scale-125"
          src={banner1}
          alt="banner img"
        />
        <img
          className="w-screen h-screen left-0 right-0 object-cover fixed z-[1] slideImg transition-all duration-[3s] ease-in-out opacity-0 scale-125"
          src={banner2}
          alt="banner img"
        />
        <img
          className="w-screen h-screen left-0 right-0 object-cover fixed z-[1] slideImg transition-all duration-[3s] ease-in-out opacity-0 scale-125"
          src={banner3}
          alt="banner img"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[2]" />
      <div
        className="fixed z-10 top-1/2 left-1/2  translate-y-50 translate-x-50 text-center opacity-0 mt-[200px] transition-all duration-1000 ease-in-out"
        ref={show}>
        <div className="flex space-x-3 place-content-center mb-[40px]">
          <div>
            <h1 className="text-5xl font-bold text-white tracking-widest">Urban Vibe</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
