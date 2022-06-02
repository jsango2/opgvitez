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
import Boat from "../../images/boatData/valovi.png";

import Val from "../../images/boatData/valBijeli.svg";

const FAQsection = () => {
  return (
    <HeroWrap>
      <WrapImage>
        <Image
          src={Boat}
          alt="Boat two"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
          objectFit="cover"
        />
      </WrapImage>
      <TextWrap>
        <Title>FREQUENTLY ASKED QUESTIONS</Title>
        <Text>
          <strong>
            What licenses do I need to rent the Lagoon 450 F | Summer Breeze?
          </strong>{" "}
          <br />
          <br />
          • To rent the boat Lagoon 450 F | Summer Breeze, you need a valid
          sailing license and a VHF license (certificate of Restricted Radio
          Telephony). You can always verify the validation of your license with
          us.
          <br />
          <br />
          <strong>What is a Transit Log fee?</strong>
          <br />
          <br />• A Transit Log is a mandatory fee, including the final
          cleaning, bed linen, license fees and document preparation costs.
          <br />
          <br />
          <strong>What are the additional costs?</strong>
          <br />
          <br />• You can find the additional costs listed as mandatory extras
          in the boat’s profile. You should also consider the mooring costs,
          petrol and food expenses during your sailing holiday.
          <br />
          <br />
          <strong>
            What are the payment methods for services and extras on the spot?
          </strong>
          <br />
          <br />• The extras can be paid on the spot only in cash (local
          currency or Euro). The refundable Security Deposit can be paid on the
          spot by Visa, MasterCard or in cash (local currency or Euro). Tourist
          Tax can be paid on the spot only in cash only local currency).
          <br />
          <br />
          <strong>
            What documents will I receive after the reservation?
          </strong>{" "}
          <br />
          <br />• You will receive an instant booking confirmation and the
          charter contract. After the reservation has been paid, you will
          receive the crew list, boarding pass, and marina base information.
          <br />
          <br />
          <strong>
            Is the boat Lagoon 450 F | Summer Breeze insured?
          </strong>{" "}
          <br />
          <br />
          • Yes, the Lagoon 450 F | Summer Breeze comes with insurance.
          <br />
          <br />
          <strong>What is the deposit?</strong> <br />
          <br />• The deposit is the monetary amount used to guarantee the
          coverage of any potential damages done to the boat. It will be
          pre-authorised on your card.
          <br />
          <br />
          <strong>
            Can the Lagoon 450 F | Summer Breeze be rented with or without a
            skipper?{" "}
          </strong>{" "}
          <br />
          <br />• The Lagoon 450 F | Summer Breeze can be rented as a bareboat,
          or you can rent a professional skipper.
        </Text>
      </TextWrap>
    </HeroWrap>
  );
};

export default FAQsection;
