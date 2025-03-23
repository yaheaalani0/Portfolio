import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "React.js",
      level: 85,
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "HTML",
      level: 90,
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      level: 85,
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      level: 75,
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
    {
      name: "Python",
      level: 30,
      icon: <FaPython />,
      color: "#3776AB",
    },
  ];

  return (
    <Container id="skills" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          color: "#3498db",
          mb: 4,
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Skill Info */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box sx={{ color: skill.color, fontSize: "2rem", mr: 2 }}>
                {skill.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
