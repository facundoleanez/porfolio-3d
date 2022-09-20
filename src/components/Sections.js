import { Box } from '@mui/material'
import React from 'react'
import { useStore } from '../store'
import { About } from './sections/About'

export const Sections = () => {
  const { nav } = useStore((state) => state.ui)
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
      {nav === 0 && <About />}
      {nav === 1 && <h1>projects</h1>}
      {nav === 2 && <h1>contact</h1>}
    </Box>
  )
}
