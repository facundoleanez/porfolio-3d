import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export const TypeWriter = ({ text, variant }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

  //   useEffect(() => {
  //     index.current = 0
  //     setCurrentText('')
  //   }, [text])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return (
    <Typography variant={variant} color="primary.main">
      {currentText}
    </Typography>
  );
};
