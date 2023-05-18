import React, { useState, useEffect } from "react";

import { DiskontWrap, Amount, DiskontText } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Sale from "../../../images/booking/SALE.svg";

import Image from "next/image";

const Diskont = ({ discountAmount, isInBasket }) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };

  return (
    <DiskontWrap isInBasket={isInBasket}>
      {/* <div>
        {" "}
        <Image
          src={Sale}
          alt="Sale"
          layout="fill"
          objectFit="contain"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // Optional blur-up while loading
        />
      </div> */}
      <DiskontText isInBasket={isInBasket}>%</DiskontText>
    </DiskontWrap>
  );
};

export default Diskont;
