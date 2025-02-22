import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  useTheme,
  Stack,
  Grid2,
  useMediaQuery,
  Divider,
} from "@mui/material";
import sewedy from "../assets/sewedy.png";
import { Reveal } from "../Components/Reveal";
import { RevealLeftARight } from "../Components/RevealLeftARight";
import qout from "../assets/q.png";
import emad from "../assets/emad.png";
import tele from "../assets/tele.png";
import arrow from "../assets/arrowp.png";
import { Email, Phone } from "@mui/icons-material";
import Footer from "../Components/Footer";

import AcheivmentsSlider from "../Components/AcheivmentsSlider";
import { useInView } from "framer-motion";


function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <div>
      {/* Banner with Blurred Background */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 400, md: 700 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          mb: 10,
        }}
      >
        {/* Blurred Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${sewedy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
            maskImage: "linear-gradient(to top, transparent, black)",
            WebkitMaskImage: "linear-gradient(to top, transparent, black)",
            zIndex: -1,
          }}
        />
        {/* Title */}
        <Box sx={{ position: "relative", zIndex: 1, mt: 30 }}>
          <Typography
            variant={isMobile ? "h6" : "h1"}
            fontWeight="500"
            fontSize={isMobile ? "30px" : "60px"}
            color="#1a1a1a"
          >
            About <span style={{ color: "#DA1B1B" }}>El Sewedy</span> IATS
          </Typography>
        </Box>
      </Box>

      {/* Our Story */}
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <Typography
          variant={isMobile ? "h2" : "h1"}
          fontWeight="bold"
          color="#DA1B1B"
          gutterBottom
        >
          Our Story
        </Typography>
        <Grid container spacing={6} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                color="#DA1B1B"
                fontWeight="bold"
                gutterBottom
                textAlign={"center"}
              >
                Foundation
              </Typography>
              <Typography variant="h6" maxWidth={800} lineHeight={1.5}>
                El Sewedy International School for Applied Technology and
                Software was founded to provide quality education in technology
                and software development.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                color="#DA1B1B"
                fontWeight="bold"
                gutterBottom
              >
                Growth and Development
              </Typography>
              <Typography variant="h6" maxWidth={800} lineHeight={1.5}>
                Over the years, the institution expanded its facilities and
                curriculum, attracting talented students and top educators.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Today Section */}
      <Container sx={{ mt: 8, textAlign: "center", mb: 15 }}>
        <Typography variant="h4" fontWeight="bold" color="#DA1B1B" gutterBottom>
          Today
        </Typography>
        <Typography variant="h6" lineHeight={1.6} maxWidth={500} mx="auto">
          El Sewedy IATS continues to prepare students for the ever-evolving
          tech industry. With cutting-edge facilities and dedicated faculty, we
          ensure that our students are ready to excel in their careers.
        </Typography>
      </Container>

      <Stack
        sx={{
          backgroundColor: "#1a1a1a",
          height: "100%",
          mb: 7,
          position: "relative",
          px: { xs: 2, md: 5 }, // Padding for better spacing
          p: 5,
          boxShadow: "4px 4px 15px rgba(8, 0, 0, 0.2)", // Adding slight glow effect
        }}
      >
        {/* Left Quote */}
        <Box
          component={"img"}
          src={qout}
          sx={{
            width: "300px",
            position: "absolute",
            top: 20,
            left: 0,
            opacity: 0.8, // Making it subtle like the design
          }}
        />

        {/* Right Quote */}
        <Box
          component={"img"}
          src={qout}
          sx={{
            width: "300px",
            position: "absolute",
            bottom: 20,
            right: 0,
            opacity: 0.8,
            rotate: "180deg",
          }}
        />

        {/* Main Content Grid */}
        <Grid2
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 5, md: 20 },
            pt: 5,
          }}
        >
          {/* Left Section - Text */}
          <Stack
            sx={{
              alignItems: "start",
              justifyContent: "center",
              zIndex: 999,
              maxWidth: "700px",
            }}
          >
            <RevealLeftARight direction="left" isOnce={true} duration={1}>
              <Typography
                variant="h5"
                lineHeight={2}
                color="white"
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "16px", md: "20px" },
                  width: "100%",
                  // fontFamily: "Serif",
                  fontWeight: "200",
                }}
              >
                Welcome to El Sewedy IATS School. The vision behind founding
                this school was to create an environment that fosters growth,
                critical thinking, and personal development. We are committed to
                providing a high-quality education that empowers every student
                to reach their full potential.
                <br />
                Thank you for your trust, and I look forward to seeing our
                students thrive.
              </Typography>
            </RevealLeftARight>
            <RevealLeftARight direction="left" isOnce={true} duration={1.3}>
              <Typography color="white" sx={{ mt: 5, fontSize: "25px" }}>
                Emad Zaki El Sewedy
              </Typography>
              <Typography
                fontWeight={"200"}
                sx={{
                  fontSize: "15px",
                  color: "white",
                }}
              >
                Founder of El Sewedy IATS
              </Typography>
            </RevealLeftARight>
          </Stack>

          {/* Right Section - Image */}
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
          >
            <RevealLeftARight direction="right" isOnce={true} duration={1}>
              <Box
                component="img"
                src={emad}
                sx={{
                  width: isMobile ? "300px" : "500px",
                  mt: { xs: 5, md: 0 },
                  borderTopLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  borderBottomLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  boxShadow: "4px 4px 15px rgba(255, 255, 255, 0.2)", // Adding slight glow effect
                }}
              />
            </RevealLeftARight>
          </Stack>
        </Grid2>
      </Stack>

      <Grid2
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 5, md: 5 },
          pt: 5,
          p: 4,
          mt: 20,
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#E60000",
            height: "140px",
            p: 4,
            width: "600px",
            alignItems: "left",
            justifyContent: "center",
            borderRadius: "15px",
            position: "relative",
            transition: "0.3s ease",
            "&:hover": {
              scale: 1.01,
            },
          }}
        >
          <Box
            component={"img"}
            src={tele}
            sx={{
              width: "160px",
              position: "absolute",
              bottom: 20,
              right: 0,
              opacity: 0.5,
              boxShadow: "4px 4px 15px rgba(255, 255, 255, 0.2)", // Adding slight glow effect
            }}
          />

          <Typography variant="h3" color="white" fontWeight="bold" gutterBottom>
            Vision
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            maxWidth={900}
            lineHeight={1.3}
            color="white"
            zIndex={999}
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            A leading beacon that inspires and prepares outstanding
            professionals who contribute to building the future of software
            development both locally and internationally.
          </Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#E60000",
            height: "140px",
            p: 4,
            width: "600px",
            alignItems: "left",
            justifyContent: "center",
            borderRadius: "15px",
            position: "relative",
            transition: "0.3s ease",
            "&:hover": {
              scale: 1.01,
            },
          }}
        >
          <Box
            component={"img"}
            src={arrow}
            sx={{
              width: "160px",
              position: "absolute",
              bottom: 2,
              right: 0,
              opacity: 0.5,
              rotate: "180deg",
              boxShadow: "4px 4px 15px rgba(255, 255, 255, 0.2)", // Adding slight glow effect
            }}
          />

          <Typography variant="h3" color="white" fontWeight="bold" gutterBottom>
            Mission
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            maxWidth={900}
            lineHeight={1.3}
            color="white"
            zIndex={999}
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            Preparing secondary school students to compete in the local and
            international job market in the field of software development,
            through modern international curricula and qualified educational
            staff, to graduate skilled professionals with strong values
          </Typography>
        </Stack>
      </Grid2>
        <AcheivmentsSlider  />

      <Box sx={{ px: { xs: 2, md: 10 }, py: 5, mt: 10 }}>
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
          How to Find Us
        </Typography>

        {/* Contact Details (Phone & Email in One Line) */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Grid
            item
            xs={10}
            md={15}
            display="flex"
            gap={2}
            justifyContent="center"
            sx={{
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {/* Phone */}
            <Box
              sx={{
                border: "2px solid red",
                borderRadius: "15px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <Phone sx={{ color: "red" }} />
              <Box>
                <Typography variant="body2" color="gray">
                  Call us on
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="red"
                  component="a"
                  href="tel:+201289007669"
                  sx={{ textDecoration: "none" }}
                >
                  +20 1289007669
                </Typography>
              </Box>
            </Box>

            {/* Email */}
            <Box
              sx={{
                border: "2px solid red",
                borderRadius: "15px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <Email sx={{ color: "red" }} />
              <Box>
                <Typography variant="body2" color="gray">
                  Email
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="red"
                  component="a"
                  href="mailto:elsewedy.iats@gmail.com"
                  sx={{ textDecoration: "none" }}
                >
                  elsewedy.iats@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Location (In One Line & Clickable) */}
        <Grid container spacing={3} mt={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                border: "2px solid red",
                borderRadius: "20px",
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="body2" color="gray">
                Where can you find us
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="red"
                mb={2}
                component="a"
                href="https://www.google.com/maps/place/El+Sewedy+IATS+School/@30.0322747,31.2000924,17z"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                New Zahraa October City, Sector D, Sidik El-Manshawi Street,
                next to Sector D Center and Talaat Harb School, Giza
                Governorate, Egypt.
              </Typography>

              {/* Fixed Google Maps Embed (No API Key Required) */}
              <Box
                component="iframe"
                sx={{
                  width: "100%",
                  height: { xs: "250px", md: "250px" },
                  borderRadius: "15px",
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4534997282824!2d30.9043402!3d29.8828274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855d052038511%3A0x7d8fe87a2f888771!2z2YXYsdmD2LIg2KfZhNmC2LfYqNipINin2YTYq9mK2YHYp9iqINmE2YTZhNmF2Lkg2KfZhNmF2K_ZitixINin2YTYqtit2LfYsdmK2YXYp9iq!5e0!3m2!1sen!2seg!4v1707675945654!5m2!1sen!2seg"
                allowFullScreen
                loading="lazy"
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <div
        style={{
          display: "flex",
          marginTop: "100px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default About;
