import { HeroWrap, ValWrap, WrapValTitle, Button, WrapDots } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import HeroPhoto from "../../images/heroPhoto.png";
import Val from "../../images/boatData/valBijeli.svg";
import Dots from "../../images/hero/dots.svg";

const Hero = () => {
  return (
    <HeroWrap>
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
        <Button>SEND INQUIRE</Button>
      </WrapValTitle>
      <WrapDots>
        <Image
          src={Dots}
          alt="Dots"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // Optional blur-up while loading
        />
      </WrapDots>
    </HeroWrap>
  );
};

export default Hero;
