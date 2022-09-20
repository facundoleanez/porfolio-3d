import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useStore } from '../store'

export const TopBar = () => {
  const setUi = useStore((state) => state.setUi)
  const ui = useStore((state) => state.ui)

  const [value, setValue] = React.useState(0)
  useEffect(() => {
    console.log(ui.nav)
    setUi(value)
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          marginTop: 3,
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='About me' />
          <Tab label='Projects' />
          <Tab label='Contact' />
        </Tabs>
      </Box>
    </Box>
  )
}
