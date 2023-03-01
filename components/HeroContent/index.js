import Image from "next/image.js";
import React, { useState, useEffect } from "react";
import { WrapHeroContent, Left, WrapImage, Title, SubTitle } from "./style.js";

function Hero({}) {
  return (
    <>
      <WrapHeroContent>
        <Left>
          <Title>Dostava svježeg voća i povrća!</Title>
          <SubTitle>
            Dostavljamo svježe voće i povrće vlastite proizvodnje i proizvodnje
            provjerenih proizvođača do vašeg doma u Zagrebu i okolici.
          </SubTitle>
        </Left>
        <WrapImage>
          {" "}
          <Image
            priority
            src="/heroSeljak.svg"
            layout="fill"
            objectFit="contain"
          />
        </WrapImage>
      </WrapHeroContent>
    </>
  );
}

export default Hero;
