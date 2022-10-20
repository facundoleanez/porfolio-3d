import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useStore } from "../store";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DialButton from "./DialButton";

export const BotomBar = () => {
  const setUi = useStore((state) => state.setUi);
  const { nav } = useStore((state) => state.ui);

  const handleClick = (e) => {
    setUi(e.target.name);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        left: 0,
        bottom: 0,
        zIndex: 2,
      }}
    >
      <DialButton />
    </Box>
  );
};
