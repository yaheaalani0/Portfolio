import React from "react";
import { Box } from "@mui/material";

const HomeBackground = ({ darkMode }) => {
  // Helper function to generate random styles for particles
  const getParticleStyles = () => ({
    width: `${Math.random() * 20 + 5}px`,
    height: `${Math.random() * 20 + 5}px`,
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    animationDelay: `${Math.random() * 20}s`,
  });

  return (
    <Box
      sx={{
        position: "fixed",  
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, 
        overflow: "hidden",
        background: darkMode
          ? "linear-gradient(135deg, #000000, #333333)"
          : "linear-gradient(135deg, #ffffff, #dddddd)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Global keyframes for animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          @keyframes floatParticle {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-50px); opacity: 0.5; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

      {/* Gradient background layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: darkMode
            ? "linear-gradient(135deg, #000000, #333333)"
            : "linear-gradient(135deg, #ffffff, #dddddd)",
        }}
      />

      {/* Animated background shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {[...Array(4)].map((_, index) => (
          <Box
            key={`shape-${index}`}
            sx={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: darkMode ? "#555555" : "#cccccc",
              top: `${Math.random() * 80}vh`,
              left: `${Math.random() * 80}vw`,
              opacity: 0.4,
              animation: "float 6s ease-in-out infinite",
            }}
          />
        ))}
      </Box>

      {/* Floating particles */}
      {[...Array(20)].map((_, index) => (
        <Box
          key={`particle-${index}`}
          sx={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: darkMode ? "#888888" : "#444444",
            animation: "floatParticle 20s linear infinite",
            ...getParticleStyles(),
          }}
        />
      ))}

      {/*centered content box */}
      <Box
        sx={{
          bgcolor: darkMode ? "#222" : "#f7f7f7",
          p: 4,
          borderRadius: "16px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
      </Box>
    </Box>
  );
};

export default HomeBackground;