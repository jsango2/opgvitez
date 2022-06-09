import React, { useState, useEffect } from "react";

import { WeekWrap, Price, Dates } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Diskont from "../../oneWeek/diskont.js";

const Week = ({
  datum,
  cijena,
  selected,
  free,
  handleClick,
  id,
  //   handleSelect,
  handleMarker,
  marked,
  discount,
  discountAmount,
  startDate,
  endDate,
}) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };
  const [startD, setStartD] = useState("");
  const [endD, setEndD] = useState("");
  useEffect(() => {
    let newStartDate = new Date(startDate.seconds * 1000);
    let newEndDate = new Date(endDate.seconds * 1000);
    let newStartMonth = newStartDate.getMonth() + 1;
    let newEndMonth = newEndDate.getMonth() + 1;
    let newStartDay = newStartDate.getDate();
    let newEndDay = newEndDate.getDate();
    console.log(newStartDay, newEndDay);
    setStartD(newStartDay + "/" + newStartMonth);
    setEndD(newEndDay + "/" + newEndMonth);
  }, []);
  return (
    <WeekWrap
      isFree={free}
      marked={marked}
      onClick={() => {
        handleClick();
        // handleSelect();
        handleMarker();
      }}
      selected={selected}
    >
      <Dates>
        {startD} - {endD}
      </Dates>
      <Price>{cijena} EUR</Price>
      {discount && <Diskont discountAmount={discountAmount} />}
    </WeekWrap>
  );
};

export default Week;
