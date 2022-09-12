import { HeroWrap, SingleLink, WrapImage, LinkWrap, Data } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Link from "next/link";

import Image from "next/image";
import Left from "../../images/marina/left.png";
import Logo from "../../images/logoFooter.svg";
import { Links } from "../Navigation/links.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Lottie from "lottie-react";
import madeBySutra from "./madeBySutra";

const Footer = () => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 92],
      },
    ],
  };
  return (
    <HeroWrap id="contact">
      <WrapImage>
        <Image
          src={Logo}
          alt="Picture of the author"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
        />
      </WrapImage>
      <LinkWrap>
        {Links.map((e, index) => (
          <SingleLink key={index}>
            <AnchorLink href={e.anchor}>{e.veza}</AnchorLink>
          </SingleLink>
        ))}
      </LinkWrap>
      <Data>
        44th Parallel North d.o.o.
        <br /> OIB: 51626896453 VAT ID: HR51626896453 <br />
        Petrčane ulica II 105, Hrvatska - 23 231 Petrčane
        <br /> MBS: 110113252 Tt-22/335-2
        <div style={{ width: "300px", margin: "15px auto" }}>
          <a href="https://www.sutra.hr" target="_blank">
            <Lottie
              animationData={madeBySutra}
              interactivity={interactivity}
              autoPlay={false}
              loop={true}
            />
          </a>
        </div>
      </Data>
    </HeroWrap>
  );
};

export default Footer;
