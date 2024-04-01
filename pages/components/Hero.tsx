"use client";

import React, {useEffect} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import MainHero from "./MainHero";
import SearchHero from "./SearchHero";
import { getAccessTokenData } from "../api/token";
import { musicValState, accessTokenState } from "../../recoil/atom";

const Hero: React.FC = () => {
  const musicVal = useRecoilValue(musicValState);
  const setAccessToken = useSetRecoilState(accessTokenState);

  useEffect(() => {
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

  return <>{!musicVal ? <MainHero /> : <SearchHero />}</>;
};

export default Hero;
