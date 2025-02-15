import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SewedyLogo from "../assets/sewedy2.png"; // Ensure this is a high-quality image
import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is below 'md' (mobile)
  const navigate = useNavigate();

  // Navigation items
  const navItems = [
    { text: "Home", path: "/" },
    { text: "Our Courses", path: "/courses" },
    { text: "About", path: "/about" },
    { text: "Work", path: "/Work" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <Stack
        sx={{
          width: "100vw",
          height: "60px",
          flexDirection: "row",
          alignItems: "center",
          position: "fixed",
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "0 16px",
          zIndex: 1000,
        }}
      >
        {/* Menu Icon (Visible only on mobile) */}
        {isMobile && (
          <IconButton
            onClick={() => setIsClicked(!isClicked)}
            sx={{
              padding: "8px",
              position: "absolute",
              left: "10px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: "32px", color: "black" }} />
          </IconButton>
        )}

        {/* Logo (Always Centered) */}
        <Box
          component="img"
          src={SewedyLogo}
          sx={{
            width: "140px",
            height: "auto",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)", // Centers the logo
            cursor: "pointer",
            zIndex: 1001,
            mb:2
          }}
          onClick={() => {
            navigate("/");
          }}
        />
      </Stack>

      {/* Side Navbar (Visible only on mobile) */}
      {isMobile && (
        <Box
          sx={{
            width: "250px",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: isClicked ? 0 : "-250px",
            backgroundColor: "white",
            boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
            transition: "left 0.3s ease-in-out",
            zIndex: 999,
            pt: 8,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              gap: 2.4,
              p: 2,
            }}
          >
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Typography
                key={item.text}
                variant="h5"
                sx={{
                  fontWeight: "300",
                  cursor: "pointer",
                  textAlign: "center",
                  "&:hover": {
                    color: theme.palette.primary.main, // Use theme primary color on hover
                  },
                }}
                onClick={() => {
                  navigate(item.path); // Navigate to the specified path
                  setIsClicked(false); // Close the side navbar
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Stack>
        </Box>
      )}

      {/* Overlay (Visible only on mobile) */}
      {isMobile && isClicked && (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
          }}
          onClick={() => setIsClicked(false)}
        />
      )}
    </>
  );
};

export default MobileNavbar;
