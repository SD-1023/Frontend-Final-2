import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "./Footer";
import { useCategoriesContext } from "../../contexts/CategoriesContext";

export default function FooterContainer() {
  const { categories } = useCategoriesContext();

  return (
    <>
      <div className="sm:hidden pb-14">
        <Accordion
          sx={{
            boxShadow: "unset",
            padding: 0,
            height: 48,
            backgroundColor: "#f4f4f4",
          }}
          slotProps={{ transition: { unmountOnExit: true } }}
        >
          <AccordionSummary sx={{ margin: 0 }} expandIcon={<ExpandMoreIcon />}>
            <span className=" text-sm font-medium leading-5 text-color-typeLowEmphasis">
              More about CORA’L
            </span>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, marginTop: 0 }}>
            <Footer categories={categories} />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="hidden sm:block">
        <Footer categories={categories} />
      </div>
    </>
  );
}
