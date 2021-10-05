import {
  CardContent,
  Card,
  CardHeader,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import dvuFullLogo from "../../public/logos/dvu-full.png";
import Image from "next/image";

const Login = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Box maxWidth={300} mx="auto">
            <Image src={dvuFullLogo} priority />
          </Box>
          <Box clone maxWidth={500} mx="auto">
            <Card>
              <CardHeader
                title="Login"
                titleTypographyProps={{
                  align: "center",
                  style: { textTransform: "uppercase" },
                }}
              />
              <CardContent>
                <form autoComplete="off" autoCapitalize="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField variant="outlined" label="Email" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth type="submit">
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
