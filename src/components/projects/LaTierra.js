import {
  Box,
  Button,
  IconButton,
  Link,
  Modal,
  Typography,
} from '@mui/material';
import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export const LaTierra = () => {
  return (
    <Typography variant='caption'>
      Early learning interacive e-book
      <br />
      Site: -
      <Link target='_blank' href='https://latierradeyhari.vercel.app/'>
        latierradeyhari.vercel.app
      </Link>
      <br />
      Github: -
      <Link
        target='_blank'
        href='https://github.com/facundoleanez/latierradeyhari'
      >
        /facundoleanez/latierradeyhari
      </Link>
      <br />
      Info: -<ProjectInfo />
    </Typography>
  );
};

export const ProjectInfo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant='text' onClick={handleOpen}>
        Click for more info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            maxHeight: '70vh',
            maxWidth: 600,
            width: '100%',
            backgroundColor: 'black',
            color: 'primary.main',
            p: 3,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            overflow: 'auto',
          }}
        >
          <IconButton
            edge='end'
            color='inherit'
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '0%',
              right: '0%',
              marginRight: 1,
            }}
          >
            <IoMdCloseCircleOutline size={25} />
          </IconButton>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Interactive e-book for children
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <Typography variant='caption'>
              <ul>
                <li>
                  Description:
                  <ul>
                    I developed an interactive e-book project aimed at improving
                    children's learning experience. The project was built using
                    React and involved learning to utilize third-party libraries
                    to animate elements and implement page transitions.
                    Additionally, I incorporated sound effects to enhance user
                    interaction with the e-book.
                  </ul>
                </li>
                <li>Challenge:</li>
                <ul>
                  <li>
                    Learning and adapting to React and its ecosystem while
                    developing the project.
                  </li>
                  <li>
                    Mastering the integration of third-party libraries for
                    animation and sound management.
                  </li>
                  <li>
                    Ensuring compatibility and responsiveness across different
                    devices and screen sizes.
                  </li>
                </ul>
                <li>Achievements:</li>
                <ul>
                  <li>
                    Successfully created an engaging and interactive e-book for
                    children.
                  </li>
                  <li>
                    Implemented React and leveraged third-party libraries to
                    animate elements and enable smooth page transitions.
                  </li>
                  <li>
                    Integrated sound effects to enhance user engagement and
                    interactivity.
                  </li>
                  <li>
                    Designed user-friendly interfaces and intuitive navigation
                    for seamless user experience.
                  </li>
                </ul>
              </ul>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
