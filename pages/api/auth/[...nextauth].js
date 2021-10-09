import { CredentialsProvider } from "next-auth/providers";

const providers = [
  CredentialsProvider({
    name: "Credentials",

    authorize: async ({ email, password }) => {
      try {
        const { status, data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
          { email, password }
        );
      } catch (err) {}
    },
  }),
];
