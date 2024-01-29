import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import PaymentOptions from "./paymentComponents/PaymentOptions";

const StyledAccordion = styled(Accordion)(() => ({
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "0px",
}));
export default function PaymentAccordion({ handleChange, expanded }) {
  return (
    <div className="w-full max-w-[44rem]">
      <StyledAccordion
        expanded={expanded === "acc2"}
        onChange={handleChange("acc2")}
        elevation={"none"}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-color-dark" />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ padding: "0px" }}
        >
          <Typography
            sx={{ fontWeight: "600" }}
            className="text-[1.25rem] leading-[1.625rem]"
          >
            Select Payment Method
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PaymentOptions />
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}
