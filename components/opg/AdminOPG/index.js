import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Papa from "papaparse";
import Week from "./oneWeek/week";
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

import useOnClickOutside from "../../helper/useOnClickOutside";

import {
  Wrap,
  PopupForm,
  WrapSection,
  Title,
  Overlay,
  BlurOverlay,
  Fixed,
  LogOut,
  NoviProizvodButton,
  HomeLink,
  Icon,
  WrapImageInEditor,
  WrapTwo,
  SingleInputSelect,
  ButtonsWrap,
} from "./style.js";
import PriceComponent from "./priceComponent";
import { CloseX } from "../Namirnice/reservationModal/style";
import DatePicker from "react-datepicker";
import { parse } from "date-fns";
// import {PopupForm} from "./PopupForm/index";
import "react-datepicker/dist/react-datepicker.css";
// import { Button } from "../../button/style";
import Button from "../../button/index";
import Formular from "./PopupForm";
import { FiSearch } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";

import {
  Kategorije,
  Lista,
  SearchIcon,
  WrapHeader,
  WrapInputSelector,
  WrapLista,
} from "../Namirnice/style";
import Namirnica from "../Namirnica/namirnica";
// import PopupForm from "./PopupForm/index";

function Proizvodi({ handleLogOut, userEmail }) {
  const [data, setData] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [listKategorija, setListKategorija] = useState([]);
  const [suma, setSuma] = useState(0);
  const [datum, setDatum] = useState(null);
  const [discount, setDiscount] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [weekId, setWeekId] = useState(null);
  const [cijena, setCijena] = useState(0);
  const [naziv, setNaziv] = useState("");
  const [free, setFree] = useState(true);
  const [newDatum, setNewDatum] = useState(null);
  const [newCijena, setNewCijena] = useState(0);
  const [newNaziv, setNewNaziv] = useState("");
  const [newMjernaJedinica, setNewMjernaJedinica] = useState("1kg");
  const [mjernaJedinica, setMjernaJedinica] = useState("");
  const [newKategorija, setNewKategorija] = useState("");
  const [kategorija, setKategorija] = useState("Sve");
  const [queryKategorija, setQueryKategorija] = useState("Sve");
  const [newFree, setNewFree] = useState(true);
  const [partner, setPartner] = useState(false);
  const [newPartner, setNewPartner] = useState(false);
  const [file, setFile] = useState();
  const [logoUtrke, setLogoUtrke] = useState(null);
  const [fileBase64String, setFileBase64String] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [fileSizeTooLarge, setFileSizeTooLarge] = useState(false);

  const [state, setstate] = useState({
    query: "",
    list: [],
  });
  //---datepicker---//
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);

  //------------------

  const [selected, setSelected] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNewProductOpen, setisNewProductOpen] = useState(false);
  const [logedIn, setlogedIn] = useState(null);
  const [isQueryOpen, setIsQueryOpen] = useState(true);
  const dbInstance = collection(database, "Charter2");
  const dbInstance2 = collection(database, "Charter2");
  const dbInstance4 = collection(database, "Charter3");
  const refs = useRef();
  useOnClickOutside(refs, () => setIsQueryOpen(false));
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
  useEffect(() => {
    setKategorija(queryKategorija);
  }, [queryKategorija]);

  const handleClick = (id) => {
    setIsOpen(true);
    const docRef = doc(dbInstance4, id);
    getDoc(docRef).then((doc) => {
      setCijena(doc.data().cijena);
      // setDatum(doc.data().datum);
      setWeekId(id);
      setNaziv(doc.data().naziv);
      setMjernaJedinica(doc.data().mjernaJedinica);
      setKategorija(doc.data().kategorija);
      setFree(doc.data().free);
      setDiscount(doc.data().discount);
      setDiscountAmount(doc.data().discountAmount);
      setFileBase64String(doc.data().foto);
    });
  };
  const handleNewProduct = () => {
    setisNewProductOpen(true);
  };
  const handleNewProductClose = () => {
    setisNewProductOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("sent", weekId);
    const dataToUpdate = doc(dbInstance4, weekId);

    // Set the "capital" field of the city 'DC'
    updateDoc(dataToUpdate, {
      cijena: cijena,
      // datum: datum,
      free: free,
      naziv: naziv,
      mjernaJedinica: mjernaJedinica,
      kategorija: kategorija,
      occupied: false,
      selected: false,
      discount: discount,
      discountAmount: discountAmount,
      partner: partner,
      foto: fileBase64String ? fileBase64String : null,
    }).then(
      setDataSent((oldData) => !oldData),
      setIsOpen(false)
    );
  };
  const handleDelete = (e) => {
    console.log("deleted");
    e.preventDefault();
    // console.log("sent", weekId);
    const dataToDelete = doc(dbInstance4, weekId);
    deleteDoc(dataToDelete).then(setIsOpen(false));
  };
  const handleSubmitNewProduct = (e) => {
    addDoc(dbInstance4, {
      cijena: newCijena,
      naziv: newNaziv,
      mjernaJedinica: newMjernaJedinica,
      kategorija: newKategorija,
      free: newFree,
      selected: false,
      occupied: false,
      discount: discount,
      discountAmount: discountAmount,
      partner: newPartner,
      foto: fileBase64String ? fileBase64String : null,
    }).then(
      setisNewProductOpen(false),
      setNewNaziv(""),
      setNewCijena(),
      setNewKategorija(""),
      setFileSize(0)
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
  }, [dataSent, isOpen, isNewProductOpen]);

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

  const checkHandler = () => {
    setFree(!free);
    console.log("kliknuto");
  };

  useEffect(() => {
    setSortedList(data.sort((a, b) => a.naziv.localeCompare(b.naziv)));
  }, [data]);

  useEffect(() => {
    setListKategorija(
      sortedList.filter((kat) => kat.kategorija === queryKategorija)
    );
  }, [queryKategorija]);

  useEffect(() => {
    state.query.length > 0 ? setIsQueryOpen(true) : setIsQueryOpen(false);
  }, [state.query]);

  const filteredData = data.filter(
    (week) => week.kategorija === kategorija && week.free
  );
  const dataRaspolozivo = data.filter((week) => week.free);
  const dataFeatured = data.filter((product) => product.discount);
  // useEffect(() => {
  //   setCartData(data.filter((item) => item.cartStanje > 0));
  // }, [data]);

  const handleChange = (e) => {
    const results = dataRaspolozivo.filter((post) => {
      if (e.target.value === "") return data;

      return post.naziv.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  const onFileChange = (event) => {
    // setSelectedFile(event.target.files);
    // setPhotoFromInput(event.file.originFileObj);
    var file = event.target.files[0];
    var size = (file.size / 1024).toFixed(1); // MB
    if (size < 800) {
      encodeFileBase64(event.target.files[0]);
      setFileSize(size);

      setFileSizeTooLarge(false);
    } else {
      setFileSize(size);

      setFileSizeTooLarge(true);
    }
  };

  const encodeFileBase64 = (file) => {
    console.log(file);
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        setFileBase64String(Base64);
        setLogoUtrke(Base64);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  };

  return (
    <>
      {/* {isQueryOpen && state.list.length > 0 && <BlurOverlay />} */}
      <WrapHeader>
        <WrapInputSelector>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <input type="search" value={state.query} onChange={handleChange} />

          {isQueryOpen && state.list.length > 0 && (
            <WrapLista>
              <Lista style={{ color: "black" }} ref={refs}>
                {state.query === ""
                  ? ""
                  : state.list.map((week) => (
                      <Week
                        key={week.id}
                        id={week.id}
                        // datum={week.datum}
                        cijena={week.cijena}
                        selected={selected}
                        free={week.free}
                        kategorija={week.kategorija}
                        mjernaJedinica={week.mjernaJedinica}
                        marked={week.selected}
                        naziv={week.naziv}
                        handleClick={() => handleClick(week.id)}
                        // handleSelect={() => handleSelect(week.id)}
                        handleMarker={() => handleMarker(week.id)}
                        discount={week.discount}
                        discountAmount={week.discountAmount}
                        checkHandler={() => checkHandler(week.id)}
                      />
                    ))}
              </Lista>
            </WrapLista>
          )}
        </WrapInputSelector>
        <Kategorije>
          {/* <div htmlFor="Free" style={{ color: "darkblue" }}>
            Kategorija proizvoda
          </div> */}
          <select
            name="Kategorija"
            type="select"
            value={queryKategorija}
            onChange={(event) => {
              setQueryKategorija(event.target.value);
            }}
          >
            <option value="Sve">Sve</option>
            <option value="Voće">Voće</option>
            <option value="Salate">Salate</option>
            <option value="Povrće">Povrće</option>
            <option value="Agrumi">Agrumi</option>
            <option value="Suho voće">Suho voće</option>
            <option value="Egzotično voće">Egzotično voće</option>
            <option value="Gljive">Gljive</option>
            <option value="Prerađevine">Prerađevine</option>
            <option value="Žitarice, sjemenke, arašidi">Prerađevine</option>
            <option value="Med i pčelinji proizvodi">
              Med i pčelinji proizvodi
            </option>
            <option value="Veronika (mini mljekara)">
              Veronika (mini mljekara)
            </option>
            <option value="Domaća tjestenina (Nada)">
              Domaća tjestenina (Nada)
            </option>
            <option value="Začinsko bilje i klice">
              Začinsko bilje i klice
            </option>
          </select>
        </Kategorije>

        {/* {cartData.length > 0 && (
          <OrderButton
            onClick={() => {
              // checkout();
              handleOrder(data);
            }}
            style={{ marginLeft: "20px" }}
          >
            Dovrši kupovinu
          </OrderButton>
        )} */}
        <LogOut onClick={handleLogOut}>
          LOG OUT <br />
          {userEmail}
        </LogOut>
      </WrapHeader>

      <WrapSection>
        <HomeLink>
          <Link href="/">Home</Link>
        </HomeLink>
        {/* <Overlay /> */}
        {/* <Image
        src={bg}
        alt="booking"
        layout="fill"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /> */}
        <Title>OPG VITEZ NAMIRNICE - ADMIN</Title>
        <NoviProizvodButton onClick={handleNewProduct}>
          DODAJ NOVI PROIZVOD
        </NoviProizvodButton>{" "}
        {csvData.map((item) => (
          <div style={{ color: "black" }}>{item}</div>
        ))}
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => {
            const files = e.target.files;
            console.log(files);
            if (files) {
              console.log(files[0]);
              Papa.parse(files[0], {
                complete: function (results) {
                  setCsvData(results.data[0]);
                  console.log("Finished:", results.data[0]);
                },
              });
            }
          }}
        />
        <Wrap>
          {queryKategorija === "Sve"
            ? sortedList.map((week) => (
                <Week
                  key={week.id}
                  id={week.id}
                  // datum={week.datum}
                  cijena={week.cijena}
                  selected={selected}
                  free={week.free}
                  kategorija={week.kategorija}
                  mjernaJedinica={week.mjernaJedinica}
                  marked={week.selected}
                  naziv={week.naziv}
                  handleClick={() => handleClick(week.id)}
                  // handleSelect={() => handleSelect(week.id)}
                  handleMarker={() => handleMarker(week.id)}
                  discount={week.discount}
                  discountAmount={week.discountAmount}
                  checkHandler={() => checkHandler(week.id)}
                />
              ))
            : listKategorija.map((week) => (
                <>
                  <Week
                    key={week.id}
                    id={week.id}
                    // datum={week.datum}
                    cijena={week.cijena}
                    selected={selected}
                    free={week.free}
                    kategorija={week.kategorija}
                    mjernaJedinica={week.mjernaJedinica}
                    marked={week.selected}
                    naziv={week.naziv}
                    handleClick={() => handleClick(week.id)}
                    // handleSelect={() => handleSelect(week.id)}
                    handleMarker={() => handleMarker(week.id)}
                    discount={week.discount}
                    discountAmount={week.discountAmount}
                    checkHandler={() => checkHandler(week.id)}
                  />
                </>
              ))}
          {queryKategorija.length === 0 && (
            <div style={{ color: "black" }}>Nema proizvoda u kategoriji</div>
          )}
        </Wrap>
        {/* <PriceComponent price={suma} /> */}
        {isNewProductOpen && (
          <PopupForm>
            {/* <Formular
          naslov="Dodaj novi proizvod:"
          handleSubmit={handleSubmitNewProduct}
          setNewNaziv={setNewNaziv}
          newNaziv={newNaziv}
          setNewKategorija={setNewKategorija}
          newKategorija={newKategorija}
          setNewMjernaJedinica={setNewMjernaJedinica}
          newMjernaJedinica={newMjernaJedinica}
          setNewCijena={setNewCijena}
          newCijena={newCijena}
          setDiscount={setDiscount}
          discount={discount}
          setNewFree={setNewFree}
          newFree={newFree}
          buttonSave={true}
          buttonDelete={false}
          handleClose={handleNewProductClose}
        > */}
            <CloseX onClick={handleNewProductClose}>X</CloseX>
            <Fixed>Dodaj novi proizvod:</Fixed>
            <form onSubmit={handleSubmitNewProduct}>
              <SingleInputSelect>
                <label htmlFor="cijena" style={{ color: "darkblue" }}>
                  Naziv namirnice
                </label>
                <input
                  name="naziv"
                  type="text"
                  value={newNaziv}
                  onChange={(event) => setNewNaziv(event.target.value)}
                />{" "}
              </SingleInputSelect>
              <SingleInputSelect>
                <label htmlFor="Free" style={{ color: "darkblue" }}>
                  Kategorija proizvoda
                </label>
                <select
                  name="Kategorija"
                  type="select"
                  value={newKategorija}
                  onChange={(event) => {
                    setNewKategorija(event.target.value);
                  }}
                >
                  <option value=""></option>
                  <option value="Voće">Voće</option>
                  <option value="Salate">Salate</option>
                  <option value="Povrće">Povrće</option>
                  <option value="Agrumi">Agrumi</option>
                  <option value="Suho voće">Suho voće</option>
                  <option value="Egzotično voće">Egzotično voće</option>
                  <option value="Gljive">Gljive</option>
                  <option value="Prerađevine">Prerađevine</option>
                  <option value="Žitarice, sjemenke, arašidi">
                    Žitarice, sjemenke, arašidi
                  </option>
                  <option value="Med i pčelinji proizvodi">
                    Med i pčelinji proizvodi
                  </option>
                  <option value="Veronika (mini mljekara)">
                    Veronika (mini mljekara)
                  </option>
                  <option value="Domaća tjestenina (Nada)">
                    Domaća tjestenina (Nada)
                  </option>
                  <option value="Začinsko bilje i klice">
                    Začinsko bilje i klice
                  </option>
                </select>
              </SingleInputSelect>
              <SingleInputSelect>
                <label htmlFor="cijena" style={{ color: "darkblue" }}>
                  Mjerna jedinica
                </label>
                <select
                  name="MjernaJedinica"
                  type="select"
                  value={newMjernaJedinica}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setNewMjernaJedinica(event.target.value);
                  }}
                >
                  <option value="1kg">1kg</option>
                  <option value="komad">komad</option>
                  <option value="cjelovito pakiranje">
                    cjelovito pakiranje
                  </option>
                  <option value="litra">litra</option>
                  <option value="vezica">vezica</option>
                  <option value="0.5kg">0.5kg</option>
                  <option value="0.1kg">0.1kg</option>
                  <option value="teglica 450g">teglica 450g</option>
                  <option value="teglica 900g">teglica 900g</option>
                </select>
              </SingleInputSelect>
              <SingleInputSelect>
                <label htmlFor="cijena" style={{ color: "darkblue" }}>
                  Cijena
                </label>
                <input
                  name="cijena"
                  type="number"
                  min="0"
                  step="0.01"
                  pattern="^\d+(?:\.\d{1,2})?$"
                  value={newCijena}
                  onChange={(event) => setNewCijena(event.target.value)}
                />{" "}
              </SingleInputSelect>

              <WrapTwo>
                <SingleInputSelect>
                  <label htmlFor="discount" style={{ color: "darkblue" }}>
                    Tjedna ponuda
                  </label>

                  <input
                    style={{ width: "20px", marginRight: "20px" }}
                    type="checkbox"
                    name="discount"
                    checked={discount}
                    onChange={() => setDiscount(!discount)}
                  ></input>
                </SingleInputSelect>

                <SingleInputSelect>
                  <label htmlFor="partner" style={{ color: "darkblue" }}>
                    Partner OPG
                  </label>

                  <input
                    style={{ width: "20px", marginRight: "20px" }}
                    type="checkbox"
                    name="partner"
                    checked={newPartner}
                    onChange={() => setNewPartner(!newPartner)}
                  ></input>
                </SingleInputSelect>
              </WrapTwo>
              <SingleInputSelect>
                <label
                  htmlFor="Free"
                  style={{ color: "darkblue", display: "flex" }}
                >
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
                  <option value={true}>Raspoloživo</option>
                  <option value={false}>Nije raspoloživo</option>
                </select>
              </SingleInputSelect>

              <div>
                <label>Foto namirnice (ne veći od 500kb)</label>
                <input
                  type="file"
                  id="input"
                  accept=".png, .jpg, .jpeg"
                  onChange={onFileChange}
                  style={{ border: "none" }}
                />
              </div>
              <div style={{ color: "black", textAlign: "center" }}>
                {fileSizeTooLarge &&
                  `Prevelika fotografija: ${fileSize} kb!! Odaberi manju (Max 800kb)`}

                <br />
              </div>
              <WrapImageInEditor>
                {fileSizeTooLarge && (
                  <Icon color="#dc3545">
                    <RiErrorWarningLine />
                  </Icon>
                )}
                {fileSize > 0 && fileSize < 800 && (
                  <Icon color="#28a745">
                    <MdOutlineDoneOutline />
                  </Icon>
                )}
                <Image
                  priority
                  src={fileBase64String ? fileBase64String : "/vege.png"}
                  layout="fill"
                  objectFit="cover"
                />
              </WrapImageInEditor>
              <div className="wrapButtonsForm">
                <button type="submit">Save</button>
              </div>
            </form>
          </PopupForm>
        )}
        {isOpen && (
          <PopupForm>
            {/* <Formular
          naslov="Uredi proizvod:"
          handleSubmit={handleSubmit}
          setNaziv={setNewNaziv}
          naziv={naziv}
          setKategorija={setKategorija}
          kategorija={kategorija}
          setMjernaJedinica={setMjernaJedinica}
          mjernaJedinica={mjernaJedinica}
          setCijena={setCijena}
          cijena={cijena}
          setDiscount={setDiscount}
          discount={discount}
          setFree={setFree}
          Free={free}
          buttonSave={true}
          buttonDelete={true}
          handleDelete={handleDelete}
          handleClose={handleClose}
        > */}
            <CloseX onClick={handleClose}>X</CloseX>
            <Fixed>Edit namirnice:</Fixed>
            <form onSubmit={handleSubmit}>
              <div>
                <SingleInputSelect>
                  <label htmlFor="naziv" style={{ color: "darkblue" }}>
                    Naziv namirnice
                  </label>
                  <input
                    name="naziv"
                    type="text"
                    value={naziv}
                    onChange={(event) => setNaziv(event.target.value)}
                  />{" "}
                </SingleInputSelect>
                <SingleInputSelect>
                  <label htmlFor="Free" style={{ color: "darkblue" }}>
                    Kategorija proizvoda
                  </label>
                  <select
                    name="Kategorija"
                    type="select"
                    value={kategorija}
                    onChange={(event) => {
                      setKategorija(event.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="Voće">Voće</option>
                    <option value="Salate">Salate</option>
                    <option value="Povrće">Povrće</option>
                    <option value="Agrumi">Agrumi</option>
                    <option value="Suho voće">Suho voće</option>
                    <option value="Egzotično voće">Egzotično voće</option>
                    <option value="Gljive">Gljive</option>
                    <option value="Prerađevine">Prerađevine</option>
                    <option value="Žitarice, sjemenke, arašidi">
                      Žitarice, sjemenke, arašidi
                    </option>
                    <option value="Med i pčelinji proizvodi">
                      Med i pčelinji proizvodi
                    </option>
                    <option value="Veronika (mini mljekara)">
                      Veronika (mini mljekara)
                    </option>
                    <option value="Domaća tjestenina (Nada)">
                      Domaća tjestenina (Nada)
                    </option>
                    <option value="Začinsko bilje i klice">
                      Začinsko bilje i klice
                    </option>
                  </select>
                </SingleInputSelect>
              </div>

              <div>
                <SingleInputSelect>
                  <div style={{ color: "darkblue" }}>Mjerna jedinica</div>
                  <select
                    name="MjernaJedinica"
                    type="select"
                    value={mjernaJedinica}
                    onChange={(event) => {
                      setMjernaJedinica(event.target.value);
                    }}
                  >
                    <option>Odaberi</option>
                    <option value="1kg">1kg</option>
                    <option value="komad">komad</option>
                    <option value="cjelovito pakiranje">
                      cjelovito pakiranje
                    </option>
                    <option value="litra">litra</option>
                    <option value="vezica">vezica</option>
                    <option value="0.5kg">0.5kg</option>
                    <option value="0.1kg">0.1kg</option>
                    <option value="teglica 450g">teglica 450g</option>
                    <option value="teglica 900g">teglica 900g</option>
                  </select>
                </SingleInputSelect>
                <SingleInputSelect>
                  <div style={{ color: "darkblue" }}>Cijena</div>
                  <input
                    name="cijena"
                    type="number"
                    value={cijena}
                    onChange={(event) => setCijena(event.target.value)}
                  />{" "}
                </SingleInputSelect>
              </div>
              <br />
              <div>
                <WrapTwo>
                  <SingleInputSelect>
                    <label htmlFor="discount" style={{ color: "darkblue" }}>
                      Tjedna ponuda
                    </label>
                    <input
                      style={{ width: "20px", marginRight: "20px" }}
                      type="checkbox"
                      name="discount"
                      checked={discount}
                      onChange={() => setDiscount(!discount)}
                    ></input>
                  </SingleInputSelect>

                  <SingleInputSelect>
                    <label htmlFor="partner" style={{ color: "darkblue" }}>
                      Partner OPG
                    </label>

                    <input
                      style={{ width: "20px", marginRight: "20px" }}
                      type="checkbox"
                      name="partner"
                      checked={partner}
                      onChange={() => setPartner(!partner)}
                    ></input>
                  </SingleInputSelect>
                </WrapTwo>
                <SingleInputSelect>
                  <label htmlFor="Free" style={{ color: "darkblue" }}>
                    Status
                  </label>
                  <br />
                  <select
                    name="Free"
                    type="select"
                    value={free}
                    onChange={(event) => {
                      setFree(event.target.value === "true" ? true : false);
                    }}
                  >
                    <option value={true}>Raspoloživo</option>
                    <option value={false}>Nije raspoloživo</option>
                  </select>
                </SingleInputSelect>
              </div>
              <div>
                <label style={{ color: "black" }}>
                  Foto namirnice (ne veći od 500kb)
                </label>
                <input
                  type="file"
                  id="input"
                  accept=".png, .jpg, .jpeg"
                  onChange={onFileChange}
                  style={{ border: "none" }}
                />

                <div style={{ color: "black", textAlign: "center" }}>
                  {fileSizeTooLarge && (
                    <Icon color="#dc3545">
                      <RiErrorWarningLine />
                    </Icon>
                  )}
                  {fileSize > 0 && fileSize < 800 && (
                    <Icon color="#28a745">
                      <GrStatusGood />
                    </Icon>
                  )}

                  {fileSizeTooLarge &&
                    `Prevelika fotografija: ${fileSize} kb!! Odaberi manju (Max 800kb)`}
                </div>

                <WrapImageInEditor>
                  <Image
                    priority
                    src={fileBase64String ? fileBase64String : "/vege.png"}
                    layout="fill"
                    objectFit="cover"
                  />
                </WrapImageInEditor>
              </div>
              <ButtonsWrap>
                <Button type="submit" text="Submit" />
                <Button handleOnClick={handleDelete} text="Delete" />
              </ButtonsWrap>
            </form>
          </PopupForm>
        )}
      </WrapSection>
    </>
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

export default Proizvodi;
