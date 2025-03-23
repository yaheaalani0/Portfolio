import React from "react";
import { Container, Box, Typography } from "@mui/material";
import myPhoto from "../../images/image5.jpeg";

const AboutMe = () => {
  const headerText =
    "Hi, I'm Yahea! A passionate software developer focused on creating interactive and responsive web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.";
  const bioText = `I'm studying at Jensen 
    Yrkeshögskola in Malmö. At 24 years old, I've been diving into the world 
    of web development with a focus on creating interactive and user-friendly 
    websites. I have a strong foundation in React, JavaScript, HTML, and CSS, 
    which I've been using to build dynamic, responsive web applications. In 
    addition, I'm continuously expanding my skills by exploring new technologies 
    to create intuitive, visually appealing, and highly functional user 
    experiences. I thrive in environments where I can challenge myself and grow 
    while contributing to meaningful projects. Feel free to take a look at my 
    work and reach out if you'd like to collaborate!`;

  return (
    <Container id="about-me" sx={{ py: 8 }}>
      {/* Profile Image Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            border: "5px solid #ccc",
            borderRadius: "50%",
            p: 1,
            width: "220px",
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={myPhoto}
            alt="Yahea Alani"
            loading="lazy"
            style={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center 30%", 
              boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
            }}
          />
        </Box>
      </Box>

      {/* Combined Text Box */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          p: 3,
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          backgroundColor: "background.paper",
          color: "text.primary",
        }}
      >
        <Typography variant="h4" sx={{ fontSize: "1.1rem", mb: 2 }}>
          {headerText}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: "1.1rem" }}>
          {bioText}
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe;