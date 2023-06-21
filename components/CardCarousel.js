import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination]);

const CardCarousel = () => {
  const [swiper, setSwiper] = useState(null);

  const showNextSlides = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const data = [
    {
      photo: "/home_1.jpg",
      name: "John Doe",
      job: "Web Developer",
      opinion: "Swiper is great!",
    },
    {
      photo: "/home_1.jpg",
      name: "Jane Smith",
      job: "Designer",
      opinion: "I love the card carousel!",
    },
    ,
    {
      photo: "/home_1.jpg",
      name: "Jane Smith",
      job: "Designer",
      opinion: "I love the card carousel!",
    },
    ,
    {
      photo: "/home_1.jpg",
      name: "Jane Smith",
      job: "Designer",
      opinion: "I love the card carousel!",
    },
    ,
    {
      photo: "/home_1.jpg",
      name: "Jane Smith",
      job: "Designer",
      opinion: "I love the card carousel!",
    },
    ,
    {
      photo: "/home_1.jpg",
      name: "Jane Smith",
      job: "Designer",
      opinion: "I love the card carousel!",
    },
    // Add more data objects as needed
  ];

  return (
    <div id="card-carousel-container">
      <button className="carousel-button prev-button" onClick={() => swiper.slidePrev()}>&#60;</button>
      <Swiper
        onSwiper={setSwiper}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="card-carousel"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item.photo} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.job}</p>
              <p>{item.opinion}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="carousel-button next-button" onClick={() => swiper.slideNext()}>&#62;</button>
    </div>
  );
};

export default CardCarousel;
