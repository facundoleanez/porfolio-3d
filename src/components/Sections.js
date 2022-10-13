import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useStore } from "../store";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";

export const Sections = () => {
  const { screen } = useStore((state) => state.ui);
  return (
    <>
      {screen !== "explore" && (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {screen === "about" && <About />}
          {screen === "projects" && <Projects />}
          {screen === "contact" && <Contact />}
        </Box>
      )}
    </>
  );
};
