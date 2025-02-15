import {
  Stack,
  Typography,
  Link,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile devices
  const isHighZoom = useMediaQuery("(max-width: 900px)"); // Approximation for 175% zoom

  return (
    <Stack
      sx={{
        width: "100vw",
        minHeight: { lg: "330px", sm: "auto", xs: "auto", md: "auto" },
        backgroundColor: "#1C1D1F",
        color: "white",
        padding: "60px 20px",
        gap: isHighZoom ? "20px" : "40px", // Smaller gap at high zoom
        alignItems: "center",
        fontFamily: "Rubik, sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          maxWidth: "1000px",
          fontSize: isHighZoom ? "11px" : { xs: "13px", md: "32px" }, // Adjusted text size
          mb: 2,
        }}
      >
        <span style={{ color: "#C3103A" }}>El Sewedy </span> International
        School for Applied Technology and Software is the best choice for you.
      </Typography>

      {/* Content Sections */}
      <Stack
        flexDirection={isMobile ? "column" : "row"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          gap: isHighZoom ? 5 : isMobile ? 10 : 30, // Adjusted gap
        }}
      >
        {/* Social Media Section (Fixed Alignment) */}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: isHighZoom ? 1 : 2, // Reduced gap
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: isHighZoom ? "16px" : { xs: "20px", md: "24px" },
            }}
          >
            Social Media
          </Typography>
          <Link
            href="https://www.facebook.com/profile.php?id=100083837165938"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Facebook
          </Link>
          <Link
            href=""
            color="inherit"
            underline="hover"
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/company/el-sewedy-iats/posts/?feedView=all"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
              display: "block",
            }}
          >
            LinkedIn
          </Link>
        </Stack>

        {/* Location Section */}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: isHighZoom ? 1 : 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: isHighZoom ? "16px" : { xs: "20px", md: "24px" },
            }}
          >
            Location
          </Typography>
          <Typography
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
            }}
          >
            6th of October, Giza, Egypt.
          </Typography>
          <Typography
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
            }}
          >
            Egypt (A.R.E).
          </Typography>
        </Stack>

        {/* Contact Section */}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: isHighZoom ? 1 : 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: isHighZoom ? "16px" : { xs: "20px", md: "24px" },
            }}
          >
            Contact
          </Typography>
          <Link
            href="mailto:elsewedy.iats@gmail.com"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
            }}
          >
            elsewedy.iats@gmail.com
          </Link>
          <Link
            href="tel:+201289007669"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: isHighZoom ? "12px" : { xs: "16px", md: "18px" },
              textAlign: "center",
            }}
          >
            +20 1289007669
          </Link>
        </Stack>
      </Stack>

      {/* Footer Copyright */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "20px",
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: isHighZoom ? "10px" : { xs: "14px", md: "16px" },
          }}
        >
          © {new Date().getFullYear()} El Sewedy International School. All
          rights reserved.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
