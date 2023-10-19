import { Box } from '@mui/material';
import React from 'react';
import { useStore } from '../store';
import { About } from './about';
import { Projects } from './projects';
import { Contact } from './contact';

export const Sections = () => {
  const { screen } = useStore((state) => state.ui);
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {screen === 'about' && <About />}
      {screen === 'projects' && <Projects />}
      {screen === 'contact' && <Contact />}
    </Box>
  );
};
