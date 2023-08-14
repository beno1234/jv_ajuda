import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Parallax } from "swiper/modules";

const HeaderCarousel = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " <span style='font-size:12px; font-weigth: 100'>/</span> " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      }}
      navigation={true}
      speed={1000}
      modules={[Pagination, Navigation, Parallax]}
      parallax={true}
      mousewheel={true}
      className="h-[48rem] "
    >
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/3.jpg)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70 bg-black flex items-center justify-center">
            <h1 className="text-5xl font-bold">Texto Destacado 1</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/3.jpg)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70 bg-black flex items-center justify-center">
            <h1 className="text-5xl font-bold">Texto Destacado 1</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/3.jpg)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70 bg-black flex items-center justify-center">
            <h1 className="text-5xl font-bold">Texto Destacado 1</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/3.jpg)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70 bg-black flex items-center justify-center">
            <h1 className="text-5xl font-bold">Texto Destacado 1</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderCarousel;
