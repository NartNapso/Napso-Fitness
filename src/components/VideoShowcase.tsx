import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "../styles.css";

const videos = [
  { id: 1, src: "/Crawling-loop.mov" },
  { id: 2, src: "/Obstacle2.mov" },
  { id: 3, src: "/Obstacles.mov" },
  { id: 4, src: "/Water.mov" },
];

const VideoShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === swiper.realIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reset video when it's not active
        }
      }
    });
  };
  
  return (
    <div className="video-showcase">
      {/* Navigation Buttons */}
      <button className="nav-btn prev-btn" onClick={() => swiperRef.current?.slidePrev()}>&#10094;</button>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        onAfterInit={handleSlideChange}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <motion.div
              className={`video-card ${index === activeIndex ? "active" : ""}`}
              animate={{ scale: index === activeIndex ? 1 : 0.85 }}
              transition={{ duration: 0.5 }}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                className="video"
                muted
                loop
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="nav-btn next-btn" onClick={() => swiperRef.current?.slideNext()}>&#10095;</button>
    </div>
  );
};

export default VideoShowcase;
