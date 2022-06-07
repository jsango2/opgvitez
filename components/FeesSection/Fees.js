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
  TextCompany,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Boat from "../../images/boatData/fee.png";

import Val from "../../images/boatData/valBijeli.svg";

const FeesSection = () => {
  return (
    <HeroWrap id="fees">
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
          per person/per day, Comfort Pack 44/45/46 (final cleaning, bed linen
          and towels, unlimited Wi-Fi, dinghy with outboard):
          <strong>400.00 EUR</strong> per booking <br />
          <br />
          <strong>Optional extras:</strong> <br />
          <ul>
            <li>
              {" "}
              Beach Towel:<strong>5.00 EUR</strong> per person/week, Snorkelling
              set (no fins):<strong>10.00 EUR</strong> per person/week,
            </li>
            <li>
              SafetyNet with installation:<strong>100.00 EUR</strong> per
              booking,
            </li>
            <li>
              SafetyNet without installation:<strong>35.00 EUR</strong> per
              booking,
            </li>
            <li>
              Pet on board/per pet:<strong>70.00 EUR </strong> per booking,
            </li>
            <li>
              {" "}
              Deposit Insurance 450/46 (non refundable, covers all damage except
              lost items and clogged toilets; no fix deposit needed):
              <strong>300.00 EUR</strong>
              per booking,
            </li>
            <li>
              Hostess (+provisions):<strong>1,050.00 EUR</strong> per week,
            </li>
            <li>
              Stand Up Paddle (SUP):<strong>120.00 EUR</strong> per week,
            </li>
            <li>
              Skipper (+provisions) - skipper details will be available 3 days
              prior to departure:<strong>1,260.00 EUR</strong> per week
            </li>
          </ul>
        </Text>
        <div style={{ height: "50px" }}></div>
        <WrapValTitle>
          <ValWrap>
            <Image src={Val} alt="Gallery" layout="fill" />
          </ValWrap>
          <h1>BOOKING COMPANY</h1>
        </WrapValTitle>
        <TextCompany>
          Master Yachting <br /> Mail address: office@masteryachting.hr
          <br /> Phone : Tel: +385 23 393 230 <br />
          Customers rate Master Yachting 8.3/10
        </TextCompany>
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
