import React, { useState } from "react";
// import Logo from "../../../content/assets/LogoNavbar.svg";
import Link from "next/link";

import {
  NavbarWrap,
  LogoWrap,
  LogoWrapMobile,
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
import Logo from "../../images/hero/LOGO.svg";
import LogoWhite from "../../images/hero/LOGOWhite.svg";
import Image from "next/image";

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
    <NavbarWrap ref={ref} id="navbar">
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <LogoWrap isOpen={isOpen} inView={inView}>
        <Link href="/">
          <Image src={Logo} alt="Logo" layout="fill" />
        </Link>
      </LogoWrap>
      <LogoWrapMobile isOpen={isOpen} inView={inView}>
        <Link href="/">
          <Image src={LogoWhite} alt="LogoWhite" layout="fill" />
        </Link>
      </LogoWrapMobile>
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
