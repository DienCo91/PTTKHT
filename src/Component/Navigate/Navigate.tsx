import logo from '../../assets/img/logo.png';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './style.scss';
const Navigate = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const showNav = useRef<HTMLDivElement>(null);
  const closeNav = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const local = useLocation();
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        scroll.current?.classList.add('bg-main');
        scroll.current?.classList.remove('bg-transparent');
      } else {
        scroll.current?.classList.remove('bg-main');
      }
    }

    local.pathname === '/' || local.pathname === '/process'
      ? window.addEventListener('scroll', handleScroll)
      : scroll.current?.classList.add('bg-main'),
      scroll.current?.classList.remove('bg-transparent');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [local.pathname]);

  // const handleOpenNav = () => {
  //   document.body.style.overflow = 'hidden';
  //   closeNav.current?.classList.remove(...'right-[-300px] opacity-0 pointer-events-none'.split(' '));
  //   showNav.current?.classList.add('hidden');
  // };
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
          {/* logo */}
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

          {/* <div
            className="block xl:hidden relative mt-[20px] pr-[20px] cursor-pointer"
            ref={showNav}
            onClick={handleOpenNav}>
            <i className="bi bi-list absolute top-0 text-[40px] block xl:hidden text-white"></i>
          </div> */}

          {/* text middle */}
          <div
            ref={closeNav}
            className="  flex xl:items-center xl:w-[50%] xl:justify-around absolute flex-1 bg-[#343538e4]  xl:z-10 pt-[60px] pl-[20px] xl:pt-0 xl:pl-0 text-white right-0 right-[-300px] opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto w-full sm:w-[400px]  xl:bg-inherit h-screen xl:h-auto xl:right-0  xl:relative xl:text-white text-[20px] cursor-pointer font-medium flex-col  xl:flex-row transition-all duration-200 ease-in-out">
            <div className="relative ">
              <i
                className="bi bi-x-lg absolute z-[10] right-[20px] top-[-40px]  text-[26px] block xl:hidden cursor-pointer"
                onClick={handleCloseNav}></i>
              <div className="mb-[20px] xl:mb-0 relative titleNav">
                <div className="z-[10] xl:z-[13] text-[16px] relative ">Home</div>
                <div className="hidden xl:flex parent  justify-center items-center  z-[12] p-[1px] absolute border-[2px] border-solid border-[#58c6fa] rounded-full top-1/2 left-1/2  translate-y-50 translate-x-50">
                  <div className="children  z-[9] border-[4px]  border-solid border-[#58c6fa] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mb-[20px] xl:mb-0 relative titleNav">
              <div className="z-[10] relative xl:z-[13] text-[16px] ">Shop</div>
              <div className="hidden xl:flex parent  justify-center items-center  z-[12] p-[1px] absolute border-[2px] border-solid border-[#58c6fa] rounded-full top-1/2 left-1/2  translate-y-50 translate-x-50">
                <div className="children  z-[9] border-[4px]  border-solid border-[#58c6fa] rounded-full"></div>
              </div>
            </div>
            <div className="mb-[20px] xl:mb-0 relative titleNav">
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/process');
                }}
                className="z-[10] xl:z-[13] relative text-[16px] ">
                About
              </div>
              <div className="hidden xl:flex parent  justify-center items-center  z-[12] p-[1px] absolute border-[2px] border-solid border-[#58c6fa] rounded-full top-1/2 left-1/2  translate-y-50 translate-x-50">
                <div className="children  z-[9] border-[4px]  border-solid border-[#58c6fa] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-1  items-center justify-end">
            <div className="mr-[45px] hover:opacity-[0.8] cursor-pointer">
              <i className="bi bi-person-circle text-[20px] text-white"></i>
            </div>
            <div className="mr-[45px] hover:opacity-[0.8] cursor-pointer">
              <i className="bi bi-search text-[20px] text-white"></i>
            </div>
            <i className="bi bi-cart2 text-[20px] text-white hover:opacity-[0.8] cursor-pointer"></i>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigate;
