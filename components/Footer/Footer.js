import { HeroWrap, SingleLink, WrapImage, LinkWrap, Data } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Link from "next/link";

import Image from "next/image";
import Left from "../../images/marina/left.png";
import Logo from "../../images/logo.png";
import { Links } from "../Navigation/links.js";
const Footer = () => {
  return (
    <HeroWrap>
      <WrapImage>
        <Image
          src={Logo}
          alt="Picture of the author"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
      </WrapImage>
      <LinkWrap>
        {Links.map((e, index) => (
          <SingleLink key={index}>
            <Link href={e.link}>{e.veza}</Link>
          </SingleLink>
        ))}
      </LinkWrap>
      <Data>
        44th Parallel North d.o.o.
        <br /> OIB: 51626896453 VAT ID: HR51626896453 <br />
        Petrčane ulica II 105, Hrvatska - 23 231 Petrčane
        <br /> MBS: 110113252 Tt-22/335-2
      </Data>
    </HeroWrap>
  );
};

export default Footer;
