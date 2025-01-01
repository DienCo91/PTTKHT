import { getProductAll } from '@/util/data';
import { Product } from '@/util/types';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from './Item';

const Trending = () => {
  return (
    <>
      <h1 className="text-[32px] font-bold mb-[20px]">Trending</h1>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {(getProductAll() as Product[]).map(item => (
          <SwiperSlide style={{ marginRight: 20, marginLeft: 20 }} key={item.productID}>
            <div className="flex">
              <Item item={item} key={item.productID} style={{ width: '100%', height: 400 }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Trending;
