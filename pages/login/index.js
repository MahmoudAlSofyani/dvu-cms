import {
  CardContent,
  Card,
  CardHeader,
  TextField,
  Button,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import dvuFullLogo from "../../public/logos/dvu-full.png";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Login = () => {
  const [error, setError] = useState(null);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") return router.push("/dashboard");
  }, [session]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}`,
      });

      if (res?.error) {
        setError("Invalid email or password");
      }

      if (res.url) router.push(`${res.url}/dashboard`);
    },
  });

  return (
    <Container maxWidth="xl">
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}>
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
                <form
                  autoComplete="off"
                  autoCapitalize="off"
                  onSubmit={formik.handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Email"
                        fullWidth
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth type="submit">
                        Login
                      </Button>
                    </Grid>
                    {error && (
                      <Grid item xs={12}>
                        <Typography variant="body1">{error}</Typography>
                      </Grid>
                    )}
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
