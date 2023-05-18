import Image from "next/image.js";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  WrapHeroContent,
  Left,
  WrapImage,
  Title,
  SubTitle,
  Trgovina,
} from "./style.js";

function Hero({}) {
  return (
    <>
      <Link href="/trgovina">
        <Trgovina>Trgovina</Trgovina>
      </Link>
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
