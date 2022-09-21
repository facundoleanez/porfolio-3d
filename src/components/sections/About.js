import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'
import { TypeWriter } from '../TypeWriter'

export const About = () => {
  return (
    <Card
      sx={{
        opacity: 0.5,
        maxWidth: 600,
      }}
    >
      <Box sx={{ m: 3, border: '1px solid', borderColor: 'primary.main' }}>
        <CardHeader
          title={<TypeWriter text={'Name: Facundo Leanez'} />}
          subheader={<TypeWriter text={'Age: 29'} />}
        />
        <CardContent>
          <TypeWriter text={'Titile: Developer'} />
        </CardContent>
        <CardContent>
          <TypeWriter
            text={
              'Description: Pationate about front end and grahics. Enthusiastic and motivated with with high attention to detail'
            }
          />
        </CardContent>
        <CardContent>
          <TypeWriter text={'Hobbie: 3d art and video game desing'} />
        </CardContent>
        <CardContent>
          <TypeWriter text={'Welcome to my porfolio'} />
        </CardContent>
      </Box>
    </Card>
  )
}
