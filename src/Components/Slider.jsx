import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwwedyLogo from "../assets/sewedy2.png";
import Wezara from "../assets/wzara.png";
import usaid from "../assets/usaid.png";
import Iats from "../assets/iats.png";

const SliderPartners = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // Connect to the pagination container
          type: "bullets", // Use bullet pagination
          dynamicBullets: true, // Enable dynamic bullets
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <Box
              component="img"
              src={SwwedyLogo}
              alt="Sewedy Logo"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <Box
              component="img"
              src={Wezara}
              alt="Wezara Logo"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <Box
              component="img"
              src={usaid}
              alt="USAID Logo"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <Box
              component="img"
              src={Iats}
              alt="IATS Logo"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination Container */}
      <Box
        className="swiper-pagination"
        sx={{
          position: "absolute",
          bottom: "0", // Position at the bottom
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          marginTop: "20px", // Add margin-top to create space
        }}
      />

      {/* Custom Navigation Arrows */}
      <Box
        className="swiper-button-prev"
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 10,
          cursor: "pointer",
          color: "#000",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            content: '"←"',
            fontSize: "24px",
            fontWeight: "bold",
          },
        }}
      />
      <Box
        className="swiper-button-next"
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: 10,
          cursor: "pointer",
          color: "#000",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            content: '"→"',
            fontSize: "24px",
            fontWeight: "bold",
          },
        }}
      />
    </Box>
  );
};

export default SliderPartners;
