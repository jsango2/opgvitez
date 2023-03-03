import Image from "next/image.js";
import React, { useState, useEffect } from "react";
import { WrapHeroContent, Left, WrapImage, Title, SubTitle } from "./style.js";

function Hero2({}) {
  return (
    <>
      <WrapHeroContent>
        <Left>
          <Title>Svježe ubrano voće i povrće</Title>
          <SubTitle>
            Sa naših polja sa sela kraj Zagreba, donosimo vam namirnice uzgajane
            na 6 hektara zemlje.
          </SubTitle>
        </Left>
        <WrapImage>
          {" "}
          <Image
            priority
            src="/seljak2.svg"
            layout="fill"
            objectFit="contain"
          />
        </WrapImage>
      </WrapHeroContent>
    </>
  );
}

export default Hero2;
