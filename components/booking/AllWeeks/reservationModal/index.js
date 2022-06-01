import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { WrapSection, CloseX, Fixed } from "./style.js";

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
  return (
    <WrapSection>
      <CloseX onClick={handleClick}>X</CloseX>
      <Fixed>
        Total price:
        <br /> {price} EUR
      </Fixed>
      <Fixed>
        Dates selected: <br /> {datum}
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
        <button type="submit"> send reservation enquire</button>
      </form>
    </WrapSection>
  );
}

export default ReservationModal;
