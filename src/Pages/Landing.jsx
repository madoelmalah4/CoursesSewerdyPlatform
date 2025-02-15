import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Box,
  Divider,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sewedy from "../assets/sewedy.png";
import CostumButton from "../Components/CostumButton";
import ReactPlayer from "react-player";
import { RevealLeftARight } from "../Components/RevealLeftARight";
import { Reveal } from "../Components/Reveal";
import LandPic from "../assets/landpic.png";
import Redfram from "../assets/fram2.png";
import HoverCounter from "../Components/HoverCounter";
import Nada2 from "../assets/Nada2.png";
import BasilPic from "../assets/basil.png";
import { useInView } from "react-intersection-observer";
import SliderPartners from "../Components/Slider";
import Footer from "../Components/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import SewedyVidoe from "../assets/sewedyVidoe.mp4";
import homep from "../assets/homep.png";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";

const Landing = () => {
  const { inView, ref } = useInView();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { ref: videoRef, inView: isVideoInView } = useInView({
    threshold: 0.5,
  });

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowY: "auto",
        overflowX: "hidden",
        transition: "all 0.4s",
        backgroundColor: inView ? "#1C1D1F" : "",
      }}
    >
      <Stack
        sx={{
          width: "100vw",
          minHeight: "100vh",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Sewedy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(0.7px)",
            maskImage: "linear-gradient(to top, transparent, black)",
            WebkitMaskImage: "linear-gradient(to top, transparent, black)",
            zIndex: -1,
          }}
        />
        <Stack
          sx={{
            position: "relative",
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "60px", md: "60px", sm: "40px", xs: "40px" },
              fontWeight: "600",
              color: "#1a1a1a",
              ml: { lg: 20 },
              mb: 10,
              textAlign: { xs: "center", lg: "left", md: "center" },
              width: "90%",
              p: 2,
            }}
          >
            <span style={{ color: "#DA1B1B" }}>El Sewedy</span> International
            School for Applied Technology and Software
          </Typography>
          <Stack sx={{}}>
            <CostumButton Text={"Learn More"} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "100vw",
          minHeight: { lg: "800px", md: "700px", sm: "600px", xs: "auto" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          flexDirection: { lg: "row", xs: "column" },
          mt: { lg: 20, md: 15, sm: 10, xs: 5 },
          px: { lg: 10, md: 6, sm: 4, xs: 2 }, // Add padding for better spacing
          gap: { lg: 5, xs: 3 },
        }}
      >
        {/* TEXT CONTENT */}
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: { lg: "50%", xs: "100%" },
            gap: 4,
            textAlign: "center",
          }}
        >
          <RevealLeftARight duration={0.3} isOnce={true} direction={true}>
            <Typography
              variant={isMobile ? "h5" : "h2"}
              sx={{
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Rubik",
              }}
            >
              <Box
                component="span"
                sx={{ color: "#DA1B1B", fontWeight: "bold", display: "block" }}
              >
                What is
              </Box>
              El Sewedy International School?
            </Typography>
          </RevealLeftARight>

          <RevealLeftARight duration={0.3} isOnce={true} direction={true}>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{
                fontWeight: "300",
                color: "#1a1a1a",
                fontFamily: "Rubik",
                textAlign: "center",
                p: 2,
                fontSize: { lg: "22px", md: "20px", sm: "18px", xs: "16px" },
                lineHeight: "1.5",
              }}
            >
              El Sewedy International School for Applied Technology and
              Software, established in 2022, is ranked among the top ten
              international schools for applied technology. Our mission is to
              empower students with the skills and knowledge needed for success
              in both local and global industries, fostering a brighter future
              through cutting-edge education and innovation.
            </Typography>
          </RevealLeftARight>
        </Stack>

        {/* VIDEO SECTION */}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: { lg: "50%", xs: "100%" },
            gap: 3,
            mt: { lg: 0, xs: 5 }, // Adjust spacing for mobile
          }}
        >
          <Box
            sx={{
              borderRadius: { lg: "30px", md: "25px", sm: "20px", xs: "15px" },
              overflow: "hidden",
              border: "5px solid transparent",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              width: { lg: "80%", md: "90%", sm: "95%", xs: "100%" },
            }}
          >
            <ReactPlayer
              url={SewedyVidoe}
              height="100%"
              width="100%"
              controls={true}
              loop={true}
              playing={true}
              muted={true}
            />
          </Box>
        </Stack>
      </Stack>

      {/* SPECIALIZATION SECTION */}
      <Stack
        sx={{
          backgroundColor: "#E60000",
          height: "100%",
          p: { lg: 6, md: 5, sm: 4, xs: 3 },
          width: "80%",
          alignItems: "flex-start",
          justifyContent: "center",
          borderRadius: "15px",
          position: "relative",
          transition: "0.3s ease",
          mt: 20,
          gap: 2,
          "&:hover": { scale: 1.02 },
        }}
      >
        <Box
          component={"img"}
          src={homep}
          sx={{
            width: "250px",
            position: "absolute",
            bottom: 10,
            right: 10,
            opacity: 0.5,
            boxShadow: "4px 4px 15px rgba(255, 255, 255, 0.2)",
          }}
        />

        <Typography variant="h3" color="white" fontWeight="bold" gutterBottom>
          Software Programming Specialization
        </Typography>

        <Typography
          variant={isMobile ? "h6" : "h4"}
          maxWidth={900}
          lineHeight={1.3}
          color="white"
          zIndex={999}
          sx={{
            fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "14px" },
            textAlign: "left",
          }}
        >
          The Programming specialization at our school is one of the modern and
          essential fields that keep up with the developments of the digital
          age. Students learn the latest programming languages and software
          development techniques, preparing them to become skilled
          problem-solvers in the tech industry.
        </Typography>
      </Stack>

      <Stack
        sx={{
          width: "100vw",
          justifyContent: "start",
          alignItems: "center",
          p: { xs: 2, md: 10 }, // Responsive padding
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "row",
            sm: "column",
          }, // Column on mobile, row on desktop
          mt: { xs: 10, md: 30 }, // Responsive margin-top
          gap: { xs: 3, md: 0, lg: 10 }, // Gap between elements on mobile
        }}
      >
        <Stack
          sx={{
            alignItems: { xs: "center", md: "flex-start" }, // Center on mobile, left-align on desktop
            justifyContent: "center",
            gap: 3,
            width: { xs: "100%", md: "50%" }, // Full width on mobile, half on desktop
            ml: { lg: 10, md: 0, sm: 0 },
          }}
        >
          <RevealLeftARight duration={0.3} isOnce={true} direction={true}>
            <Typography
              variant={isMobile ? "h6" : "h3"}
              sx={{
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Rubik",
                fontSize: { xs: "20px", md: "48px", sm: "23px", lg: "48px" }, // Smaller font on mobile
                textAlign: { xs: "center", lg: "left" }, // Center text on mobile
                width: "100%",
                ml: { lg: 1 },
                textWrap: { lg: "nowrap" },
              }}
            >
              <Box
                component="span"
                sx={{ color: "#DA1B1B", fontWeight: "bold", display: "block" }}
              >
                Why
              </Box>
              El Sewedy International School ?
            </Typography>
          </RevealLeftARight>

          <Stack
            component="ul"
            sx={{
              fontWeight: "200",
              color: "#1a1a1a",
              fontFamily: "Rubik",
              width: { xs: "100%", md: "800px", lg: "900px" },
              listStyleType: "none", // Remove default bullet points
              gap: 2,
              pl: 0,
              ml: { lg: 2, sm: 2, xs: 1, md: -22 },
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {[
              "Competitive education with local and international job opportunities.",
              "Experienced teachers and experts from El Sewedy Electrometer.",
              "Hands-on training at partner companies.",
              "English-language courses in a tech-driven environment.",
              "Small class sizes (max 25 students).",
              "Each student receives a laptop and school uniform.",
              "Various sports, arts, music, and drama activities.",
              "Annual Capstone project to apply research skills.",
              "Opportunities to join tech colleges and institutes.",
              "Career guidance through the Career Development Center (CDC).",
              "Help with applying for competitions and representing the school locally and internationally.",
            ].map((text, index) => (
              <RevealLeftARight
                key={index}
                duration={0.3}
                isOnce={true}
                direction={true}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={2}
                  sx={{
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "black", // Custom bullet point
                    }}
                  />
                  <Typography
                    variant="h3"
                    component="li"
                    fontWeight={200}
                    sx={{
                      fontSize: {
                        xs: "16px",
                        md: "24px",
                        sm: "14px",
                        lg: "20px",
                      },
                      textWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              </RevealLeftARight>
            ))}
          </Stack>
        </Stack>

        <RevealLeftARight duration={0.3} isOnce={true} direction={false}>
          <Box
            src={LandPic}
            component={"img"}
            sx={{
              width: { xs: "90%", md: "500px", lg: "400px" }, // Responsive image width
              height: "auto",
              borderRadius: "40px",
              boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
              transition: "all 0.4s",
              ml: { xs: 2.2, md: 2, sm: 2 }, // Margin-left only on desktop
              mt: { xs: 4, md: 5 }, // Margin-top on mobile
            }}
          />
        </RevealLeftARight>
      </Stack>

      <Reveal duration={0.3} isOnce={false}>
        <Stack
          sx={{
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            mt: { lg: 20, sm: 10, xs: 10, md: 20 },
          }}
        >
          <Box
            component={"Stack"}
            sx={{
              width: { xs: "70%", sm: "80%", md: "90%", lg: "1100px" }, // Responsive width
              height: { xs: "auto", sm: "auto", md: "160px" }, // Responsive height
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${Redfram})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "40px",
              mt: 20,
              p: 4,
              gap: 10, // Space between grid items
              textAlign: "center",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
              display: "flex", // Ensure flexbox is applied
            }}
          >
            <Box>
              <HoverCounter count={50} isPlus={true} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "Rubik",
                  mt: 3,
                }}
              >
                Capstone projects every year
              </Typography>
            </Box>
            <Box>
              <HoverCounter count={250} isPlus={true} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "Rubik",
                  mt: 3,
                }}
              >
                Students
              </Typography>
            </Box>
            <Box>
              <HoverCounter count={3} isPlus={null} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "Rubik",
                  mt: 3,
                }}
              >
                Accredited Certificates
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Reveal>

      <Stack
        sx={{
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          height: "900px",
          backgroundColor: "transparent",
          p: 3,
          mt: 40,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            color: "#DA1B1B",
            fontWeight: "500",
            background: "linear-gradient(45deg, #ff8e53, #fe6b8b)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            mt: { lg: 0, sm: 30, md: 20 },
          }}
        >
          Special Moments!!
        </Typography>
        <Divider
          sx={{
            width: { lg: "400px", sm: "200px" },
            borderBottomWidth: 2,
            borderColor: "white",
            my: 4,
            transition: "all 0.4s",
            "&:hover": {
              width: "600px",
            },
          }}
        />
        <Stack
          sx={{
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { lg: "row", sm: "column" },
          }}
        >
          <Stack
            sx={{ gap: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "400",
              }}
            >
              Jill Biden
            </Typography>
            <Box
              ref={ref}
              component={"img"}
              src={sp1}
              sx={{
                width: isMobile ? "300px" : "510px",
                borderRadius: "20px",
              }}
            />
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{
                fontWeight: "300",
                color: inView ? "White" : "#1C1D1F",
                fontFamily: "Rubik",
                width: { lg: "600px", sm: "400px", xs: "330px" },
                textAlign: { lg: "center", xs: "center", sm: "center" },
              }}
            >
              During her visit to Egypt, U.S. First Lady Dr. Jill Biden toured
              the Sewedy International Applied Technology and Software School.
              She explored student projects, admired their skills, and
              emphasized youth empowerment and U.S.-Egypt partnerships. The
              school’s curriculum aligns with industry standards, and her visit
              concluded with commemorative photos with students
            </Typography>
          </Stack>
          <Stack
            sx={{ gap: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                color: inView ? "White" : "#1C1D1F",
                fontWeight: "400",
              }}
            >
              Elsewedy ICPC
            </Typography>
            <Box
              component={"img"}
              src={sp2}
              sx={{
                width: isMobile ? "300px" : "510px",
                borderRadius: "20px",
              }}
            />
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                fontWeight: "300",
                color: inView ? "White" : "#1C1D1F",
                fontFamily: "Rubik",
                width: { lg: "600px", sm: "400px", xs: "330px" },
                textAlign: { lg: "center", xs: "center", sm: "center" },
              }}
            >
              the launch of the first edition of the Elsewedy CPC
              Problem-Solving Competition, attended by Coach Mohamed Abdel
              Wahab, one of the top 50 programmers in the world. This marks a
              proud moment for our school as we foster innovation and excellence
              in programming. Stay tuned for more updates on this
              exciting competition!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography
        variant="h1"
        sx={{
          color: "#1C1D1F",
          fontWeight: "600",
          mt: { lg: 40, sm: 50, xs: 50 },
        }}
      >
        Our Partners
      </Typography>
      <Stack
        sx={{
          mb: 20,
        }}
      >
        <SliderPartners />
      </Stack>
      <Stack
        sx={{
          mb: 15,
        }}
      >
        <CostumButton
          Text={"Our Courses"}
          Icon={ArrowForwardIosIcon}
          width={"170px"}
          path={"/courses"}
        />
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Landing;
