import { HeroWrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import HeroPhoto from "../../images/heroPhoto.png";

const Hero = () => {
  return (
    <HeroWrap>
      <Image
        src={HeroPhoto}
        alt="Picture of the author"
        layout="fill"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
    </HeroWrap>
  );
};

export default Hero;
