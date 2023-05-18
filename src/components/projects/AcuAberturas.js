import { Box, Button, Card, Link, Modal, Typography } from '@mui/material';
import React from 'react';

export const AcuAberturas = () => {
  return (
    <Typography variant='caption'>
      Corporate web page for a joinery company
      <br />
      Site: -
      <Link href='https://acuaberturas.vercel.app/'>
        acuaberturas.vercel.app
      </Link>
      <br />
      Github: -
      <Link href='https://github.com/facundoleanez/acuaberturas'>
        /facundoleanez/acuaberturas
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
            maxHeight: '70vh',
            maxWidth: 600,
            width: '100%',
            backgroundColor: 'black',
            color: 'primary.main',
            p: 2,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            border: '1px solid',
            borderColor: 'primary.main',
            overflow: 'auto',
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Corporate page for a joinery company
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <Typography variant='caption'>
              <ul>
                <li>
                  Description:
                  <ul>
                    I created a website for a windows and doors company. The
                    website needed to be functional, visually appealing, and
                    showcase a large catalog of products.
                  </ul>
                </li>
                <li>Challenge:</li>
                <ul>
                  <li>
                    Limited technical knowledge: This was my first web
                    development project, and I had to learn and acquire new
                    technical skills in JavaScript, and responsive design to
                    create an effective website.
                  </li>
                  <li>
                    Understanding the client's needs: It was important to
                    understand the client's needs and expectations to ensure
                    that the website met their goals. This required clear and
                    constant communication with the client.
                  </li>
                  <li>
                    Presenting a large product catalog: The company had a large
                    catalog of products, so I had to find the best way to
                    present them on the website in a clear and attractive
                    manner.
                  </li>
                </ul>
                <li>Achievements:</li>
                <ul>
                  <li>
                    Functional and visually appealing website: Despite my
                    limited technical knowledge, I was able to create a website
                    that was effective, visually appealing, and met the client's
                    needs.
                  </li>
                  <li>
                    Effective use of tools: I used Bootstrap and jQuery to
                    improve the website's design and make it responsive,
                    resulting in a better user experience.
                  </li>
                  <li>
                    Learning and developing new skills: This project allowed me
                    to acquire new technical skills and tools that I have since
                    used on other projects.
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
