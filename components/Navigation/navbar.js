import React, { useState } from "react";
// import Logo from "../../../content/assets/LogoNavbar.svg";
import Link from "next/link";

import {
  NavbarWrap,
  LogoWrap,
  LinkWrap,
  SingleLink,
  Hamburger,
  Line,
} from "./styles.js";
import { Links } from "./links";
import MobileMenu from "../MobileMenu";
import { useInView } from "react-intersection-observer";
// import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    // trigger inView function only once
    triggerOnce: true,
  });

  return (
    <NavbarWrap ref={ref}>
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />
      {/* {isOpen ? (
        <CloseIcon onClick={handleClick}>
          <LineX1 />
          <LineX2 />
        </CloseIcon>
      ) : (
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <Line />
          <Line />
          <Line />
        </Hamburger>
      )} */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <LogoWrap isOpen={isOpen} inView={inView}>
        {/* <Link href="/">
          <img src={Logo} width="100%" alt="" />
        </Link> */}
      </LogoWrap>
      <LinkWrap>
        {Links.map((e, index) => (
          <SingleLink key={index}>
            <Link href={e.link}>{e.veza}</Link>
          </SingleLink>
        ))}
      </LinkWrap>
    </NavbarWrap>
  );
};

export default Navbar;
