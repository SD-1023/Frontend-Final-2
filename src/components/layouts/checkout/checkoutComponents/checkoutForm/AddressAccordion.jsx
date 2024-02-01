import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { Container, Grid, TextField } from "@mui/material";

const StyledAccordion = styled(Accordion)(() => ({
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "0px",
}));
export default function AddressAccordion({
  handleChange,
  expanded,
  setFormData,
}) {
  return (
    <div className="w-full pt-[2px] sm:mb-16">
      <StyledAccordion
        expanded={expanded === "acc1"}
        onChange={handleChange("acc1")}
        defaultExpanded
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
            Add New Address
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container component="main" maxWidth="sm">
            <form noValidate={false}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event) => {
                      setFormData((formData) => {
                        return {
                          ...formData,
                          firstName: event.target.value,
                        };
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={(event) => {
                      setFormData((formData) => {
                        return {
                          ...formData,
                          lastName: event.target.value,
                        };
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="mobileNumber"
                    label="Mobile Number"
                    name="mobileNumber"
                    autoComplete="tel"
                    maxRows={5}
                    onChange={(event) => {
                      setFormData((formData) => {
                        return {
                          ...formData,
                          mobileNumber: event.target.value,
                        };
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    name="location"
                    autoComplete="location"
                  />
                </Grid>
              </Grid>
            </form>
          </Container>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}
