import React from 'react';
import banner1 from "../../assets/banner_1.jpg"
import banner2 from "../../assets/Banner-2.jpg"
import banner3 from "../../assets/Banner_1.3.png"
import banner4 from "../../assets/Banner_3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';
const Banner = () => {
    return (
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative lg:w-[1320px] lg:h-[500px] mx-auto flex items-center justify-center">
          <img
            src={banner1}
            alt="Crowdfunding platform features"
            className="absolute lg:w-[70%] lg:h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-center text-black  p-8  rounded-md max-w-2xl">
            <h2 className="lg:text-4xl text-2xl font-bold"><Fade cascade damping={0.1}>Join the Movement</Fade></h2>
            <p className="mt-4 text-lg">
              Be part of a platform that empowers dreams and supports meaningful causes.
            </p>
            <Link to='/register' className="btn btn-primary mt-6">Get Started</Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative lg:w-[1320px] lg:h-[500px] mx-auto flex items-center justify-center">
          <img
            src={banner2}
            alt="Successful campaigns on our platform"
            className="absolute  object-cover opacity-80"
          />
          <div className="relative z-10 text-center text-black p-8  rounded-md max-w-2xl">
            <h2 className="lg:text-4xl text-2xl font-bold"><Fade cascade damping={0.1}>Support Inspiring Campaigns</Fade></h2>
            <p className="mt-4 text-lg">
              Explore impactful campaigns and make a difference with your contributions.
            </p>
            <Link to='/all-campaign' className="btn btn-primary mt-6">Browse Campaigns</Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative lg:w-[1320px] lg:h-[500px] mx-auto flex items-center justify-center">
          <img
            src={banner3}
            alt="How to start your own campaign"
            className="absolute object-cover opacity-70"
          />
          <div className="relative z-10 text-center text-black p-8 rounded-md max-w-2xl">
            <h2 className="lg:text-4xl text-2xl font-bold"><Fade cascade damping={0.1}>Start Your Campaign Today</Fade></h2>
            <p className="mt-4 text-lg">
              Raise funds for your cause or project and reach a global audience.
            </p>
            <Link to='/add-new-campaign' className="btn btn-primary mt-6">Add Campaign Now</Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    );
};

export default Banner;