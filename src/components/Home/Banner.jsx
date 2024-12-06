import React from 'react';
import banner1 from "../../assets/banner_1.jpg"
import banner2 from "../../assets/Banner-2.jpg"
import banner3 from "../../assets/Banner_1.3.png"
import banner4 from "../../assets/Banner_3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <Swiper  spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}>
        <SwiperSlide>
        <div className="w-[1320px] h-[500px] mx-auto flex items-center justify-center text-white text-3xl font-bold">
          <img src={banner1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[1320px] h-[500px] mx-auto flex items-center justify-center text-white text-3xl font-bold">
        <img src={banner2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[1320px] h-[500px] mx-auto flex items-center justify-center text-white text-3xl font-bold">
        <img src={banner3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[1320px] h-[500px] mx-auto flex items-center justify-center text-white text-3xl font-bold">
        <img src={banner4} alt="" />
        </div>
      </SwiperSlide>
      </Swiper>
    );
};

export default Banner;