"use client";

import React from "react";
import { useRecoilValue } from "recoil";

import MainHero from "./MainHero";
import SearchHero from "./SearchHero";
import { musicValState } from "../../recoil/atom";

const Hero: React.FC = () => {
  const musicVal = useRecoilValue(musicValState);

  return <>{!musicVal ? <MainHero /> : <SearchHero />}</>;
};

export default Hero;
