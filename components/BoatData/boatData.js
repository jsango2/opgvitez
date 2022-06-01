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
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Boat from "../../images/boatData/BoatInside.png";

import Val from "../../images/boatData/val.svg";

const BoatData = () => {
  const getDates = (startDate, endDate) => {
    //first the function and variable definitions
    let dates = [];
    const addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    //now our Sunday check
    let currentDate = startDate;
    if (currentDate.getDay() > 0) {
      console.log("not a sunday...adjusting");
      currentDate.setDate(currentDate.getDate() - currentDate.getDay() - 1);
    }

    while (currentDate <= endDate) {
      let endWeekDate = addDays.call(currentDate, 7);
      dates.push({ begin: currentDate, end: endWeekDate });
      currentDate = addDays.call(currentDate, 7);
    }
    return dates;
  };
  console.log(getDates(new Date("2020-04-01"), new Date("2020-11-03")));

  return (
    <HeroWrap>
      <Up>
        {" "}
        <TextWrap>
          <ValWrap>
            <Image src={Val} alt="Gallery" layout="fill" />
          </ValWrap>
          <h1>SUMMER BREEZE</h1>
          <DataWrap>
            <Property>Length</Property>
            <Data>46 ft / 14 m</Data>
          </DataWrap>
          <DataWrap>
            <Property>Draught</Property>
            <Data>4 ft / 1,2 m</Data>
          </DataWrap>
          <DataWrap>
            <Property>Displacement</Property>
            <Data>15.500 kg</Data>
          </DataWrap>{" "}
          <DataWrap>
            <Property>Berths</Property>
            <Data>12 (8+2+1+1)</Data>
          </DataWrap>{" "}
          <DataWrap>
            <Property>Cabins</Property>
            <Data>6 (4 Double + Saloon + 1 Skipper)</Data>
          </DataWrap>{" "}
          <DataWrap>
            <Property>WC / Shower</Property>
            <Data>4</Data>
          </DataWrap>{" "}
          <div style={{ height: "30px" }}></div>
          <DataWrap>
            <Property>Engine</Property>
            <Data>2x57 HP Yanmar</Data>
          </DataWrap>{" "}
          <DataWrap>
            <Property>Fuel capacity</Property>
            <Data>1000,00 l</Data>
          </DataWrap>
          <DataWrap>
            <Property>Water capacity</Property>
            <Data>700,00 l</Data>
          </DataWrap>
          <Download>Download the boat brochure</Download>
        </TextWrap>
        <BoatWrap>
          <Image
            src={Boat}
            alt="Gallery"
            layout="fill"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </BoatWrap>
      </Up>
      <Down>
        {" "}
        <BoatTitleWrap>
          <ValWrap>
            <Image src={Val} alt="Gallery" layout="fill" />
          </ValWrap>
          BOAT EQUIPMENT
        </BoatTitleWrap>
        <TextWrapDown>
          <WrapLeft>
            <Title>Entertainment:</Title>
            <Text>Cockpit Speakers</Text>
            <Title>Additional equipment:</Title>
            <Text>
              USB sockets in the cabins (x4), Generator, Dinghy CL 340 with
              console/outboard 20HP, Berth in port bow compartment, Cockpit
              Fridge 80l, Air Condition salon + cabins, Berth in starboard bow
              compartment, El. toilet flush
            </Text>
            <Title>Other:</Title>
            <Text>Front skipper cabins accessible from outside</Text>
            <Title>Interior:</Title>
            <Text>
              Lowerable salon table.
              <br /> Pillows and blankets are included in the price.
            </Text>

            <Title>Sails:</Title>
            <Text>Full Batten Main Sail, Lazy bag, Roll Genoa</Text>
          </WrapLeft>
          <WrapRight>
            <Title>Galley:</Title>
            <Text>Fridge 2x100l</Text>
            <Title>Safety Equipment:</Title>
            <Text>Safety harness, Fire extinguisher</Text>
            <Title>Entertainment:</Title>
            <Text>
              Wi-Fi Internet,
              <br /> Radio - FUSION:
              <br /> USB, Aux,
              <br /> Bluetooth, Outside
              <br /> speakers
            </Text>
            <Title>Other equipment:</Title>
            <Text>
              Dishes, Bilge pump, Oven (1), Deck shower (1), Swimming ladder
              (1), Life jacket, Doublebowl sink, Anemometer (1)
            </Text>
          </WrapRight>
        </TextWrapDown>
      </Down>
    </HeroWrap>
  );
};

export default BoatData;
