import React from 'react';
import Image from 'next/image';
import Button from 'components/base/Button';
import SectionWrap from 'components/home/SectionWrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import TESTI_DATA, { CLIENT_DATA } from 'utils/TESTI_DATA';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Testimonial = () => (
  <SectionWrap
    sectionName="Testimonials"
    sectionDesc="What clients love in working with Albatech Team"
  >
    <div className="w-full lg:container mx-auto px-4">
      <div className="my-8 h-[180px]">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {
                            TESTI_DATA.map((data, index) => (
                              <SwiperSlide key={`testi-${index}`}>
                                {({ isActive }) => (
                                  <div className="testimonial-item">
                                    <p className={`font-bold ${isActive ? 'text-3xl' : 'text-xl'}
                                             transition ease-in-out delay-500`}
                                    >
                                      {data.title}
                                    </p>
                                    <p className={`${isActive ? 'text-xl' : 'text-base'}
                                            transition ease`}
                                    >
                                      {data.sub}
                                    </p>
                                    <div className="flex flex-row justify-between items-center">
                                      <div>
                                        <p className="mt-4">{data.author}</p>
                                        <p className="text-sm text-[#C4C4C4]">{data.position}</p>
                                      </div>
                                      <div className={`relative h-[50px] w-[50px] ${isActive ? 'opacity-100' : 'opacity-0'} image-testi`}>
                                        <Image
                                          src="/assets/images/avatar.png"
                                          alt="Picture of the author"
                                          fill
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}

                              </SwiperSlide>
                            ))
                        }

        </Swiper>
      </div>
      <div className="my-8">
        <Swiper
          spaceBetween={50}
          slidesPerView="auto"
          slidesPerGroup={2}
          breakpoints={{
            // when window width is >= 640px
            350: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1068: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          loop
          pagination={{
            clickable: true,
          }}
          grabCursor
          navigation
          modules={[Pagination, Navigation]}
        >
          {
                            CLIENT_DATA.map((data, index) => (
                              <SwiperSlide key={`${data}-${index}`}>
                                <div className="relative h-[200px] w-[200px] mb-8">
                                  <Image
                                    src={`/assets/images/clients/${data}.png`}
                                    alt="Picture of the author"
                                    fill
                                  />
                                </div>
                              </SwiperSlide>
                            ))
                        }
        </Swiper>
      </div>
      <div className="bg-yellow-400 flex flex-col items-center p-8 rounded-lg">
        <p className="text-sm">Is software important for your businnes?</p>
        <p className="text-2xl font-bold mb-4">Build it with Albatech</p>
        <Button text="Consult Now" className="border border-black" />
      </div>
      <style jsx global>
        {`
                   .testimonial-item p{
                        transition: font 0.5s ease !important;
                   }
                   .testimonial-item .image-testi {
                        transition: all 0.5s ease !important;
                   }
                   .swiper-pagination {
                        margin-top:16px;
                   }
                   .swiper-pagination-bullet-active {
                        background: rgb(250 204 21) !important;
                   }
                `}
      </style>
    </div>
  </SectionWrap>
);

export default Testimonial;
