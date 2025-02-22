import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import BasilPic from "../assets/basil.png";
import Nada2 from "../assets/Nada2.png";

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
        mt: 13,
        height: "auto",
        overflow: "hidden",
        paddingBottom: 6, // Added extra padding at the bottom for pagination
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          color: "#2c3e50",
          textAlign: "center",
          mb: 4,
        }}
      >
        School Students Achievements
      </Typography>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={
          isMobile
            ? false
            : { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
        }
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {achievements.map((student) => (
          <SwiperSlide key={student.id}>
            <Stack
              sx={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                width: "100%",
                backgroundColor: "#ecf0f1",
                boxShadow: "none",
                overflow: "hidden",
                height: "100%",
                pt:3,
                pb:3
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#2c3e50",
                  fontWeight: "500",
                  mb: 2,
                  fontSize: { xs: "18px", sm: "22px", md: "24px" },
                  wordWrap: "break-word", // Ensures text wraps properly on small screens
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                {student.country}
              </Typography>

              <Box
                component="img"
                src={student.image}
                alt={student.name}
                sx={{
                  width: "100%",
                  maxWidth: {sm:"350px" ,xs:"350px" , md:"450px" , lg:"450px"}, // Ensures image is responsive
                  height: "100%",
                  borderRadius: "10px",
                  my: 2,
                  objectFit: "cover",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontWeight: "400",
                  color: "#34495e",
                  width: { lg: "600px", sm: "400px", xs: "90%",md:"500px" }, // Makes the text container responsive
                  textAlign: "center",
                  px: 2,
                  lineHeight: "1.8",
                  fontSize: { xs: "14px", sm: "15px", md: "18px" },
                  wordWrap: "break-word", // Makes sure text doesn't overflow
                 
                }}
              >
                {student.description}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && (
        <>
          <Box
            className="swiper-button-prev"
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              zIndex: 10,
              cursor: "pointer",
              backgroundColor: "rgba(44, 62, 80, 0.8)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::after": {
                content: '"←"',
                fontSize: "20px",
                fontWeight: "bold",
                color: "#fff",
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
              backgroundColor: "rgba(44, 62, 80, 0.8)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::after": {
                content: '"→"',
                fontSize: "20px",
                fontWeight: "bold",
                color: "#fff",
              },
            }}
          />

          <Box
            className="swiper-pagination"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          />
        </>
      )}
    </Box>
  );
};

export default AchievementsSlider;
