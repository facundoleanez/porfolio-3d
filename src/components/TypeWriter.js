import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

export const TypeWriter = ({ text, variant }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (text) {
        setCurrentText((value) => {
          const newValue = value + text.charAt(index.current);
          index.current += 1;
          return newValue;
        });
      }
    }, 30);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return (
    <Typography variant={variant} color='primary.main'>
      {currentText}
    </Typography>
  );
};
