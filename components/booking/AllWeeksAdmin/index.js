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
  deleteDoc,
} from "firebase/firestore";
import { auth, database } from "../../firebase/firebase";
import bg from "../../../images/booking/bg.png";
import moment from "moment";
import {
  Wrap,
  PopupForm,
  WrapSection,
  Title,
  Overlay,
  Fixed,
  LogOut,
  NewWeek,
  HomeLink,
} from "./style.js";
import PriceComponent from "./priceComponent";
import { CloseX } from "../AllWeeks/reservationModal/style";
import DatePicker from "react-datepicker";
import { parse } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

function AllWeeks({ handleLogOut, userEmail }) {
  const [data, setData] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [suma, setSuma] = useState(0);
  const [datum, setDatum] = useState(null);
  const [discount, setDiscount] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [weekId, setWeekId] = useState(null);
  const [cijena, setCijena] = useState(0);
  const [free, setFree] = useState(true);
  const [newDatum, setNewDatum] = useState(null);
  const [newCijena, setNewCijena] = useState(0);
  const [newFree, setNewFree] = useState(true);
  //---datepicker---//
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //------------------

  const [selected, setSelected] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNewWeekOpen, setIsNewWeekOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);
  const dbInstance = collection(database, "Charter2");
  const dbInstance2 = collection(database, "Charter2");
  const dbInstance4 = collection(database, "Charter3");

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
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClick = (id) => {
    setIsOpen(true);
    const docRef = doc(dbInstance4, id);
    getDoc(docRef).then((doc) => {
      setCijena(doc.data().cijena);
      setDatum(doc.data().datum);
      setWeekId(id);
      setFree(doc.data().free);
      setDiscount(doc.data().discount);
      setDiscountAmount(doc.data().discountAmount);

      setStartDate(doc.data().startDate.toDate());
      setEndDate(doc.data().endDate.toDate());
    });
  };
  const handleNewWeek = () => {
    setIsNewWeekOpen(true);
  };
  const handleNewWeekClose = () => {
    setIsNewWeekOpen(false);
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
      discount: discount,
      discountAmount: discountAmount,
      startDate: startDate,
      endDate: endDate,
    }).then(
      setDataSent((oldData) => !oldData),
      setIsOpen(false)
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    // console.log("sent", weekId);
    const dataToDelete = doc(dbInstance4, weekId);
    deleteDoc(dataToDelete).then(setIsOpen(false));
  };
  const handleSubmitNewWeek = (e) => {
    // e.preventDefault();
    // console.log("sent", weekId);
    // const dataToUpdate = doc(dbInstance4, weekId);

    // Set the "capital" field of the city 'DC'
    addDoc(dbInstance4, {
      datum: newDatum,
      cijena: newCijena,
      free: newFree,
      selected: false,
      occupied: false,
      discount: discount,
      discountAmount: discountAmount,
      startDate: startDate,
      endDate: endDate,
    }).then(setIsNewWeekOpen(false));
  };

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance4).then((data) => {
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
  }, [dataSent, isOpen, isNewWeekOpen]);

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
      <HomeLink>
        <Link href="/">Home</Link>
      </HomeLink>
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
      <LogOut onClick={handleLogOut}>
        LOG OUT <br />
        {userEmail}
      </LogOut>
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
            discount={week.discount}
            discountAmount={week.discountAmount}
            startDate={week.startDate}
            endDate={week.endDate}
          />
        ))}
      </Wrap>
      <PriceComponent price={suma} />
      <NewWeek onClick={handleNewWeek}>ADD NEW WEEK</NewWeek>
      {isNewWeekOpen && (
        <PopupForm>
          <CloseX onClick={handleNewWeekClose}>X</CloseX>
          <Fixed>Add new week:</Fixed>
          <form onSubmit={handleSubmitNewWeek}>
            {/* <input
              name="datum"
              type="text"
              value={newDatum}
              onChange={(event) => setNewDatum(event.target.value)}
            /> */}
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              // inline
            />
            <br />
            <label htmlFor="cijena" style={{ color: "darkblue" }}>
              Price
            </label>
            <input
              name="cijena"
              type="number"
              value={newCijena}
              onChange={(event) => setNewCijena(parseInt(event.target.value))}
            />{" "}
            <br />
            <label htmlFor="Free" style={{ color: "darkblue" }}>
              Status
            </label>
            <select
              name="Free"
              type="select"
              value={newFree}
              onChange={(event) => {
                setNewFree(event.target.value === "true" ? true : false);
              }}
            >
              <option value={true}>Free</option>
              <option value={false}>Booked</option>
            </select>
            <label htmlFor="discount" style={{ color: "darkblue" }}>
              Discount
            </label>
            <div
              style={{
                color: "darkblue",
                marginRight: "auto",
                marginBottom: "20px",
              }}
            ></div>
            <div style={{ display: "flex", width: "90%" }}>
              <input
                style={{ width: "20px", marginRight: "20px" }}
                type="checkbox"
                name="discount"
                // defaultChecked={discount}
                checked={discount}
                // defaultChecked={discount}
                onChange={() => setDiscount(!discount)}
              ></input>
              {/* <input
                style={{ width: "120px" }}
                name="discount AMount"
                type="number"
                value={discountAmount}
                onChange={(event) => setDiscountAmount(event.target.value)}
              />{" "} */}
            </div>
            <div className="wrapButtonsForm">
              <button type="submit">Save</button>
            </div>
          </form>
        </PopupForm>
      )}

      {isOpen && (
        <PopupForm>
          <CloseX onClick={handleClose}>X</CloseX>
          <Fixed>Edit week:</Fixed>
          <form onSubmit={handleSubmit}>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              // inline
            />
            <br />
            <label htmlFor="cijena" style={{ color: "darkblue" }}>
              Price
            </label>
            <input
              name="cijena"
              type="number"
              value={cijena}
              onChange={(event) => setCijena(parseInt(event.target.value))}
            />{" "}
            <br />
            <label htmlFor="Free" style={{ color: "darkblue" }}>
              Status
            </label>
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
            <div
              style={{ display: "flex", width: "90%", alignItems: "center" }}
            >
              <label
                htmlFor="discount"
                style={{
                  color: "darkblue",
                  marginBottom: "20px",
                  marginRight: "10px",
                }}
              >
                Sale
              </label>
              <input
                style={{ width: "20px", marginRight: "20px" }}
                type="checkbox"
                name="discount"
                checked={discount}
                // defaultChecked={discount}
                onChange={() => setDiscount(!discount)}
              ></input>
              {/* <input
                style={{ width: "120px" }}
                name="discount AMount"
                type="number"
                value={discountAmount}
                onChange={(event) => setDiscountAmount(event.target.value)}
              />{" "} */}
              {/* <div style={{ color: "darkblue" }}>%</div> */}
            </div>
            <div style={{ display: "flex" }} className="wrapButtonsForm">
              <button type="submit">Save</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
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
