import React, { useState, useEffect, useRef } from "react";
import ReservationModal from "./reservationModal/index.js";
import { CSSTransition } from "react-transition-group";

import {
  WrapPrice,
  WrapUp,
  Price,
  Alert,
  OverlayBlur,
  OrdersIndex,
  WrapBottomBar,
} from "./style.js";
import useWindowSize from "../../useWindowSize";
import { BsCart2 } from "react-icons/bs";
import { PriceKn } from "../Namirnica/style.js";

function PriceComponent({
  price,
  data,
  handleOpenKosarica,
  countOrders,
  kosaricaIsOpen,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageSentAlert, setIsMessageSentAlert] = useState(false);
  const [dates, setDates] = useState([]);
  const [isTooMany, setIsTooMany] = useState(false);
  const [inProp, setInProp] = useState(false);
  const size = useWindowSize();
  // console.log("isOpen?", isModalOpen);

  const duration = 1000;

  const handleClick = () => {
    if (dates.length >= 5) {
      setIsTooMany(true);
      setTimeout(() => {
        setIsTooMany(false);
      }, 2000);
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
  // useEffect(() => {
  //   var newArray = data.filter(function (el) {
  //     return el.selected === true;
  //   });
  //   let dateArray = [];
  //   newArray.map((el) => {
  //     dateArray.push(el.datum);
  //   });
  //   // setDates(dateArray);
  //   setDates(newArray);
  // }, [data]);
  useEffect(() => {
    var newArray = data.filter(function (el) {
      return el.selected === true;
    });
    let dateArray = [];
    newArray.map((el) => {
      dateArray.push(el.startDate, el.endDate, el.discount);
    });
    // setDates(dateArray);
    setDates(newArray);
  }, [data]);

  useEffect(() => {
    if ((countOrders = 1)) {
      setInProp(true);
    }
  }, [countOrders]);

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
          RESERVATION INQUIRE SENT. <br />
          <br />
          We will get back to you as soon as possible
        </Alert>
      )}
      <WrapPrice onClick={handleOpenKosarica}>
        <WrapUp>
          {size.width > 1000 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: "200px",
                marginRight: "30px",
              }}
            >
              <Price>Ukupni iznos košarice: {price.toFixed(2)} €</Price>
              <PriceKn>{(price * 7.5435).toFixed(2)} kn</PriceKn>
            </div>
          )}

          <div style={{ position: "relative" }}>
            <BsCart2
              style={{
                cursor: "pointer",
              }}
            />

            {/* {countOrders > 0 && ( */}
            <OrdersIndex
              className={`  ${countOrders > 0 ? "counterOn" : "counterOff"}`}
            >
              {" "}
              {countOrders}
            </OrdersIndex>
            {/* )} */}
          </div>
        </WrapUp>
        {/* {size.width > 600 ? <Legend /> : ""} */}
      </WrapPrice>
    </>
  );
}

export default PriceComponent;
