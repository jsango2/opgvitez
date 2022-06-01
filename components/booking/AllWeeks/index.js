import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Week from "../oneWeek/week";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase/firebase";
import bg from "../../../images/booking/bg.png";

import { Wrap, PopupForm, WrapSection, Title, Overlay } from "./style.js";
import PriceComponent from "./priceComponent";

function AllWeeks() {
  const [data, setData] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [suma, setSuma] = useState(0);
  const [datum, setDatum] = useState(null);
  const [cijena, setCijena] = useState(0);
  const [free, setFree] = useState("Free");
  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);
  const dbInstance = collection(database, "Charter");
  const dbInstance2 = collection(database, "Charter");

  auth.onAuthStateChanged((user) => {
    if (user) {
      // props.setCurrentUser(user);
      setlogedIn(true);

      console.log("OnAuthStateChanged: Logged in");
    } else {
      console.log("OnAuthStateChanged: Logged out");
      setlogedIn(false);
    }
  });

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance).then((data) => {
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setData(podaci);
      });
    };
    getNotes();
  }, []);

  const handleClick = (id) => {
    setIsOpen(true);
    const docRef = doc(dbInstance2, id);
    getDoc(docRef).then((doc) => {
      setCijena(doc.data().cijena);
      setDatum(doc.data().datum);
    });
  };

  useEffect(() => {
    let sum = 0;
    data.map((object) => {
      if (object.selected === true) {
        sum = sum + object.cijena;
      }
    });
    setSuma(sum);
  }, [data]);

  const handleMarker = (id) => {
    const newState = data.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id && obj.selected === false) {
        return { ...obj, selected: true };
      }
      if (obj.id === id && obj.selected === true) {
        return { ...obj, selected: false };
      }
      // 👇️ otherwise return object as is
      return obj;
    });
    setData(newState);
  };

  return (
    <WrapSection>
      <Overlay />
      <Image
        src={bg}
        alt="booking"
        layout="fill"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <Title>FREE BOOKING DATES</Title>
      <Wrap>
        {data.map((week) => (
          <Week
            key={week.id}
            id={week.id}
            datum={week.datum}
            cijena={week.cijena}
            selected={selected}
            free={week.free}
            marked={week.selected}
            handleClick={() => handleClick(week.id)}
            handleMarker={() => handleMarker(week.id)}
          />
        ))}
      </Wrap>
      <PriceComponent price={suma} data={data} />

      {/* {isOpen && (
        <PopupForm>
          <form>
            <input
              name="datum"
              type="text"
              value={datum}
              onChange={(event) => setDatum(event.target.value)}
            />
            <br />

            <input
              name="cijena"
              type="number"
              value={cijena}
              onChange={(event) => setCijena(event.target.value)}
            />
            <br />

            <select
              name="Free"
              type="select"
              value={free}
              onChange={(event) => setFree(event.target.value)}
            >
              <option value="Free">Free</option>
              <option value="Booked">Booked</option>
            </select>
          </form>
        </PopupForm>
      )} */}
    </WrapSection>
  );
}

export default AllWeeks;
