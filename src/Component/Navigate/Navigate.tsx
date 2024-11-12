import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import ModalCard from './components/ModalCard';
import './style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import DrawerNav from './components/DrawerNav';

const Navigate = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const showNav = useRef<HTMLDivElement>(null);
  const closeNav = useRef<HTMLDivElement>(null);
  const scrollYCurrent = useRef<number>(0);

  const navigate = useNavigate();
  const local = useLocation();

  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const products = useSelector((state: RootState) => state.card.listProducts);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer = () => {
    setOpenDrawer(pre => !pre);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        scroll.current?.classList.add('bg-main');
        scroll.current?.classList.remove('bg-transparent');
      } else {
        scroll.current?.classList.remove('bg-main');
      }
      if (scrollY > scrollYCurrent.current) {
        scroll.current?.classList.add('opacity-0');
      } else {
        scroll.current?.classList.remove('opacity-0');
      }
      scrollYCurrent.current = scrollY;
    }

    local.pathname === '/' || local.pathname === '/process'
      ? window.addEventListener('scroll', handleScroll)
      : scroll.current?.classList.add('bg-main'),
      scroll.current?.classList.remove(...'bg-transparent opacity-0'.split(' '));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [local.pathname]);

  const handleCloseNav = () => {
    document.body.style.overflow = 'auto';
    closeNav.current?.classList.add(...'right-[-300px] opacity-0 pointer-events-none'.split(' '));
    showNav.current?.classList.remove('hidden');
  };

  return (
    <>
      <div
        ref={scroll}
        className="flex justify-around bg-transparent h-[80px] z-[101] fixed w-full top-0 transform transition-all duration-200 linear select-none">
        <div className="w-[80%] flex justify-around">
          <div
            className="flex items-center w-full flex-1 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/');
            }}>
            <img src={logo} alt="" className="w-[50px] h-[50px] object-contain" />
            <div>
              <div className="text-[24px] text-white font-semibold tracking-wider">Urban Vibe</div>
            </div>
          </div>

          <div
            ref={closeNav}
            className="  flex xl:items-center xl:w-[50%] xl:justify-around absolute flex-1 bg-[#343538e4]  xl:z-10 pt-[60px] pl-[20px] xl:pt-0 xl:pl-0 text-white right-0 right-[-300px] opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto w-full sm:w-[400px]  xl:bg-inherit h-screen xl:h-auto xl:right-0  xl:relative xl:text-white text-[20px] cursor-pointer font-medium flex-col  xl:flex-row transition-all duration-200 ease-in-out">
            <div className="relative ">
              <i
                className="bi bi-x-lg absolute z-[10] right-[20px] top-[-40px]  text-[26px] block xl:hidden cursor-pointer"
                onClick={handleCloseNav}></i>
              <div className="mb-[20px] xl:mb-0 relative titleNav">
                <div
                  className="z-[10] xl:z-[13] text-[16px] relative "
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/');
                  }}>
                  Home
                </div>
                <div className="hidden xl:flex parent  justify-center items-center  z-[12] p-[1px] absolute border-[2px] border-solid border-[#58c6fa] rounded-full top-1/2 left-1/2  translate-y-50 translate-x-50">
                  <div className="children  z-[9] border-[4px]  border-solid border-[#58c6fa] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mb-[20px] xl:mb-0 relative titleNav">
              <div className="z-[10] relative xl:z-[13] text-[16px] ">
                <a
                  href="#shop"
                  onClick={() => {
                    navigate('/');
                  }}>
                  Shop
                </a>
              </div>
              <div className="hidden xl:flex parent  justify-center items-center  z-[12] p-[1px] absolute border-[2px] border-solid border-[#58c6fa] rounded-full top-1/2 left-1/2  translate-y-50 translate-x-50">
                <div className="children  z-[9] border-[4px]  border-solid border-[#58c6fa] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-1  items-center justify-end">
            <div className="mr-[45px] hover:opacity-[0.8] cursor-pointer" onClick={toggleDrawer}>
              <i className="bi bi-person-circle text-[20px] text-white"></i>
            </div>

            <div className="relative">
              <i
                className="bi bi-cart2 text-[20px] text-white hover:opacity-[0.8] cursor-pointer"
                onClick={handleOpen}
              />
              {!!products.length && (
                <span className="absolute top-[-8px] left-[12px] bg-[#ff6879b6] rounded-full px-2 text-[14px] text-white">
                  {products.length}
                </span>
              )}
            </div>
          </div>
        </div>
        <ModalCard handleClose={handleClose} open={open} />
        <DrawerNav open={openDrawer} toggleDrawer={toggleDrawer} />
      </div>

      <Outlet />
    </>
  );
};

export default Navigate;
