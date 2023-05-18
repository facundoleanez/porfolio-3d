import {
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'
import React from 'react'
import { TypeWriter } from '../TypeWriter'

export const About = () => {
  return (
    <Card
      sx={{
        opacity: 0.8,
        maxWidth: 600,
      }}
    >
      <Box sx={{ m: 3, border: '1px solid', borderColor: 'primary.main' }}>
        <CardHeader
          title={<TypeWriter text={'Naame: Facundo Leanez'} />}
          subheader={<TypeWriter text={'Agge: 30'} />}
        />
        <CardContent>
          <TypeWriter text={'Tiitile: Front end and Mobile Developer'} />
        </CardContent>
        <CardContent>
          <TypeWriter
            text={
              'Deescription: Pationate about front end and grahics. Enthusiastic and motivated with with high attention to detail'
            }
          />
        </CardContent>
        <CardContent>
          <TypeWriter text={'Hoobbie: 3d art and video game desing'} />
        </CardContent>
        <CardContent>
          <TypeWriter text={'Weelcome to my porfolio'} />
        </CardContent>
      </Box>
    </Card>
  )
}
