import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <Card
      sx={{
        opacity: 0.5,
      }}
    >
      <Paper>
        <CardHeader title='Name: Facundo Leanez' subheader='Age: 29' />
        <CardContent>
          <Typography>Developer</Typography>
        </CardContent>
      </Paper>
    </Card>
  )
}
