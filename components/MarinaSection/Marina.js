import {
  HeroWrap,
  Title,
  WrapText,
  Text,
  Button,
  WrapLeft,
  WrapRight,
  BoatTitleWrap,
  WrapValTitle,
  WrapImages,
  WrapImageL,
  WrapImageR,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Left from "../../images/marina/left.png";
import Right from "../../images/marina/right.jpeg";
import useWindowSize from "../useWindowSize.js";
const Marina = () => {
  const size = useWindowSize();
  return (
    <HeroWrap id="marina">
      <Title>MARINA INFORMATION</Title>
      <WrapImages>
        <WrapImageL>
          <Image
            src={Left}
            alt="Marina one"
            layout="fill"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
            objectFit="cover"
          />
        </WrapImageL>
        <WrapImageR>
          <Image
            src={Right}
            alt="Marina two"
            layout="fill"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </WrapImageR>
      </WrapImages>
      <WrapText>
        <Text>
          D-Marin Marina Dalmacija is situated nearby Sukošan, Croatia. The
          marina can accommodate up to 1200 charter yachts.
          <br />
          <br />
          It is located 10 kilometres from the nearest airport and 10 kilometres
          from Sukošan city centre. Taxis from the airport cost approximately 25
          €.
          <br />
          <br />
          All berths are connected to water and electricity.
        </Text>
        <Text>
          D-Marin Marina Dalmacija boasts a wide range of facilities for
          sailors, including an ATM, WiFi, a launderette, an exchange office, a
          car park, a petrol station, a toilet and showers. It also offers a
          restaurant and a supermarket.
          <br />
          <br />
          If you come by car, D-Marin Marina Dalmacija provides a private
          parking. Parking fees are 10 € per day, or 70 € per week.
        </Text>
      </WrapText>
      {size.width > 600 ? (
        <Button href="https://goo.gl/maps/X12pgMPVjRkHmPv7A" target="_blank">
          THE MARINA ON GOOGLE MAPS
        </Button>
      ) : (
        <Button href="https://goo.gl/maps/X12pgMPVjRkHmPv7A" target="_blank">
          GOOGLE MAPS
        </Button>
      )}
    </HeroWrap>
  );
};

export default Marina;
