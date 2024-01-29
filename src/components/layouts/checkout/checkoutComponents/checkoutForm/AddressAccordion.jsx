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
export default function AddressAccordion({ handleChange, expanded }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      mobileNumber: formData.get("mobileNumber"),
      location: formData.get("location"),
    };
    console.log(data); // Process the form data as needed
  };

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
            <form onSubmit={handleSubmit} noValidate={false}>
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
