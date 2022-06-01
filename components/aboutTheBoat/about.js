import { HeroWrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Cover from "../../images/about the boat/cover.png";

const About = () => {
  return (
    <HeroWrap>
      <Image
        src={Cover}
        alt="Cover photo"
        layout="fill"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </HeroWrap>
  );
};

export default About;
