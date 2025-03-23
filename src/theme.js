import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3498db", // futuristic blue
    },
    secondary: {
      main: "#2980b9",
    },
    background: {
      default: "#121212", // dark background for a modern look
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          objectFit: "cover",
        },
      },
    },
  },
});

export default theme;