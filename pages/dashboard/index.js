import Layout from "../../src/layouts";
import { getSession } from "next-auth/react";

const Dashboard = ({ session }) => {
  return <Layout session={session} pageTitle="Dashboard"></Layout>;
};

export default Dashboard;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
