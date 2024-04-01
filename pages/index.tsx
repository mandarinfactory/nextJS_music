"use client";

import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRecoilState } from "recoil";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { accessTokenState } from "../recoil/atom";
import { getAccessTokenData } from "./api/token";
import { REDIRECT_URL, SCOPE } from "../utils/constants";

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const getSaveAccessToken = localStorage.getItem("accessToken");
    const filteredAccessToken = async () => {
      try {
        const data = await getAccessTokenData();
        localStorage.setItem("accessToken", data.data.access_token);
        setAccessToken(localStorage.getItem("accessToken"));
        
      } catch (error) {
        console.error("데이터 에러:", error);
      }
    };

    filteredAccessToken();
  }, []);
  
  return (
    <Sidebar spotifyAuthUrl={spotifyAuthUrl}>
      <Hero />
    </Sidebar>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  
  const encodeRedirectUri = encodeURIComponent(REDIRECT_URL);
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeRedirectUri}&scope=${SCOPE}`;
  return { props: { spotifyAuthUrl } };
};

export default Home;
