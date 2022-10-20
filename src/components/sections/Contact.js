import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { TypeWriter } from "../TypeWriter";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { useForm } from "../../hooks/useForm";
import emailjs from "emailjs-com";
export const Contact = () => {
  const [values, handleChangeValue, reset] = useForm({
    user_name: "",
    user_email: "",
    message: "",
  });
  const { user_name, user_email, message } = values;

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (user_name && user_email && message) {
      emailjs.sendForm(
        "service_bok4r4t",
        "template_j9yehcy",
        e.target,
        "user_kNqttFWtfqLvC8G4QTq4B"
      );
      reset();
      alert("Sent succesfully");
    }
  };

  return (
    <Card
      sx={{
        opacity: 0.5,
        maxWidth: 600,
      }}
    >
      <Box
        sx={{
          m: 3,
          border: "1px solid",
          borderColor: "primary.main",
          textAlign: "center",
        }}
      >
        <CardHeader
          sx={{ display: { xs: "none", sm: "block" } }}
          title={<TypeWriter text={"Seend me a message"} />}
        />
        <CardContent>
          <form
            onSubmit={handleSubmitMessage}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              value={user_name}
              onChange={handleChangeValue}
              name="user_name"
              id="outlined-basic"
              label={<TypeWriter text={"Naame"} />}
              variant="outlined"
              sx={{ my: { md: 1 } }}
            />
            <TextField
              value={user_email}
              onChange={handleChangeValue}
              name="user_email"
              id="outlined-basic"
              label={<TypeWriter text={"Eemail"} />}
              variant="outlined"
              sx={{ my: { md: 1 } }}
              type="email"
            />
            <TextField
              value={message}
              onChange={handleChangeValue}
              name="message"
              id="outlined-basic"
              multiline
              rows={5}
              label={<TypeWriter text={"Meessage"} />}
              variant="outlined"
              sx={{ my: { md: 1 } }}
            />
            <Tooltip title="This will send to my email adress">
              <Button sx={{ my: { md: 1 } }} variant="contained" type="submit">
                <Typography>send</Typography>
              </Button>
            </Tooltip>
          </form>
          <Box my={1} sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button href="https://www.linkedin.com/in/facundoleanez/">
              <AiOutlineLinkedin size={40} />
            </Button>
            <Button href="https://github.com/facundoleanez">
              <AiFillGithub size={40} />
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
