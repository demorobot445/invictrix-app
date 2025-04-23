import Image from "next/image";
import Arrow from "./Arrow";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useState } from "react";
import SW from "swiper";

const Shop = () => {
  const [swiper, setSwiper] = useState<SW>();

  return (
    <section className="shop-section relative z-10 container mx-auto flex px-5 py-24">
      <div className="flex w-1/3 flex-col">
        <h1 className="text-dark text-7xl uppercase">Our care crystal salt</h1>
        <div className="mt-20 flex">
          <button
            onClick={() => swiper?.slidePrev()}
            className="border-dark/20 mx-2 flex h-[72px] w-[72px] items-center justify-center border-2"
          >
            <span className="inline-block h-5 w-5 rotate-180">
              <Arrow />
            </span>
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            className="border-dark/20 mx-2 flex h-[72px] w-[72px] items-center justify-center border-2"
          >
            <span className="inline-block h-5 w-5">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
      <div className="flex w-2/3 bg-white">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {[...Array(10)].map((e, i) => {
            return (
              <SwiperSlide className="h-full pt-10 pb-7" key={i}>
                <p className="text-dark/20 text-center text-sm tracking-[0.2rem] uppercase">
                  smooth skin
                </p>
                <h4 className="mb-11 text-center text-2xl">Sea mist</h4>
                <Image
                  className="object-contain"
                  src="/demo-product.png"
                  alt="product-img"
                  width={240}
                  height={200}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Shop;
