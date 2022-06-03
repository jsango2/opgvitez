import React, { useState, useEffect } from "react";

import { WeekWrap, Price, Date } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

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
}) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };

  useEffect(() => {
    let num = cijena.toString();
    function insert(str, index, value) {
      return str.substr(0, index) + value + str.substr(index);
    }
  }, [cijena]);

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
      <Date>{datum}</Date>
      <Price>{cijena} EUR</Price>
    </WeekWrap>
  );
};

export default Week;
