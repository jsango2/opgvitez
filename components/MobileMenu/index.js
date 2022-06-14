import Link from "next/link";

import React from "react";
import { Links } from "../Navigation/links.js";
import {
  WrapMobileMenu,
  SingleLink,
  CloseIcon,
  LineX1,
  LineX2,
} from "./styles.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MobileMenu = ({ isOpen, handleClick }) => {
  return (
    <WrapMobileMenu isOpen={isOpen}>
      <CloseIcon onClick={handleClick}>
        <LineX1 />
        <LineX2 />
      </CloseIcon>
      {Links.map((e, index) => (
        <SingleLink key={index} onClick={handleClick}>
          <AnchorLink href={e.anchor}>{e.veza}</AnchorLink>{" "}
        </SingleLink>
      ))}
    </WrapMobileMenu>
  );
};

export default MobileMenu;
