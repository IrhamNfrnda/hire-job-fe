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
      photo: "/Andi.jpg",
      name: "Andi",
      job: "Web Developer",
      opinion: "HireJob sangat membantu saya dalam mencari pekerjaan dengan fitur pencarian yang mudah dan notifikasi pekerjaan terbaru yang selalu update.",
    },
    {
      photo: "/Fajar.jpeg",
      name: "Fajar",
      job: "HR Manager",
      opinion: "Platform ini memberikan profil pekerja yang komprehensif, sehingga saya bisa menilai kualifikasi calon karyawan dengan lebih baik.",
    },
    ,
    {
      photo: "/Gina.jpg",
      name: "Gina",
      job: "Designer",
      opinion: "HireJob memberikan pengalaman pengguna yang sangat baik dengan antarmuka yang intuitif dan mudah dinavigasi.",
    },
    ,
    {
      photo: "/Joko.jpg",
      name: "Joko",
      job: "Perekrut",
      opinion: "Saya merasa terkoneksi dengan talenta yang relevan secara lebih efisien berkat HireJob yang menyediakan database pekerja yang beragam.",
    },
    ,
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
              <img style={{ 
                width: '100%',
                height: '200px',
               }} src={item.photo} alt={item.name} />
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
