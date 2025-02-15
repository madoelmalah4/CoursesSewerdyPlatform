import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import BasilPic from "../assets/basil.png";
import Nada2 from "../assets/Nada2.png";
import hager from '../assets/hager.jpg'
const achievements = [
  {
    id: 1,
    name: "Basil",
    country: "USA",
    image: BasilPic,
    description:
      "Basil, a lively young man, participated in a summer program in the United States focused on self-development. He immersed himself in his studies and gained valuable insights, while also dedicating time to improving his football skills. This enriching experience in the U.S. served as a major motivator for him, boosting his self-confidence and inspiring him to face future challenges.",
  },
  {
    id: 2,
    name: "Nada Safwat",
    country: "Japan",
    image: Nada2,
    description:
      "Our school takes pride in the achievement of our student Nada Safwat, who proudly represented her school and our country, Egypt, during her trip to Japan. Nada showcased outstanding creativity and skills, reflecting the values we strive to instill in our students. Nada's experience is an inspiration to all of us and a distinguished addition to our school's record.",
  },
];

const AchievementsSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        mt:20
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "700",
          background: "linear-gradient(45deg, #ff8e53, #fe6b8b)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          mb: 5,
        }}
      >
        School Students Achievements
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
        }}
        style={{ width: "100%", padding: "20px 0" }}
      >
        {achievements.map((student) => (
          <SwiperSlide key={student.id}>
            <Stack
              sx={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                width: "100%",
                mb:2
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#1a1a1a", fontWeight: "600", mb: 2 }}
              >
                {student.country}
              </Typography>

              <Box
                component="img"
                src={student.image}
                alt={student.name}
                sx={{
                  width: { lg: "auto", sm: "400px", xs: "300px" },
                  borderRadius: "15px",
                  my: 2,
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontFamily: "Rubik",
                  width: { lg: "600px", sm: "400px", xs: "330px" },
                  textAlign: "center",
                  color: "#1a1a1a",
                  px: 2,
                  lineHeight: "1.6",
                }}
              >
                {student.description}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {!isMobile && (
        <>
          <Box
            className="swiper-pagination"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          />

          <Box
            className="swiper-button-prev"
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              zIndex: 10,
              cursor: "pointer",
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
        </>
      )} */}
    </Box>
  );
};

export default AchievementsSlider;
