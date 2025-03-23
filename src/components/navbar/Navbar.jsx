import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Update navbar appearance based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? (darkMode ? "#111" : "#fff") : "transparent",
        boxShadow: scrolled ? "0px 2px 10px rgba(0,0,0,0.3)" : "none",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Brand Logo */}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Yahea Alani
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            onClick={() => scrollToSection("skills")}
            sx={{ color: scrolled ? "text.primary" : "white" }}
          >
            Skills
          </Button>
          <Button
            onClick={() => scrollToSection("education")}
            sx={{ color: scrolled ? "text.primary" : "white" }}
          >
            Education
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            sx={{ color: scrolled ? "text.primary" : "white" }}
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            sx={{ color: scrolled ? "text.primary" : "white" }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile Navigation */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton
            onClick={toggleMenu}
            sx={{ color: scrolled ? "text.primary" : "white" }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            background: darkMode ? "#111" : "#fff",
            color: darkMode ? "#fff" : "#000",
            textAlign: "center",
            px: 2,
            pb: 2,
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => scrollToSection("skills")}
                sx={{ justifyContent: "center" }}
              >
                <ListItemText 
                  primary="Skills" 
                  primaryTypographyProps={{ align: "center" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => scrollToSection("education")}
                sx={{ justifyContent: "center" }}
              >
                <ListItemText 
                  primary="Education" 
                  primaryTypographyProps={{ align: "center" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => scrollToSection("projects")}
                sx={{ justifyContent: "center" }}
              >
                <ListItemText 
                  primary="Projects" 
                  primaryTypographyProps={{ align: "center" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => scrollToSection("contact")}
                sx={{ justifyContent: "center" }}
              >
                <ListItemText 
                  primary="Contact" 
                  primaryTypographyProps={{ align: "center" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;
