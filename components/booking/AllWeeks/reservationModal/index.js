import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { WrapSection, CloseX, Fixed, Week, WrapDates } from "./style.js";
import { Date, Price } from "../../oneWeek/style.js";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ReservationModal({ handleClick, price, datum }) {
  const [data, setData] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [suma, setSuma] = useState(0);
  const [cijena, setCijena] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const [free, setFree] = useState("Free");
  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);

  const handleSubmit = (e) => {
    // dataLayer.push({ event: "PRO form bottom submitted" })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "reservation", email, message, datum }),
    }).then((res) => {
      // this.setState({ showModal: true });
      // window.dataLayer.push({
      //   event: "PRO form top submitted",
      //   // custom event params
      // });
      console.log("submitted");
      // setTimeout(() => {
      //   this.setState({ thanks: true });
      // }, 500);
      // setTimeout(() => {
      //   this.setState({
      //     ime: "",
      //     email: "",
      //     brojTelefona: "",
      //     imeObjekta: "",
      //     showModal: false,
      //     thanks: false,
      //     brojJedinica: "",
      //     mjesto: "",
      //     sustav: "",
      //   });
      // }, 10000);
    });

    e.preventDefault();
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
      <Fixed>Total price: {price} EUR</Fixed>

      <form
        onSubmit={handleSubmit}
        name="reservation"
        method="POST"
        data-netlify="true"
        netlify
      >
        {/* <Fixed>Email:</Fixed> */}
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* <Fixed>Message:</Fixed> */}

        <textarea
          placeholder="Your message"
          name="message"
          rows="4"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button type="submit"> Send reservation enquire</button>
      </form>
    </WrapSection>
  );
}

export default ReservationModal;
