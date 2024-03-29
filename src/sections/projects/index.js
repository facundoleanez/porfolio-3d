import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import acuaberturas from '../../images/acuaberturas.jpg';
import latierra from '../../images/latierra.jpg';
import { AcuAberturas } from '../../components/projects/AcuAberturas';
import { LaTierra } from '../../components/projects/LaTierra';

export const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Card
      sx={{
        opacity: 0.8,
        maxWidth: 600,
      }}
    >
      <Box sx={{ m: 3, border: '1px solid', borderColor: 'primary.main' }}>
        {/* <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            Matchign App
          </AccordionSummary>
          <AccordionDetails>
            <Playnder />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
          >
            Expense Tracker
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        {/* -------------------------------------------- */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3bh-content'
            id='panel3bh-header'
          >
            Interactive e-book
          </AccordionSummary>
          <AccordionDetails>
            <Link target='_blank' href='https://latierradeyhari.vercel.app/'>
              <CardMedia component='img' image={latierra} alt='latierra' />
            </Link>
            <LaTierra />
          </AccordionDetails>
        </Accordion>
        {/* -------------------------------------------- */}
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel4bh-content'
            id='panel4bh-header'
          >
            Landing page
          </AccordionSummary>
          <AccordionDetails>
            <Link target='_blank' href='https://acuaberturas.vercel.app/'>
              <CardMedia
                component='img'
                // height='194'
                image={acuaberturas}
                alt='acuaberturas'
                sx={{ m: 0, p: 0, zIndex: 2 }}
              />
            </Link>
            <AcuAberturas />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Card>
  );
};
