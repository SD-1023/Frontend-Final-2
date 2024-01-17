import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CarryCard from "./hero-cards/CarryCard";
import SpringCard from "./hero-cards/SpringCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const IMG_PATH = "/assets/images/home-hero/";

function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <AutoPlaySwipeableViews interval={2500} enableMouseEvents>
        <CarryCard IMG_PATH={IMG_PATH} />
        <SpringCard IMG_PATH={IMG_PATH} />
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Hero;
