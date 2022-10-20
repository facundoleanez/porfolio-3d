import { Box, Typography } from "@mui/material";
import React from "react";
import { TypeWriter } from "../TypeWriter";
export const Playnder = () => {
  return (
    <Box>
      <Typography>Project name: Playnder</Typography>
      <Typography variant="caption">
        Project name: <TypeWriter text="Playnder" variant={"caption"} />
      </Typography>
      <Typography variant="caption">
        Project name: <TypeWriter text="Playnder" variant={"caption"} />
      </Typography>
      <Typography variant="caption">
        Project name: <TypeWriter text="Playnder" variant={"caption"} />
      </Typography>
      <Typography variant="caption">
        Project name: <TypeWriter text="Playnder" variant={"caption"} />
      </Typography>
    </Box>
  );
};
