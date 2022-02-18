import Layout from "../../src/layouts";
import { getSession } from "next-auth/react";
import { QueryClient, useQuery } from "react-query";
import {
  getAdvertisementsStatistics,
  getEventStatistics,
  getMemberStatistics,
} from "../../src/microservices/dashboard";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Dashboard = ({ session }) => {
  const { data: membersStats, isLoading: isMemberStatsLoading } = useQuery(
    "dashboard:members",
    () => getMemberStatistics(session.user.accessToken)
  );

  const { data: eventStats, isLoading: isEventStatsLoading } = useQuery(
    "dashboard:events",
    () => getEventStatistics(session.user.accessToken)
  );

  const { data: advertisementStats, isLoading: isAdvertisementStatsLoading } =
    useQuery("dashboard:advertisements", () =>
      getAdvertisementsStatistics(session.user.accessToken)
    );

  return (
    <Layout session={session} pageTitle="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {isMemberStatsLoading ? (
            <Skeleton
              variant="rectangular"
              height={300}
              sx={{ borderRadius: 5 }}
            />
          ) : (
            <Card>
              <CardHeader
                title={
                  <Box display="flex" justifyContent="space-between">
                    <Typography component="span" variant="h6">
                      {" "}
                      Members
                    </Typography>
                    <Typography component="span" variant="h6">
                      {" "}
                      {membersStats.data ? membersStats.data.total : null}
                    </Typography>
                  </Box>
                }
                titleTypographyProps={{
                  variant: "h6",
                  textTransform: "uppercase",
                }}
              />
              <CardContent>
                {membersStats.data ? (
                  <>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1" textTransform="uppercase">
                          Active
                        </Typography>
                        <Typography
                          variant="h6"
                          fontStyle="bold"
                          color="success.main">
                          {membersStats.data.active}
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1" textTransform="uppercase">
                          Pending
                        </Typography>
                        <Typography
                          variant="h6"
                          fontStyle="bold"
                          color="warning.main">
                          {membersStats.data.pending}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  "No data found"
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {isEventStatsLoading ? (
            <Skeleton
              variant="rectangular"
              height={300}
              sx={{ borderRadius: 5 }}
            />
          ) : (
            <Card>
              <CardHeader
                title={
                  <Box display="flex" justifyContent="space-between">
                    <Typography component="span" variant="h6">
                      {" "}
                      Events
                    </Typography>
                    <Typography component="span" variant="h6">
                      {" "}
                      {eventStats.data ? eventStats.data.total : null}
                    </Typography>
                  </Box>
                }
                titleTypographyProps={{
                  variant: "h6",
                  textTransform: "uppercase",
                }}
              />
              <CardContent>
                {eventStats.data ? (
                  <>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1" textTransform="uppercase">
                          Upcoming
                        </Typography>
                        <Typography
                          variant="h6"
                          fontStyle="bold"
                          color="success.main">
                          {eventStats.data.upcoming}
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1" textTransform="uppercase">
                          Past
                        </Typography>
                        <Typography
                          variant="h6"
                          fontStyle="bold"
                          color="warning.main">
                          {eventStats.data.past}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  "No data found"
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {isAdvertisementStatsLoading ? (
            <Skeleton
              variant="rectangular"
              height={300}
              sx={{ borderRadius: 5 }}
            />
          ) : (
            <Card>
              <CardHeader
                title={
                  <Box display="flex" justifyContent="space-between">
                    <Typography component="span" variant="h6">
                      {" "}
                      Advertisements
                    </Typography>
                    <Typography component="span" variant="h6">
                      {" "}
                      {advertisementStats.data
                        ? advertisementStats.data.total
                        : null}
                    </Typography>
                  </Box>
                }
                titleTypographyProps={{
                  variant: "h6",
                  textTransform: "uppercase",
                }}
              />
              <CardContent>
                {advertisementStats.data ? (
                  <>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1" textTransform="uppercase">
                          Sold
                        </Typography>
                        <Typography
                          variant="h6"
                          fontStyle="bold"
                          color="success.main">
                          {advertisementStats.data.sold}
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1" textTransform="uppercase">
                          Pending Verification
                        </Typography>
                        <Typography
                          variant="h6"
                          fontStyle="bold"
                          color="warning.main">
                          {advertisementStats.data.notVerified}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  "No data found"
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  await queryClient.prefetchQuery("dashboard:members", () =>
    getMemberStatistics(session.user.accessToken)
  );
  await queryClient.prefetchQuery("dashboard:events", () =>
    getEventStatistics(session.user.accessToken)
  );
  await queryClient.prefetchQuery("dashboard:advertisements", () =>
    getAdvertisementsStatistics(session.user.accessToken)
  );

  return {
    props: {
      session,
    },
  };
};
