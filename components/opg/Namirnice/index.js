import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import HeroContent from "../../HeroContent/index";

import { WrapSection } from "./style.js";

import useWindowSize from "../../useWindowSize";

import Hero2 from "../../Hero2";

function Namirnice() {
  const size = useWindowSize();

  const targetElement = useRef();
  const scrollingTop = (event) => {
    const elmnt = targetElement;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };
  return (
    <WrapSection id="booking">
      <HeroContent />
      <Hero2 />
    </WrapSection>
  );
}

export default Namirnice;
