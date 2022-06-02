import {
  HeroWrap,
  Up,
  Down,
  BoatWrap,
  TextWrap,
  TextWrapDown,
  DataWrap,
  Property,
  Data,
  Download,
  ValWrap,
  Title,
  Text,
  WrapLeft,
  WrapRight,
  BoatTitleWrap,
  WrapValTitle,
  WrapImage,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Boat from "../../images/boatData/fee.png";

import Val from "../../images/boatData/valBijeli.svg";

const FeesSection = () => {
  return (
    <HeroWrap>
      <TextWrap>
        <WrapValTitle>
          <ValWrap>
            <Image src={Val} alt="Gallery" layout="fill" />
          </ValWrap>
          <h1>BOOKING FEES</h1>
        </WrapValTitle>

        <Text>
          <strong>Obligatory extras: to be paid at the yacht pick-up</strong>{" "}
          Tourist tax/per person (total sum calculated upon check-in): 1.50 EUR
          per day, Comfort Pack 44/45/46 (final cleaning, bed linen and towels,
          unlimited Wi-Fi, dinghy with outboard): 400.00 EUR per booking <br />
          <br />
          <strong>Optional extras:</strong> <br />
          <ul>
            <li>
              {" "}
              Beach Towel: 5.00 EUR per person/week, Snorkelling set (no fins):
              10.00 EUR per person/week,
            </li>
            <li>SafetyNet with installation: 100.00 EUR per booking,</li>
            <li>SafetyNet without installation: 35.00 EUR per booking,</li>
            <li>Pet on board/per pet: 70.00 EUR per booking,</li>
            <li>
              {" "}
              Deposit Insurance 450/46 (non refundable, covers all damage except
              lost items and clogged toilets; no fix deposit needed): 300.00 EUR
              per booking,
            </li>
            <li>Hostess (+provisions): 1,050.00 EUR per week,</li>
            <li>Stand Up Paddle (SUP): 120.00 EUR per week,</li>
            <li>
              Skipper (+provisions) - skipper details will be available 3 days
              prior to departure: 1,260.00 EUR per week
            </li>
          </ul>
        </Text>
        <WrapValTitle>
          <ValWrap>
            <Image src={Val} alt="Gallery" layout="fill" />
          </ValWrap>
          <h1>BOOKING COMPANY</h1>
        </WrapValTitle>
        <Text>
          Master Yachting <br /> Mail address: office@masteryachting.hr
          <br /> Phone : Tel: +385 23 393 230 <br />
          Customers rate Master Yachting 8.3/10
        </Text>
      </TextWrap>
      <WrapImage>
        <Image
          src={Boat}
          alt="Boat"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
          objectFit="cover"
        />
      </WrapImage>
    </HeroWrap>
  );
};

export default FeesSection;
