import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { WrapSection, CloseX, Fixed, Week, WrapDates } from "./style.js";
import { Date, Price } from "../../oneWeek/style.js";

function ReservationModal({ handleClick, price, datum }) {
  const [data, setData] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [suma, setSuma] = useState(0);
  const [cijena, setCijena] = useState(0);
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [free, setFree] = useState("Free");
  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };
  function insert(str, value) {
    let position = str.length - 3;
    return str.substr(0, position) + value + str.substr(position);
  }
  return (
    <WrapSection>
      <CloseX onClick={handleClick}>X</CloseX>
      <Fixed>
        Dates selected: <br />{" "}
      </Fixed>
      <WrapDates>
        {datum.map((el) => (
          <Week>
            <Date>{el.datum}</Date>
            <Price>{insert(el.cijena.toString(), ".")} EUR</Price>
          </Week>
        ))}
      </WrapDates>
      <Fixed>
        Total price:
        <br /> {price} EUR
      </Fixed>

      <form onSubmit={handleSubmit}>
        <Fixed>Email:</Fixed>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <Fixed>Message:</Fixed>

        <textarea
          name="message"
          rows="4"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Your message..."
        ></textarea>
        <button type="submit"> Send reservation</button>
      </form>
    </WrapSection>
  );
}

export default ReservationModal;
