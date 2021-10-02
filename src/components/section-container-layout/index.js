import { Grid, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";

const SectionContainerLayout = ({ title, children }) => {
  return (
    <Box mt={15}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="textPrimary"
            gutterBottom
            style={{ textTransform: "UPPERCASE", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionContainerLayout;
