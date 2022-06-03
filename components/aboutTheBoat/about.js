import { HeroWrap, ValWrap, WrapValTitle, Button, WrapDots } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Cover from "../../images/about the boat/cover.png";
import Valovi from "../../images/about the boat/val.svg";
import Val from "../../images/boatData/valBijeli.svg";

const About = () => {
  return (
    <HeroWrap id="about">
      <Image
        src={Cover}
        alt="Cover photo"
        layout="fill"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <WrapValTitle>
        <ValWrap>
          <Image src={Val} alt="Gallery" layout="fill" />
        </ValWrap>
        <h1>ABOUT THE BOAT</h1>
        <p>
          The fully equipped Lagoon 450F saw the light in 2018. Ever since it
          has been sailing elegantly over the seven seas, looking for hidden
          bays, distant waterways and dispersed treasure islands. The 13.99m
          (46ft) catamaran offers comfortable accommodation for 12 passengers in
          2 single cabins, 4 double cabins and a saloon with 2 extra beds. All
          equipped with aircon. Sail away with Summer Breeze along the
          intriguing Croatian coastline.
          <br />
          <br />
          Docked in D-Marin Marina Dalmacija, in Sukosan, Croatia
        </p>
        <Button>PHOTO GALLERY</Button>
      </WrapValTitle>
      <WrapDots>
        <Image
          src={Valovi}
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

export default About;
