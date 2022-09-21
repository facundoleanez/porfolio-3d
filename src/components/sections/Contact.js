import { Box, Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import { TypeWriter } from '../TypeWriter'

export const Contact = () => {
  return (
    <Card
      sx={{
        opacity: 0.5,
        maxWidth: 600,
      }}
    >
      <Box sx={{ m: 3, border: '1px solid', borderColor: 'primary.main' }}>
        <CardHeader
          title={<TypeWriter text={'Contact'} />}
          //   subheader={<TypeWriter text={'Age: 29'} />}
        />
        <CardContent>
          {/* <TypeWriter text={'Titile: Developer'} /> */}
        </CardContent>
        <CardContent></CardContent>
        <CardContent>
          {/* <TypeWriter text={'Hobbie: 3d art and video game desing'} /> */}
        </CardContent>
        <CardContent>
          {/* <TypeWriter text={'Welcome to my porfolio'} /> */}
        </CardContent>
      </Box>
    </Card>
  )
}
