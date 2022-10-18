import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Modal, Typography } from "@mui/material";
import { BsInfoCircleFill } from "react-icons/bs";
import { useStore } from "../store";

export const PlanetInfo = () => {
  const { screen } = useStore((state) => state.ui);
  console.log(screen);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isVisible = () => {
    switch (screen) {
      case "about":
        return true;
      case "projects":
        return true;
      case "contact":
        return true;
      default:
        return false;
    }
  };
  return (
    <>
      {isVisible() ? (
        <></>
      ) : (
        <>
          <Button
            sx={{
              display: "flex",
              position: "fixed",
              left: 20,
              bottom: 20,
              zIndex: 2,
            }}
            onClick={handleOpen}
          >
            <Typography>{screen}</Typography>
            <Box m={1}>
              <BsInfoCircleFill />
            </Box>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                color: "primary.main",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
