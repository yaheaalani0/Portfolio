import React from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Forum from "../../images/forum1.png";
import FilmVisarna from "../../images/filmvisarna.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Forum Application",
      description:
        "A web app for discussion threads using React (frontend), Express.js (backend), and SQLite (database). Users can create, read, and reply to posts. Made as an assignment.",
      img: Forum,
    },
    {
      id: 2,
      title: "Film Visarna",
      description:
        "Filmvisarna is a full-stack film booking application which provides an intuitive and modern user experience for browsing movies, viewing detailed information, and booking tickets with seat selection. The frontend is built with React and leverages a dark theme with global styling for a sleek, cinematic look, while the backend handles movie data, booking transactions, and user authentication.",
      img: FilmVisarna,
    },
  ];

  const cardHoverSx = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease-in-out",
    ":hover": { transform: "scale(1.05)" },
  };

  return (
    <Container id="projects" sx={{ py: 8 }}>
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
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6}>
            {project.link ? (
              <CardActionArea
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card sx={cardHoverSx}>
                  {project.img && (
                    <CardMedia
                      component="img"
                      image={project.img}
                      alt={project.title}
                      sx={{ height: 200 }}
                    />
                  )}
                  <CardContent
                    sx={{
                      textAlign: project.title === "👀" ? "center" : "left",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant={project.title === "👀" ? "h2" : "h5"}
                      component="h3"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant={project.title === "👀" ? "h6" : "body2"}
                      color="text.secondary"
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            ) : (
              <Card sx={cardHoverSx}>
                {project.img && (
                  <CardMedia
                    component="img"
                    image={project.img}
                    alt={project.title}
                    sx={{ height: 200 }}
                  />
                )}
                <CardContent
                  sx={{
                    textAlign: project.title === "👀" ? "center" : "left",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant={project.title === "👀" ? "h2" : "h5"}
                    component="h3"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant={project.title === "👀" ? "h6" : "body2"}
                    color="text.secondary"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
