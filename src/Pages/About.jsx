import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  useTheme,
  Stack,
  useMediaQuery,
  Fade,
  Zoom,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your existing images
import sewedy from "../assets/sewedy.png";
import qout from "../assets/q.png";
import emad from "../assets/emad.png";
import tele from "../assets/tele.png";
import arrow from "../assets/arrowp.png";

// Components
import Footer from "../Components/Footer";
import AcheivmentsSlider from "../Components/AcheivmentsSlider";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section with Parallax Effect */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <MotionBox
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${sewedy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9)",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7))",
            },
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Fade in timeout={1000}>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              sx={{
                color: "white",
                textAlign: "center",
                fontWeight: 700,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                "& span": {
                  color: "#DA1B1B",
                },
              }}
            >
              About <span>El Sewedy</span> IATS
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionTypography
          variant="h2"
          component={motion.h2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          sx={{
            textAlign: "center",
            color: "#DA1B1B",
            fontWeight: 700,
            mb: 6,
          }}
        >
          Our Story
        </MotionTypography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              component={motion.div}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                p: 4,
                height: "70%",
                background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                borderRadius: 2,
                "&:hover": {
                  transform: "translateY(-5px)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Typography
                variant="h4"
                color="#DA1B1B"
                gutterBottom
                fontWeight="bold"
              >
                Foundation
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                El Sewedy International School for Applied Technology and
                Software was founded to provide quality education in technology
                and software development.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              component={motion.div}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                p: 4,
                height: "70%",
                background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                borderRadius: 2,
                "&:hover": {
                  transform: "translateY(-5px)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Typography
                variant="h4"
                color="#DA1B1B"
                gutterBottom
                fontWeight="bold"
              >
                Growth and Development
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Over the years, the institution expanded its facilities and
                curriculum, attracting talented students and top educators.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Founder's Quote Section */}
      <Box
        sx={{
          bgcolor: "#1a1a1a",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                sx={{ position: "relative" }} // Ensure motion box is relative
              >
                {/* Quote image as absolute */}
                <Box
                  component="img"
                  src={qout}
                  sx={{
                    position: "absolute",
                    top: -100,
                    left: -100,
                    width: "300px",
                    opacity: 0.3,
                    pointerEvents: "none", // Ensure it does not block interactions
                  }}
                />
                <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  Welcome to El Sewedy IATS School. The vision behind founding
                  this school was to create an environment that fosters growth,
                  critical thinking, and personal development. We are committed
                  to providing a high-quality education that empowers every
                  student to reach their full potential. Thank you for your
                  trust, and I look forward to seeing our students thrive.
                </Typography>
                <Typography variant="h6" color="#DA1B1B" gutterBottom>
                  Emad Zaki El Sewedy
                </Typography>
                <Typography variant="subtitle1" color="grey.500">
                  Founder of El Sewedy IATS
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src={emad}
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision & Mission Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #DA1B1B 0%, #ff4444 100%)",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={tele}
                sx={{
                  position: "absolute",
                  right: -20,
                  bottom: -20,
                  width: "150px",
                  opacity: 0.2,
                }}
              />
              <Typography
                variant="h3"
                color="white"
                gutterBottom
                fontWeight="bold"
              >
                Vision
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{ position: "relative", zIndex: 1 }}
              >
                A leading beacon that inspires and prepares outstanding
                professionals who contribute to building the future of software
                development both locally and internationally.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #DA1B1B 0%, #ff4444 100%)",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={arrow}
                sx={{
                  position: "absolute",
                  right: -20,
                  bottom: -20,
                  width: "150px",
                  opacity: 0.2,
                  transform: "rotate(180deg)",
                }}
              />
              <Typography
                variant="h3"
                color="white"
                gutterBottom
                fontWeight="bold"
              >
                Mission
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{ position: "relative", zIndex: 1 }}
              >
                Preparing secondary school students to compete in the local and
                international job market in the field of software development,
                through modern international curricula and qualified educational
                staff.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <AcheivmentsSlider />
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            color: "#DA1B1B",
          }}
        >
          How to Find Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Phone sx={{ color: "#DA1B1B", fontSize: 40 }} />
              <Box>
                <Typography variant="overline" color="text.secondary">
                  Call us on
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="tel:+201289007669"
                  sx={{
                    color: "#DA1B1B",
                    textDecoration: "none",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  +20 1289007669
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Email sx={{ color: "#DA1B1B", fontSize: 40 }} />
              <Box>
                <Typography variant="overline" color="text.secondary">
                  Email us at
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="mailto:elsewedy.iats@gmail.com"
                  sx={{
                    color: "#DA1B1B",
                    textDecoration: "none",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  elsewedy.iats@gmail.com
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mt: 4,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <LocationOn sx={{ color: "#DA1B1B", fontSize: 40 }} />
                <Typography variant="h6" color="#DA1B1B" fontWeight="bold">
                  Our Location
                </Typography>
              </Box>

              <Typography
                variant="body1"
                component="a"
                href="https://www.google.com/maps/place/El+Sewedy+IATS+School/@30.0322747,31.2000924,17z"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  display: "block",
                  mb: 3,
                  "&:hover": {
                    color: "#DA1B1B",
                  },
                }}
              >
                New Zahraa October City, Sector D, Sidik El-Manshawi Street,
                next to Sector D Center and Talaat Harb School, Giza
                Governorate, Egypt.
              </Typography>

              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4534997282824!2d30.9043402!3d29.8828274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855d052038511%3A0x7d8fe87a2f888771!2z2YXYsdmD2LIg2KfZhNmC2LfYqNipINin2YTYq9mK2YHYp9iqINmE2YTZhNmG2Lkg2KfZhNmF2K_ZitixINin2YTYqtit2LfYsdmK2YXYp9iq!5e0!3m2!1sen!2seg!4v1707675945654!5m2!1sen!2seg"
                sx={{
                  width: "100%",
                  height: "400px",
                  border: 0,
                  borderRadius: 2,
                }}
                allowFullScreen
                loading="lazy"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default About;
