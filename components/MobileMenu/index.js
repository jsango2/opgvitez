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

const MobileMenu = ({ isOpen, handleClick }) => {
  return (
    <WrapMobileMenu isOpen={isOpen}>
      <CloseIcon onClick={handleClick}>
        <LineX1 />
        <LineX2 />
      </CloseIcon>
      {Links.map((e, index) => (
        <SingleLink key={index} onClick={handleClick}>
          <Anchor href={e.anchor}>{e.veza}</Anchor>{" "}
        </SingleLink>
      ))}
    </WrapMobileMenu>
  );
};

export default MobileMenu;
