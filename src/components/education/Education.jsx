import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Education = () => {
  const education = [
    {
      degree: "Front End Developer",
      school: "Jensen Education",
      location: "Malmö, Sweden",
      period: "2023 - Present",
      details: [
        "Focus on modern web development technologies",
        "Building responsive and interactive web applications",
        "Working with React, JavaScript, HTML, and CSS",
      ],
    },
    {
      degree: "Full Stack Developer",
      school: "Code Institute",
      location: "Remote",
      period: "6 months, 2023",
      details: [
        "Basics and fundamentals of web development",
        "Developing and deploying web applications",
        "HTML, CSS, JavaScript, Python, Django",
      ],
    },
    {
      degree: "Bygg och Anläggning",
      school: "Furulundsskolan",
      location: "Sölvesborg, Sweden",
      period: "2016 - 2019",
      details: ["Snickare"],
    },
  ];

  return (
    <Container id="education" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          background: "linear-gradient(120deg, #3498db, #2980b9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 4,
        }}
      >
        Education
      </Typography>
      <Grid container spacing={4}>
        {education.map((edu, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "1rem",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h5" component="h3" fontWeight={600}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.school} | {edu.location}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {edu.period}
                  </Typography>
                </Box>
                <List>
                  {edu.details.map((detail, idx) => (
                    <ListItem key={idx} disableGutters sx={{ py: 0 }}>
                      <ListItemText
                        primary={detail}
                        primaryTypographyProps={{ color: "text.secondary" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;