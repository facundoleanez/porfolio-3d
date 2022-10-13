import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useStore } from "../store";
import { IoMdPlanet } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { SiGoogleearth } from "react-icons/si";
import { GiJupiter } from "react-icons/gi";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { WiMoonAltWaningGibbous2 } from "react-icons/wi";
import { WiMoonFull } from "react-icons/wi";
const actions = [
  { icon: <BsFillSunFill />, name: "Sun" },
  { icon: <WiMoonFull />, name: "Mercury" },
  { icon: <WiMoonAltWaningGibbous2 />, name: "Venus" },
  { icon: <ImEarth />, name: "Earth" },
  { icon: <GiEarthAsiaOceania />, name: "Mars" },
  { icon: <GiJupiter />, name: "Jupiter" },
  { icon: <IoMdPlanet />, name: "Saturn" },
  { icon: <SiGoogleearth />, name: "Uranus" },
  { icon: <WiMoonAltWaningGibbous2 />, name: "Neptune" },
  { icon: <WiMoonFull />, name: "Pluto" },
];
export default function DialButton() {
  const { setUiPlanet, setUiScreen } = useStore((state) => state);

  const handleClickPlanets = (name, index) => {
    setUiPlanet(index);
    setUiScreen(name);
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        left: -10,
        bottom: 10,
        zIndex: 2,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClickPlanets(action.name, index)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
