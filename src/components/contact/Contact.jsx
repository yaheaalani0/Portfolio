import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Alert,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import cvIcon from "../../images/cv-icon.png";


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCollapsed(true);

    try {
      await emailjs.send(
        "service_x5k65um",
        "template_uqgy2wo",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "yahea.dev@gmail.com",
        },
        "PehluIY4UtYqJtI0E"
      );

      setStatus("Message sent successfully!");
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsCollapsed(false);
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
      setIsCollapsed(false);
      console.error("Failed to send email:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container
      id="contact"
      sx={{
        py: 8,
        backgroundColor: "background.paper",
        color: "text.primary",
        textAlign: "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        borderRadius: "16px",
        mx: "auto",
        maxWidth: "1200px",
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="h3" gutterBottom>
        <span>Let's Connect</span> 🤝
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <IconButton
          href="https://www.linkedin.com/in/yahea-alani-18b69b225/"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          sx={{ mx: 1 }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/yaheaalani0"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          sx={{ mx: 1 }}
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          href="/assets/Yahea_Alani_CV.pdf"
          download="Yahea_Alani_CV.pdf"
          color="primary"
          sx={{ mx: 1 }}
        >
          <Box
            component="img"
            src={cvIcon}  // Use the imported variable
            alt="CV"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          name="name"
          label="Your Name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          InputLabelProps={{ sx: { color: "text.secondary" } }}
          sx={{ input: { color: "text.primary" } }}
        />
        <TextField
          name="email"
          label="Your Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={{ sx: { color: "text.secondary" } }}
          sx={{ input: { color: "text.primary" } }}
        />
        <TextField
          name="message"
          label="What would you like to collaborate on?"
          variant="outlined"
          fullWidth
          required
          multiline
          minRows={4}
          value={formData.message}
          onChange={handleChange}
          InputLabelProps={{ sx: { color: "text.secondary" } }}
          sx={{ input: { color: "text.primary" } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isCollapsed}
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          {isCollapsed ? (isSuccess ? "✓" : "Sending...") : "Connect"}
        </Button>
        {status && (
          <Alert
            severity={status.includes("Failed") ? "error" : "success"}
            sx={{ mt: 2 }}
          >
            {status}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
