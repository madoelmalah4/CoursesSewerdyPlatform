import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginMutation } from "../Slices/AuthSlice/AuthInjection";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "./SnackbarProvider";
import sewedylogo from "../assets/sewedylogo.png";

const Login = () => {
  const [formValues, setFormValues] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { showSnackbar } = useSnackbar();
  const theme = useTheme();

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) {
      newErrors.name = "Username is required.";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Toggle password visibility
  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await login({ ...formValues }).unwrap();
      if (res?.message === "Valid") {
        showSnackbar("Login successful!", "success");
        navigate("/dashboard");
      } else {
        showSnackbar("Invalid credentials, please try again.", "error");
      }
    } catch (error) {
      showSnackbar(
        error?.data?.message || "Login failed. Please try again.",
        "error"
      );
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#f4f4f9",
        p: 2,
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Sewedy Logo */}
          <img
            src={sewedylogo}
            alt="Sewedy Logo"
            style={{ width: 150, marginBottom: 40 }}
          />
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: "bold", color: "1a1a1a" }}
          >
            Login
          </Typography>

          {/* Name Input */}
          <TextField
            label="Username"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={{ mb: 2 }}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              "Login"
            )}
          </Button>

          {/* Forgot Password */}
          {/* <Typography
            variant="body2"
            sx={{ mt: 2, color: "#1976d2", cursor: "pointer" }}
          >
            Forgot Password?
          </Typography> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
