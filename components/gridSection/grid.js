import {
  HeroWrap,
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Overlay,
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Location from "../../images/grid/location.png";
import Equipment from "../../images/grid/equipment.png";
import Calendar from "../../images/grid/calendar.png";
import Rental from "../../images/grid/rental.png";
import Gallery from "../../images/grid/gallery.png";

const Grid = () => {
  return (
    <HeroWrap>
      <Div1>
        {" "}
        <Image
          src={Location}
          alt="Location"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
        <Title1>Location and Surrounding</Title1>
        <Overlay />
      </Div1>
      <Div2>
        {" "}
        <Image
          src={Equipment}
          alt="Equipment"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
        <Title2>Boat Equipment</Title2>
        <Overlay />
      </Div2>{" "}
      <Div3>
        {" "}
        <Image
          src={Calendar}
          alt="Calendar"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
        <Title3>Calendar and Pricing</Title3>
        <Overlay />
      </Div3>{" "}
      <Div4>
        {" "}
        <Image
          src={Rental}
          alt="Rental"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
        <Title4>Rental Conditions</Title4>
        <Overlay />
      </Div4>{" "}
      <Div5>
        {" "}
        <Image
          src={Gallery}
          alt="Gallery"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
        <Title5>Photo Gallery</Title5>
        <Overlay />
      </Div5>
    </HeroWrap>
  );
};

export default Grid;
