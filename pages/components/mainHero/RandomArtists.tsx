import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRecoilValueLoadable, useSetRecoilState, useRecoilValue } from "recoil";

import { ArtistsDataType } from "../../../types/AlbumTypes";
import { randomArtistsHandler } from "../../../recoil/selector/selectors";
import { isClickedState, detailClickedInfosState, accessTokenState } from "../../../recoil/atom";

const RandomArtists: React.FC = () => {
  const accessToken:string = useRecoilValue(accessTokenState);
  
  const randomArtistsLoadable = useRecoilValueLoadable(
    randomArtistsHandler("")
    );
    const randomArtistsData = (
      randomArtistsLoadable.state === "hasValue" && randomArtistsLoadable.contents && accessToken
      ? randomArtistsLoadable.contents
      : randomArtistsLoadable
      ) as ArtistsDataType;
      const setIsClicked = useSetRecoilState(isClickedState);
      const setDetailInfos = useSetRecoilState(detailClickedInfosState);
  
  
  useEffect(() => {
    if (!randomArtistsData || randomArtistsLoadable.state !== "hasValue") {
      randomArtistsLoadable;
    }
  }, [randomArtistsData]);

  return (
    <>
      {randomArtistsData ? (
        <div className="sm:w-[50%] flex flex-col">
          <h1 className="my-1 lg:text-3xl md:text-2xl sm:text-xl">
            추천 아티스트들
          </h1>
          <div className="flex sm:flex-col flex-wrap justify-center items-start">
            {randomArtistsData?.artists?.items.map((e, i: number) => (
              <Link
                href="components/DetailTracks"
                className="w-[16%] sm:w-auto m-3"
                key={i}
                onClick={() => {
                  setIsClicked(true);
                  setDetailInfos(e);
                }}
              >
                <div className="w-full relative sm:flex sm:justify-start hover:scale-95 duration-150 cursor-pointer">
                  <Image
                    className="sm:w-[25%] object-cover rounded-xl shadow-xl"
                    src={`${e.images[0]?.url}`}
                    width={500}
                    height={500}
                    alt="아티스트"
                  />
                  <h1 className="absolute sm:relative top-1 left-1 text-white mix-blend-difference sm:mix-blend-normal mt-2 drop-shadow-2xl uppercase text-lg sm:text-xs">
                    {e.name}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        randomArtistsLoadable
      )}
    </>
  );
};

export default RandomArtists;
