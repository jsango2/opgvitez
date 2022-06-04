import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Week from "../AllWeeksAdmin/oneWeek/week";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, database } from "../../firebase/firebase";
import bg from "../../../images/booking/bg.png";

import {
  Wrap,
  PopupForm,
  WrapSection,
  Title,
  Overlay,
  Fixed,
  LogOut,
} from "./style.js";
import PriceComponent from "./priceComponent";
import { CloseX } from "../AllWeeks/reservationModal/style";

function AllWeeks({ handleLogOut, userEmail }) {
  const [data, setData] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [suma, setSuma] = useState(0);
  const [datum, setDatum] = useState(null);
  const [weekId, setWeekId] = useState(null);
  const [cijena, setCijena] = useState(0);
  const [free, setFree] = useState(true);
  const [selected, setSelected] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);
  const dbInstance = collection(database, "Charter2");
  const dbInstance2 = collection(database, "Charter2");
  const dbInstance4 = collection(database, "Charter3");

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
      getDocs(dbInstance4).then((data) => {
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
    const docRef = doc(dbInstance4, id);
    getDoc(docRef).then((doc) => {
      setCijena(doc.data().cijena);
      setDatum(doc.data().datum);
      setWeekId(id);
      setFree(doc.data().free);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("sent", weekId);
    const dataToUpdate = doc(dbInstance4, weekId);

    // Set the "capital" field of the city 'DC'
    updateDoc(dataToUpdate, {
      cijena: cijena,
      datum: datum,
      free: free,
      occupied: false,
      selected: false,
    }).then(
      setDataSent((oldData) => !oldData),
      setIsOpen(false)
    );
  };

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance4).then((data) => {
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setData(podaci);
      });
    };
    getNotes();
  }, [dataSent]);

  //   const handleSelect = (id) => {
  //     let sel = [];
  //     const docRef = doc(dbInstance2, id);
  //     getDoc(docRef).then((doc) => {
  //       const index = selectedWeeks.findIndex(
  //         (val) => val.datum === doc.data().datum
  //       );
  //       console.log(index);
  //       if (index === -1) {
  //         setSelectedWeeks((oldArray) => [...oldArray, doc.data()]);
  //       }
  //     });
  //   };

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
  const handleClose = (id) => {
    setIsOpen(false);
  };
  function insert(str, value) {
    let position = str.length - 3;
    if (str.length <= 3) {
      return str;
    } else return str.substr(0, position) + value + str.substr(position);
  }
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
      <Title>ADMIN BOOKING SYSTEM</Title>
      <LogOut onClick={handleLogOut}>LOG OUT {userEmail}</LogOut>
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
            // handleSelect={() => handleSelect(week.id)}
            handleMarker={() => handleMarker(week.id)}
          />
        ))}
      </Wrap>
      <PriceComponent price={suma} />

      {isOpen && (
        <PopupForm>
          <CloseX onClick={handleClose}>X</CloseX>
          <Fixed>Edit week:</Fixed>
          <form onSubmit={handleSubmit}>
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
              onChange={(event) => setCijena(parseInt(event.target.value))}
            />{" "}
            <br />
            <select
              name="Free"
              type="select"
              value={free}
              onChange={(event) => {
                setFree(event.target.value === "true" ? true : false);
              }}
            >
              <option value={true}>Free</option>
              <option value={false}>Booked</option>
            </select>
            <button type="submit">Save</button>
          </form>
        </PopupForm>
      )}
    </WrapSection>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();

//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   };
// }

export default AllWeeks;
