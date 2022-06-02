import React, { useState, useEffect } from "react";
import ReservationModal from "./reservationModal/index.js";

import {
  WrapPrice,
  WrapUp,
  YourPrice,
  Line,
  PriceFrom,
  Button,
  Price,
  WrapDown,
  WrapBox,
  Box,
  WrapSelected,
  WrapOccupied,
  WrapFree,
  Free,
  Occupied,
  Selected,
} from "./style.js";

function PriceComponent({ price, data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dates, setDates] = useState([]);
  // console.log("isOpen?", isModalOpen);

  const handleClick = () => {
    setIsModalOpen((old) => !old);
  };
  // console.log(data);
  useEffect(() => {
    var newArray = data.filter(function (el) {
      return el.selected === true;
    });
    let dateArray = [];
    newArray.map((el) => {
      dateArray.push(el.datum);
    });
    // setDates(dateArray);
    setDates(newArray);
  }, [data]);
  return (
    <>
      {isModalOpen && (
        <ReservationModal
          handleClick={handleClick}
          price={price}
          datum={dates}
        />
      )}
      <WrapPrice>
        <WrapUp>
          <YourPrice>Your price</YourPrice>
          <Line />
          <Price>
            <PriceFrom>price from</PriceFrom>
            {price} EUR
          </Price>

          <Button onClick={handleClick}>MAKE A RESERVATION</Button>
        </WrapUp>
        <WrapDown>
          <WrapBox>
            <Box color="#BDBDBD" />
            Occupied
          </WrapBox>
          <WrapBox>
            <Box color="#2C5F7B" />
            Selected
          </WrapBox>
          <WrapBox>
            <Box color="#68BFE2" />
            Free
          </WrapBox>
        </WrapDown>
      </WrapPrice>
    </>
  );
}

export default PriceComponent;
