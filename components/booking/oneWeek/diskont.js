import React, { useState, useEffect } from "react";

import { DiskontWrap, Amount } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const Diskont = ({ discountAmount }) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };

  return (
    <DiskontWrap>
      <Amount>-{discountAmount}%</Amount>
    </DiskontWrap>
  );
};

export default Diskont;
