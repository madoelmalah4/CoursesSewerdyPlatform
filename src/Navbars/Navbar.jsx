import {
  Box,
  Stack,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Reveal } from "../Components/Reveal";
import { useNavigate } from "react-router-dom";
import SewedyLogo from "../assets/sewedylogo.png";
import CostumButton from "../Components/CostumButton";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Check if the screen size is small (mobile/tablet)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "90px",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: isSmallScreen ? "center" : "space-between",
        alignItems: "center",
        backgroundColor: "trnasparent",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        position: "fixed",
        padding: isSmallScreen ? "10px 20px" : "0 40px",
      }}
    >
      {/* Logo */}
      <Box
        component={"img"}
        src={SewedyLogo}
        sx={{
          cursor: "pointer",
          width: isSmallScreen ? "150px" : "200px",
          mb: isSmallScreen ? 1 : 3,
        }}
        onClick={() => navigate("/")}
      />

      {/* Navigation Links */}
      <Stack
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isSmallScreen ? "15px" : "30px",
          mt: isSmallScreen ? 2 : 0,
          mr: 6,
        }}
      >
        <Reveal duration={0.8}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "300",
              fontSize: isSmallScreen ? "16px" : "20px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#EF3131",
                transition: "width 0.3s ease-in-out",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Apply Now!
          </Typography>
        </Reveal>
        <Reveal duration={1}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "300",
              fontSize: isSmallScreen ? "16px" : "20px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#EF3131",
                transition: "width 0.3s ease-in-out",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            onClick={() => navigate("/courses")}
          >
            Our Courses
          </Typography>
        </Reveal>
        <Reveal duration={1.2}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "300",
              fontSize: isSmallScreen ? "16px" : "20px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#EF3131",
                transition: "width 0.3s ease-in-out",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            onClick={() => navigate("/about")}
          >
            About Us
          </Typography>
        </Reveal>

        <Reveal duration={1.2}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "300",
              fontSize: isSmallScreen ? "16px" : "20px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#EF3131",
                transition: "width 0.3s ease-in-out",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
            onClick={() => navigate("/Work")}
          >
            Work with us
          </Typography>
        </Reveal>

      </Stack>

      {/* Login Button */}
      <Stack
        sx={{
          mt: isSmallScreen ? 2 : 0,
          alignItems: "center",
          mr: 10,
        }}
      >
        <CostumButton
          width={isSmallScreen ? "100px" : "120px"}
          height={isSmallScreen ? "40px" : "44px"}
          Text={"Login"}
          border={"10px"}
          path={"/login"}
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
