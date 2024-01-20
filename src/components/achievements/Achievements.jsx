import React from 'react'
import './achievements.css'
import PIC1 from "../../assets/pic1.png";
import PIC2 from "../../assets/pic2.png";
import PIC3 from "../../assets/pic3.jpg";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

const data = [
  {
    image: PIC1,
    title: "300+ Problems on Leetcode",
    review:
      "Solved over 300 problems on Leetcode in the past year involving multiple concepts such as data structures, algorithms, math and design in C++, Javascript and Python languages.",
  },
  {
    image: PIC2,
    title: "Successfully participated in multiple Hackathons",
    review:
      "Participated in multiple hackathons and successfully completed projects in the given time frame. Some of the projects are listed above.",
  },
  {
    image: PIC3,
    title: "Runner-up in State level competition",
    review:
      "Achieved 2nd position in State-level Netball and Dodge-ball Tournaments (2018-19).",
  }
];

const Achievements = () => {
  return (
    <section id="achievements">
      <h5>A Few Noteworthy Feats</h5>
      <h2>My Achievements</h2>
      <Swiper
        className="container achievement_container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ image, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="achievement">
              <div className="achievement-image">
                <img src={image} alt="achievement" />
              </div>
              <h5 className="achievement_name">{title}</h5>
              <small className="achievement_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Achievements