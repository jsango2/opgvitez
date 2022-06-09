import {
  HeroWrap,
  ValWrap,
  WrapValTitle,
  Button,
  WrapDots,
  Overlay,
  Box,
  MobileCTA,
  OverlayMobile,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import HeroPhoto from "../../images/heroPhoto.png";
import Val from "../../images/boatData/valBijeli.svg";
import Dots from "../../images/hero/dots.svg";
import { Anchor } from "nextjs-anchor";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  });
  return (
    <HeroWrap ref={ref}>
      <video autoPlay muted loop="loop" className="videoHero" playsInline>
        <source src="/heroVideo2.mp4" type="video/mp4" />
      </video>
      {/* <Image
        src={HeroPhoto}
        alt="Picture of the author"
        layout="fill"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      /> */}
      <WrapValTitle>
        <ValWrap>
          <Image src={Val} alt="Gallery" layout="fill" />
        </ValWrap>
        <h1>MEET SUMMER BREEZE</h1>
        <p>
          An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline.{" "}
        </p>
        <Button>
          <Anchor href="/#booking">SEND INQUIRE</Anchor>{" "}
        </Button>
      </WrapValTitle>
      <WrapDots inView={inView}>
        <Image
          src={Dots}
          alt="Dots"
          layout="fill"
          priority
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // Optional blur-up while loading
        />
      </WrapDots>
      <Overlay>
        <Anchor href="/#fees">RENTAL CONDITIONS</Anchor>
        <Anchor href="/#boatData">BOAT EQUIPMENT</Anchor>
        <Anchor href="/#marina">BOAT LOCATION</Anchor>
        <Anchor href="/#faq">FAQ</Anchor>
      </Overlay>
      <MobileCTA>
        <OverlayMobile>
          <h1>MEET SUMMER BREEZE</h1>
        </OverlayMobile>
        <Box>
          <p>
            An incredible Catamaran dedicated for charters. Built in 2018, the
            fully equipped Lagoon 450 F will take you to the most beautiful
            anchorages on the Croatian coastline.{" "}
          </p>

          <Button>
            <Anchor href="/#booking">SEND INQUIRE</Anchor>{" "}
          </Button>
        </Box>
      </MobileCTA>
    </HeroWrap>
  );
};

export default Hero;
