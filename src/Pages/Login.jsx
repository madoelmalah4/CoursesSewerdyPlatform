import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useLoginMutation } from "../Slices/AuthSlice/AuthInjection";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "./SnackbarProvider";

const Login = () => {
  const [formValues, setFormValues] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { showSnackbar } = useSnackbar();

  // Regex for name and password validation

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) {
      newErrors.name = "Name is required.";
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
    setFormValues((prev) => ({ ...prev, [name]: value.trim() }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input change
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await login({...formValues}).unwrap();
      if (res?.message === "Vaild") {
        showSnackbar("Login successful!", "success");
        navigate("/orders"); // Redirect to dashboard
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
      sx={{ minHeight: "100vh", backgroundColor: "#f4f4f9" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 4, fontWeight: "bold", color: "#1976d2" }}
          >
            Login
          </Typography>

          {/* Name Input */}
          <TextField
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={{ mb: 3 }}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            sx={{ mb: 4 }}
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
