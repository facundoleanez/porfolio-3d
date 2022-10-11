import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { useStore } from "../store";
import { IoMdPlanet } from "react-icons/io";
const actions = [
  { icon: <IoMdPlanet />, name: "Sun" },
  { icon: <IoMdPlanet />, name: "Mercury" },
  { icon: <IoMdPlanet />, name: "Venus" },
  { icon: <IoMdPlanet />, name: "Earth" },
  { icon: <IoMdPlanet />, name: "Mars" },
  { icon: <IoMdPlanet />, name: "Jupiter" },
  { icon: <IoMdPlanet />, name: "Saturn" },
  { icon: <IoMdPlanet />, name: "Uranus" },
  { icon: <IoMdPlanet />, name: "Neptune" },
  { icon: <IoMdPlanet />, name: "Pluto" },
];

export default function DialButton() {
  const setUi = useStore((state) => state.setUi);
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        left: -10,
        bottom: 10,
        zIndex: 2,
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => setUi(index)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
