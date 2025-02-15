import React, { useState } from "react";
import sewedy from "../assets/sewedy.png";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Footer from "../Components/Footer";
import { useSnackbar } from "./SnackbarProvider";

const ProjectForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { showSnackbar } = useSnackbar();

      const [selectedImage, setSelectedImage] = useState(null);

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setValue("attachment", file);
          setSelectedImage(URL.createObjectURL(file)); // Generate a preview
        }
      };


  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const skillsList = [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "UI/UX Design",
    "Data Science",
  ];

  const onSubmit = (data) => {
    showSnackbar("fesfesfes","success");
  };

  return (
    <Box>
      {/* Banner Section */}
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
        <Box sx={{ position: "relative", zIndex: 1, mt: 30 }}>
          <Typography
            variant={isMobile ? "h6" : "h1"}
            fontWeight="500"
            fontSize={isMobile ? "30px" : "60px"}
            color="#1a1a1a"
          >
            <span
              style={{
                display: "block",
                fontSize:"50px",
              }}
            >
              Work with
            </span>
            <span
              style={{
                color: "#DA1B1B",
              }}
            >
              El Sewedy IATS{" "}
            </span>
            students
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "100vw",
          margin: "auto",
          padding: isMobile ? "20px" : "40px",
        }}
      >
        {/* Stack for first two elements (left-aligned) */}
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: isMobile ? "10px" : "15px", // Gap for spacing
          }}
        >
          {/* Red Heading */}
          <Typography
            sx={{
              color: "#EF3131",
              fontSize: isMobile ? "20px" : "30px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Looking for help with your project?
          </Typography>

          {/* Main Text with Links */}
          <Typography
            sx={{
              fontSize: isMobile ? "14px" : "25px",
              color: "#000",
              lineHeight: "1.6",
              width: { lg: "50%", md: "50%" },
              textAlign: "center",
            }}
          >
            <b>El Sewedy School</b> offers you the opportunity to collaborate
            with our students on various projects. Whether you need{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              software development, web development, mobile app development,
              artificial intelligence, UI/UX design, or any other IT-related
              field.
            </Box>
          </Typography>
        </Stack>

        {/* Bold Ending Text (centered) */}
        <Typography
          sx={{
            fontSize: isMobile ? "14px" : "25px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: isMobile ? "20px" : "30px", // Space between sections,
            mb: 2,
            mt: 10,
          }}
        >
          Fill out the form below, and we will help you find the right student
          for your project!
        </Typography>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          maxWidth: { xs: "90%", sm: "600px" }, // Responsive width
          margin: "auto",
          padding: { xs: "20px", sm: "30px" },
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          mb: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "14px" : "24px",
            color: "#000",
            lineHeight: "1.6",
            textAlign: "center",
            p: 3,
            fontWeight: "bold",
          }}
        >
          Requirments Fields
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name *"
                fullWidth
                {...register("firstName", {
                  required: "First name is required",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name *"
                fullWidth
                {...register("lastName", { required: "Last name is required" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Company Name"
                fullWidth
                {...register("companyName")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email Address *"
                fullWidth
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Mobile Number *"
                fullWidth
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid mobile number",
                  },
                })}
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Field of Work *"
                fullWidth
                {...register("fieldOfWork", {
                  required: "Field of work is required",
                })}
                error={!!errors.fieldOfWork}
                helperText={errors.fieldOfWork?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.skills}>
                <InputLabel>Required Skills *</InputLabel>
                <Controller
                  name="skills"
                  control={control}
                  rules={{ required: "Please select at least one skill" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      multiple
                      value={field.value || []}
                      onChange={(event) => field.onChange(event.target.value)}
                    >
                      {skillsList.map((skill, index) => (
                        <MenuItem key={index} value={skill}>
                          {skill}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <Typography color="error" variant="caption">
                  {errors.skills?.message}
                </Typography>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Project Description *"
                fullWidth
                multiline
                rows={3}
                {...register("description", {
                  required: "Project description is required",
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Grid>

            {/* File Upload */}
            <Grid item xs={12}>
              <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <Button
                  variant="outlined"
                  component="span"
                  fullWidth
                  sx={{ textTransform: "none" }}
                >
                  Attach a File 📎
                </Button>
              </label>
              {/* Display Image Preview */}
              {selectedImage && (
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <img
                    src={selectedImage}
                    alt="Preview"
                    style={{
                      maxWidth: "300px",
                      height: "100px",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Additional Message"
                fullWidth
                multiline
                rows={3}
                {...register("message")}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="body2"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                *Once you submit your request, our program manager will review
                it and contact you shortly.
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  background: "#D32F2F",
                  color: "#fff",
                  "&:hover": { background: "#B71C1C" },
                  fontSize:"15px"
                }}
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <div
        style={{
          display: "flex",
        }}
      >
        <Footer />
      </div>
    </Box>
  );
};

const Work = () => {
  return <ProjectForm />;
};

export default Work;
