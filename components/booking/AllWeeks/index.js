import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Week from "../oneWeek/week";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase/firebase";
import bg from "../../../images/booking/bg.png";

import {
  Wrap,
  PopupForm,
  WrapSection,
  Title,
  Overlay,
  Loading,
  SubTitle,
} from "./style.js";
import PriceComponent from "./priceComponent";

import Legend from "./legend";
import useWindowSize from "../../useWindowSize";

function AllWeeks() {
  const size = useWindowSize();
  const [data, setData] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [suma, setSuma] = useState(0);
  const [length, setLength] = useState(0);
  const [datum, setDatum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cijena, setCijena] = useState(0);
  const [free, setFree] = useState("Free");
  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);
  const dbInstance = collection(database, "Charter2");
  const dbInstance2 = collection(database, "Charter2");
  const dbInstance3 = collection(database, "Charter2");
  const dbInstance4 = collection(database, "Charter3");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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
  // funkcija za batch zapis arraya u firestore sa zasebnim id-jem
  // useEffect(() => {
  //   Data.map((el) => {
  //     addDoc(dbInstance4, {
  //       datum: el.datum,
  //       cijena: el.cijena,
  //       free: el.free,
  //       selected: false,
  //       occupied: false,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance4).then((data) => {
        // console.log(data.docs.length);
        data.docs.length !== 0 ? setIsLoading(false) : setIsLoading(true);
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setData(
          podaci.sort((a, b) => {
            let da = new Date(a.startDate.seconds);
            let db = new Date(b.startDate.seconds);
            return da - db;
          })
        );
      });
    };
    getNotes();
  }, []);

  console.log(data);
  const handleClick = (id) => {
    setIsOpen(true);
    const docRef = doc(dbInstance4, id);
    getDoc(docRef).then((doc) => {
      setCijena(doc.data().cijena);
      setDatum(doc.data().datum);
      setStartDate(doc.data().startDate);
      setEndDate(doc.data().endDate);
      setDatum(doc.data().datum);
    });
  };
  //zbroji eure svih tjedana
  useEffect(() => {
    let sum = 0;
    data.map((object) => {
      if (object.selected === true) {
        sum = sum + object.cijena;
      }
    });
    setSuma(sum);
  }, [data]);
  //idi kroz array nakon svakog klika tjedna i promjeni state selected u true

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
    //provjeri broj odabranih tjedana i dozvoli max 6 selected
    setData(newState);
    let leng = [];
    newState.map((e) => {
      if (e.selected === true) {
        leng.push(e);
      }
    });
    setLength(leng.length);
  };
  function insert(str, value) {
    let position = str.length - 3;
    if (str.length <= 3) {
      return str;
    } else return str.substr(0, position) + value + str.substr(position);
  }
  return (
    <WrapSection id="booking">
      <Overlay />
      <Image
        src={bg}
        alt="booking"
        layout="fill"
        objectFit="cover"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <Title>FREE BOOKING DATES</Title>
      <SubTitle>Choose your dates and make reservation</SubTitle>
      {size.width < 600 ? <Legend /> : ""}

      {isLoading ? (
        <>
          <Loading>LOADING...</Loading>
          <div className="animatedLine"></div>
        </>
      ) : (
        <Wrap>
          {data.map((week) => (
            <Week
              key={week.id}
              id={week.id}
              datum={week.datum}
              cijena={insert(week.cijena.toString(), ".")}
              selected={selected}
              free={week.free}
              marked={week.selected}
              handleClick={() => handleClick(week.id)}
              handleMarker={() => handleMarker(week.id)}
              length={length}
              discount={week.discount}
              discountAmount={week.discountAmount}
              startDate={week.startDate}
              endDate={week.endDate}
            />
          ))}
        </Wrap>
      )}

      <PriceComponent price={insert(suma.toString(), ".")} data={data} />
    </WrapSection>
  );
}

export default AllWeeks;
