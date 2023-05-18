import React, { useState, useEffect } from "react";

import { NamirnicaWrap, Price, Namirnica } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Diskont from "../../Namirnica/diskont.js";

const Week = ({
  datum,
  cijena,
  selected,
  free,
  handleClick,
  id,
  //   handleSelect,
  checkHandler,
  mjernaJedinica,
  handleMarker,
  kategorija,
  marked,
  discount,
  discountAmount,
  naziv,
}) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };
  const [startD, setStartD] = useState("");
  const [endD, setEndD] = useState(false);

  // useEffect(() => {
  //   let newStartDate = new Date(startDate.seconds * 1000);
  //   let newEndDate = new Date(endDate.seconds * 1000);
  //   let newStartMonth = newStartDate.getMonth() + 1;
  //   let newEndMonth = newEndDate.getMonth() + 1;
  //   let newStartDay = newStartDate.getDate();
  //   let newEndDay = newEndDate.getDate();
  //   setStartD(newStartDay + "/" + newStartMonth);
  //   setEndD(newEndDay + "/" + newEndMonth);
  // }, []);
  return (
    <NamirnicaWrap
      isFree={free}
      marked={marked}
      onClick={() => {
        handleClick();
        // handleSelect();
        handleMarker();
      }}
      selected={selected}
      kategorija={kategorija}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Namirnica>{naziv} </Namirnica>
        <Price> {cijena} €</Price>
        <Namirnica>/{mjernaJedinica} </Namirnica>
      </div>
      <div>
        <Namirnica>{kategorija}</Namirnica>
      </div>
      {discount && <Diskont discountAmount={discountAmount} />}
    </NamirnicaWrap>
  );
};

export default Week;
