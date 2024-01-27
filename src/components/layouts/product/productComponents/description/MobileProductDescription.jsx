import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Icon from "../../../../shared-components/Icon";
import LinearRatingBar from "../LinearRatingBar";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const StyledHeading = styled(Typography)((theme) => ({
  fontSize: "0.875rem",
  color: "#171520",
  fontWeight: 600,
  fontFamily: "Inter",
}));
const StyledDetails = styled(Typography)((theme) => ({
  fontSize: "0.875rem",
  color: "#626262",
  fontWeight: 500,
  fontFamily: "Inter",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function MobileProductDescription({ description }) {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const ratings = [5.0, 4.0, 3.0, 2.0, 1.0];

  return (
    <div className="sm:hidden">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <StyledHeading
            sx={{ fontSize: "0.875rem", color: "#171520", fontWeight: "600" }}
          >
            Product Description
          </StyledHeading>
        </AccordionSummary>
        <AccordionDetails>
          <StyledDetails>{description}</StyledDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <StyledHeading>Ratings & Reviews</StyledHeading>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className="text-sm font-medium">Boujee</span>
            <p className="mb-4 text-color-typeLowEmphasis font-medium text-sm">
              Baker Solid Black Washable Shoulder Bag
            </p>
            <span className="flex items-center font-semibold text-base text-color-typeHighEmphasis">
              4.6
              <Icon className={"w-6  ml-[0.2rem] mr-[1.5rem]"} name={"star"} />
              <span className="text-sm">Average Rating</span>
            </span>
            <div className="pr-9 mt-1 m-auto">
              {ratings.map((rate) => (
                <div className="flex items-center mb-1">
                  <span className="font-medium text-color-typeLowEmphasis text-sm leading-5">
                    {rate.toFixed(1)}
                  </span>
                  <div className="w-full">
                    <LinearRatingBar value={rate} />
                  </div>
                </div>
              ))}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
