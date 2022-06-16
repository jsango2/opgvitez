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
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/router";
import { en, hr } from "../../translations/translations.js";
const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "hr" ? hr : "";
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
            <AnchorLink href={e.anchor}>{e.veza}</AnchorLink>
          </SingleLink>
        ))}

        {/* <SingleLink>
          <a href="">{t.home}</a>
        </SingleLink>
        <SingleLink>
          <a href="">{t.contact}</a>
        </SingleLink> */}
      </LinkWrap>
    </NavbarWrap>
  );
};

export default Navbar;
