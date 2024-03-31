"use client";

import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { accessTokenState } from "../recoil/atom";
import { getAccessTokenData } from "./api/token";
import { REDIRECT_URL, SCOPE } from "../utils/constants";

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
  const setAccessToken:SetterOrUpdater<string> = useSetRecoilState(accessTokenState);

  useEffect(() => {
    const getSaveAccessToken = localStorage.getItem("accessToken");
    const filteredAccessToken = async () => {
      try {
        const data = await getAccessTokenData();
        localStorage.setItem("accessToken", data.data.access_token);
      } catch (error) {
        console.error("데이터 에러:", error);
      }
    };

    filteredAccessToken();

    if (getSaveAccessToken) {
      setAccessToken(getSaveAccessToken);
    }
  }, [setAccessToken]);
  
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
  console.log(spotifyAuthUrl);
  return { props: { spotifyAuthUrl } };
};

export default Home;
