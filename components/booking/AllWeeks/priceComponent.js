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
  Alert,
  OverlayBlur,
} from "./style.js";

function PriceComponent({ price, data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageSentAlert, setIsMessageSentAlert] = useState(false);
  const [dates, setDates] = useState([]);
  // console.log("isOpen?", isModalOpen);

  const handleClick = () => {
    if (dates.length >= 5) {
      console.log("too many weeks");
    } else {
      setIsModalOpen((old) => !old);
    }
  };
  const handleModalOpen = () => {
    setIsModalOpen((old) => !old);
    setIsMessageSentAlert(true);
    setTimeout(() => {
      setIsMessageSentAlert(false);
    }, 3000);
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
      {isModalOpen && <OverlayBlur />}
      {isModalOpen && dates.length < 5 ? (
        <ReservationModal
          handleClick={handleClick}
          price={price}
          datum={dates}
          handleModalOpen={handleModalOpen}
        />
      ) : (
        ""
      )}
      {isMessageSentAlert && (
        <Alert>
          RESERVATION ENQUIRE SENT. <br />
          <br />
          We will get back to you as soon as possible
        </Alert>
      )}
      <WrapPrice>
        <WrapUp>
          <YourPrice>Your price</YourPrice>
          <Line />
          <Price>
            <PriceFrom>price from</PriceFrom>
            {price} EUR
          </Price>

          <Button onClick={handleClick}>SEND RESERVATION ENQUIRE</Button>
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
