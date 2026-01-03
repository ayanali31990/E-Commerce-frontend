import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // LEFT ARROW
  const SamplePrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="hidden md:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-red-500 p-2 rounded-full hover:bg-red-600 transition"
    >
      <AiOutlineArrowLeft size={22} className="text-white" />
    </div>
  );

  // RIGHT ARROW
  const SampleNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="hidden md:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-red-500 p-2 rounded-full hover:bg-red-600 transition"
    >
      <AiOutlineArrowRight size={22} className="text-white" />
    </div>
  );

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 h-auto md:h-[600px] px-4 md:px-10 py-10 md:py-0">
              {/* TEXT SECTION */}
              <div className="md:space-y-6  space-y-3 text-center md:text-left max-w-xl">
                <h3 className="text-red-500 font-semibold text-xs md:text-sm">
                  Powering Your World with the Best in Electronics
                </h3>

                <h1 className="md:text-2xl text-xl md:text-4xl font-bold uppercase md:line-clamp-3 line-clamp-2 text-white">
                  {item.title}
                </h1>

                <p className="text-sm md:text-base text-gray-300 line-clamp-3">
                  {item.description}
                </p>

                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md hover:scale-105 transition">
                  Shop Now
                </button>
              </div>

              {/* IMAGE SECTION */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[220px] sm:w-[260px] md:w-[450px] lg:w-[550px] rounded-full hover:scale-105 transition-all shadow-2xl shadow-red-400"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
