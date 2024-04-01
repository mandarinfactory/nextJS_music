import axios from "axios";
import { useEffect } from "react";
import { GetServerSideProps } from "next";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { RecoilRootBox } from "../utils/RecoilRootBox";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "../utils/constants";

const Callback = ({ authToken }: { authToken: string }) => {
  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    }
  }, [authToken]);

  return (
    <RecoilRootBox>
      <Sidebar>
        <Hero />
      </Sidebar>
    </RecoilRootBox>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const code = query.code as string;

  if (!code) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URL,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
        );
        const authToken = response.data.access_token;
        return { props: { authToken } };
  } catch (error) {
    console.error("Error:", error);
    return { props: { authToken: "" } };
  }
};

export default Callback;
