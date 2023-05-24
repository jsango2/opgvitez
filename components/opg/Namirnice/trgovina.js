import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroContent from "../../HeroContent/index";
import Namirnica from "../Namirnica/namirnica";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase/firebase";
import bg from "../../../images/booking/bgusko.jpg";
import useOnClickOutside from "../../helper/useOnClickOutside";
import Slider from "react-slick";
import ClipLoader from "react-spinners/ClipLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

// import Paginate from "./paginate";
import ReactPaginate from "react-paginate";
import {
  Wrap,
  Lista,
  WrapLista,
  WrapSection,
  Title,
  Loading,
  LoaderText,
  Kategorije,
  WrapInputSelector,
  WrapHeader,
  WrapHeaderMobile,
  SearchIcon,
  BlurOverlay,
  WrapLoader,
  Title2,
  WrapBottomBar,
  Kat,
  TotalPriceBottomBar,
  TotalPriceBottomBarKn,
  VievCart,
  WrapSlider,
  WrapKategorije,
  HomePage,
} from "./style.js";
import PriceComponent from "./priceComponent";

import Legend from "./legend/index";
import useWindowSize from "../../useWindowSize";
import { useScrollPercentage } from "react-scroll-percentage";
import Kosarica from "./kosarica";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import Hero2 from "../../Hero2";
import { existingCategories } from "../../helper/existingCategories";

const kategorije = [
  "Voće",
  "Povrće",
  "Agrumi",
  "Egzotično voće",
  "Gljive",
  "Prerađevine",
  "Med i pčelinji proizvodi",
  "Veronika (mini mljekara)",
  "Domaća tjestenina (Nada)",
];

const settings = {
  // dots: false,
  // infinite: true,
  // slidesToShow: 2,
  // slidesToScroll: 1,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  className: "testimonialSlider",
  speed: 3500,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        className: "testimonialSlider",
        speed: 3500,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        className: "testimonialSlider",
        speed: 3500,
      },
    },
  ],
};

function Trgovina() {
  const size = useWindowSize();
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [suma, setSuma] = useState(0);
  const [length, setLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [katClicked, setKatClicked] = useState(false);
  const [current, setCurrent] = useState(null);
  const [logedIn, setlogedIn] = useState(null);
  const [kategorija, setKategorija] = useState("Povrće");
  const [uniqueKategorija, setUniqueKategorija] = useState([]);
  const [napomenaCart, setNapomenaCart] = useState("");
  const [odabraneKolicine, setOdabraneKolicine] = useState(0);

  const [kosaricaIsOpen, setKosaricaIsOpen] = useState(false);
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [kosaricaLength, setKosaricaLength] = useState(0);
  const [checkoutScreen, setCheckoutScreen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  let [color, setColor] = useState("#093b69");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const dbInstance4 = collection(database, "Charter3");
  const [state, setstate] = useState({
    query: "",
    list: [],
  });
  const refs = useRef();
  useOnClickOutside(refs, () => setIsQueryOpen(false));

  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

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

  // ------- citaj firestore "getDocs"--- ako je local storage mlađi od 60min vuci njega u cart ako sta ima a ako je stariji
  // od 60 min onda je novi refresh svega----

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance4).then((data) => {
        // console.log(data.docs.length);
        data.docs.length !== 0 ? setIsLoading(false) : setIsLoading(true);
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id, cartStanje: 0 };
        });
        setData(podaci);
        setUniqueKategorija(existingCategories(podaci));
        setstate({
          query: "",
          list: podaci.filter((dat) => dat.kategorija === "Povrće" && dat.free),
        });
      });
    };

    getNotes();
    setCurrent(0);
  }, []);

  const currentListPaginated = state.list.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    let sum = 0;
    cartData.map((object) => {
      if (object.cartStanje > 0) {
        sum = sum + object.cartStanje * object.cijena;
      }
    });
    setSuma(sum);

    setKosaricaLength(cartData.length);
    if (cartData.length === 0) {
      setKosaricaIsOpen(false);
    }
  }, [cartData]);

  // useEffect(() => {
  //   // if (kategorija === "Sve") {
  //   //   const filteredData = dataRaspolozivo;
  //   // } else {
  //   //   const filteredData = data.filter(
  //   //     (dat) => dat.kategorija === kategorija && dat.free
  //   //   );
  //   // }
  //   // setstate({
  //   //   query: "",
  //   //   list: filteredData,
  //   // });
  //   // if (kategorija === "Sve") {
  //   //   setstate({
  //   //     query: "",
  //   //     list: data,
  //   //   });
  //   // } else {
  //   const filteredData = data.filter(
  //     (dat) => dat.kategorija === kategorija && dat.free
  //   );
  //   setstate({
  //     query: "",
  //     list: filteredData,
  //   });
  //   // }
  // }, [kategorija]);

  useEffect(() => {
    state.query.length > 0 ? setIsQueryOpen(true) : setIsQueryOpen(false);
  }, [state.query]);

  // useEffect(() => {
  //   setCartData(data.filter((item) => item.cartStanje > 0));
  // }, [data]);

  const handleClick = (id) => {
    setIsOpen(true);
  };
  const handleAddItemAMount = (id, cartStanje) => {
    var now = new Date().getTime();

    const newState = data.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return {
          ...obj,

          cartStanje:
            cartStanje % 1 === 0
              ? Number(cartStanje) + 1
              : (Number(cartStanje) + 0.1).toFixed(1),
        };
      }

      // 👇️ otherwise return object as is

      return obj;
    });
    // setData(newState);
    const newState2 = newState.filter((obj) => obj.cartStanje > 0);
    setData(newState);
    setCartData(newState2);
  };
  const handleIsOpenKosarica = (query) => {
    if (query === false) {
      setKosaricaIsOpen(false);
    }
  };
  const handleRemoveItemAMount = (id, cartStanje) => {
    var now = new Date().getTime();
    const newState = data.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          cartStanje:
            cartStanje % 1 === 0
              ? Number(cartStanje) - 1
              : (Number(cartStanje) - 0.1).toFixed(1),
        };
      }

      // 👇️ otherwise return object as is

      return obj;
    });

    const newState2 = newState.filter((obj) => obj.cartStanje > 0);

    setData(newState);
    setCartData(newState2);
  };

  const handleRemoveAllItems = (id) => {
    var now = new Date().getTime();

    const newState = data.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          cartStanje: 0,
        };
      }

      // 👇️ otherwise return object as is

      return obj;
    });

    const newState2 = newState.filter((obj) => obj.cartStanje > 0);
    setData(newState);
    setCartData(newState2);
  };

  const handleKolicine = (kol) => {
    console.log("kolicine:", kol);
  };
  const handleOpenKosarica = () => {
    if (cartData.length === 0) {
      setKosaricaIsOpen(false);
    } else {
      setKosaricaIsOpen(!kosaricaIsOpen);
    }
  };

  const handleUpdateCart = (id, kolicina, cartStanje, napomena) => {
    var now = new Date().getTime();

    const newState = data.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return {
          ...obj,
          cartStanje: Number(cartStanje) + Number(kolicina),
          kolicina: kolicina,
          napomena: napomena,
        };
      }
      // 👇️ otherwise return object as is
      return obj;
    });
    let cartDataFilter = newState.filter((item) => item.cartStanje > 0);

    setData(newState);

    setCartData(cartDataFilter);
  };

  const handleNapomenaCartUpdateCart = (id, napomena) => {
    var now = new Date().getTime();

    const newState = data.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return {
          ...obj,
          napomena: napomena,
        };
      }
      // 👇️ otherwise return object as is
      return obj;
    });
    let cartDataFilter = newState.filter((item) => item.cartStanje > 0);
    setData(newState);

    setCartData(cartDataFilter);
    console.log("Data nakon dodane napomene", data);
  };

  const handleChange = (e) => {
    // if (kategorija === "Sve") {
    //   const results = dataRaspolozivo.filter((post) => {
    //     if (e.target.value === "") return data;

    //     return post.naziv.toLowerCase().includes(e.target.value.toLowerCase());
    //   });
    //   setstate({
    //     query: e.target.value,
    //     list: results,
    //   });
    // } else {
    const results = dataRaspolozivo.filter((post) => {
      if (e.target.value === "") return data;

      return post.naziv.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
    // }
  };
  const handleClickKat = (e, kat, id) => {
    setKatClicked(false);

    const filteredData = data.filter(
      (dat) => dat.kategorija === kat && dat.free
    );
    setstate({
      query: "",
      list: filteredData,
    });

    current === id ? setCurrent(null) : setCurrent(id);
  };

  // const filteredData = data.filter(
  //   (dat) => dat.kategorija === kategorija && dat.free
  // );
  const dataRaspolozivo = data.filter((dat) => dat.free);
  const dataFeatured = data.filter((product) => product.discount);

  const handleOrder = () => {
    // const newState = data.map((obj) => {
    //   // 👇️ if id equals 2, update country property
    //   return {
    //     ...obj,
    //     cartStanje: 0,
    //   };
    //   // 👇️ otherwise return object as is
    // });
    // setData(newState);
    // setTimeout(() => {}, 2000);
    // setCheckoutWindow((prev) => !prev);
    // setKosaricaIsOpen(false);
    // const cartOrdered = cartData.map((item) => item.naziv);
    // console.log("Naruceno:", cartOrdered);
    setCheckoutScreen(true);
  };

  const handleResetNotification = () => {
    const newState = data.map((obj) => {
      // 👇️ if id equals 2, update country property

      return {
        ...obj,
        cartStanje: 0,
      };

      // 👇️ otherwise return object as is
    });
    setData(newState);
    setKosaricaLength(0);
    setSuma(0);
  };
  const handleOnChange = (opcija) => {
    setKategorija(opcija.value);
  };

  const targetElement = useRef();
  const scrollingTop = (event) => {
    const elmnt = targetElement;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };
  return (
    <WrapSection id="booking" ref={ref}>
      {/* {isQueryOpen && state.list.length > 0 && <BlurOverlay />} */}
      {size.width > 1000 ? (
        <WrapHeader>
          {/* <WrapInputSelector>
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
                        <Namirnica
                          key={week.id}
                          id={week.id}
                          cijena={week.cijena}
                          kategorija={week.kategorija}
                          selected={selected}
                          free={week.free}
                          naziv={week.naziv}
                          mjernaJedinica={week.mjernaJedinica}
                          marked={week.selected}
                          handleClick={() => handleClick(week.id)}
                          handleMarker={() => handleMarker(week.id)}
                          handleUpdateCart={handleUpdateCart}
                          odabraneKolicine={odabraneKolicine}
                          length={length}
                          discount={week.discount}
                          discountAmount={week.discountAmount}
                          width="470px"
                          cartStanje={week.cartStanje}
                          height="170px"
                          textColor="light"
                          iconSize="small"
                          partner={week.partner}
                          foto={week.foto ? week.foto : null}
                        />
                      ))}
                </Lista>
              </WrapLista>
            )}
          </WrapInputSelector> */}
          {/* <Kategorije>
            <select
              name="Kategorija"
              type="select"
              value={kategorija}
              onChange={(event) => {
                setKategorija(event.target.value);
              }}
            >
              <option value="Sve">Sve kategorije</option>
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
          </Kategorije> */}
          <PriceComponent
            price={suma}
            countOrders={kosaricaLength}
            data={cartData}
            handleOpenKosarica={handleOpenKosarica}
            kosaricaIsOpen={kosaricaIsOpen}
          />
        </WrapHeader>
      ) : (
        <>
          <WrapInputSelector
            className={`${
              isSearchBarOpen ? "searchBarOpen" : "searchBarClosed"
            }`}
          >
            <input
              type="search"
              value={state.query}
              onChange={handleChange}
              placeholder="Brzi odabir namirnice"
            />

            {/* {isQueryOpen && state.list.length > 0 && (
              <WrapLista>
                <Lista style={{ color: "black" }} ref={refs}>
                  {state.query === ""
                    ? ""
                    : state.list.map((week) => (
                        <Namirnica
                          key={week.id}
                          id={week.id}
                          cijena={week.cijena}
                          kategorija={week.kategorija}
                          selected={selected}
                          free={week.free}
                          naziv={week.naziv}
                          mjernaJedinica={week.mjernaJedinica}
                          marked={week.selected}
                          handleClick={() => handleClick(week.id)}
                          handleMarker={() => handleMarker(week.id)}
                          handleUpdateCart={handleUpdateCart}
                          odabraneKolicine={odabraneKolicine}
                          length={length}
                          discount={week.discount}
                          discountAmount={week.discountAmount}
                          width="400px"
                          cartStanje={week.cartStanje}
                          height="170px"
                          textColor="light"
                          iconSize="small"
                          partner={week.partner}
                          foto={week.foto ? week.foto : null}
                        />
                      ))}
                </Lista>
              </WrapLista>
            )} */}
          </WrapInputSelector>
          <WrapHeaderMobile>
            {/* <Kategorije style={{ width: "180px" }}>
              <div onClick={scrollingTop}>
                <select
                  name="Kategorija"
                  type="select"
                  value={kategorija}
                  onChange={(event) => {
                    setKategorija(event.target.value);
                  }}
                >
                  <option value="Sve">Sve kategorije</option>
                  <option value="Voće">Voće</option>
                  <option value="Salate">Salate</option>
                  <option value="Povrće">Povrće</option>
                  <option value="Agrumi">Agrumi</option>
                  <option value="Suho voće">Suho voće</option>
                  <option value="Egzotično voće">Egzotično voće</option>
                  <option value="Gljive">Gljive</option>
                  <option value="Prerađevine">Prerađevine</option>
                  <option value="Žitarice, sjemenke, arašidi">
                    Prerađevine
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
              </div>
            </Kategorije> */}
            <SearchIcon onClick={() => setIsSearchBarOpen((prev) => !prev)}>
              <FiSearch />
            </SearchIcon>
            <PriceComponent
              price={suma}
              countOrders={kosaricaLength}
              data={cartData}
              handleOpenKosarica={handleOpenKosarica}
              kosaricaIsOpen={kosaricaIsOpen}
            />{" "}
          </WrapHeaderMobile>
          <WrapBottomBar
            className={` bottomBar ${
              suma > 0 ? "bottomBarOpen" : "bottomBarClosed"
            }`}
          >
            <TotalPriceBottomBar>
              {suma.toFixed(2)} €{" "}
              <TotalPriceBottomBarKn>
                {(suma * 7.543).toFixed(2)} kn
              </TotalPriceBottomBarKn>
            </TotalPriceBottomBar>

            <VievCart onClick={() => setKosaricaIsOpen((prev) => !prev)}>
              <div>
                {kosaricaIsOpen ? (
                  <div>Zatvori košaricu</div>
                ) : (
                  <div> Pogledaj košaricu</div>
                )}{" "}
              </div>{" "}
              <MdNavigateNext />
            </VievCart>
          </WrapBottomBar>
        </>
      )}
      {/* {kosaricaIsOpen ? ( */}
      <Kosarica
        data={cartData}
        handleAddItemAMount={handleAddItemAMount}
        handleRemoveItemAMount={handleRemoveItemAMount}
        handleRemoveAllItems={handleRemoveAllItems}
        kosaricaIsOpen={kosaricaIsOpen}
        setKosaricaIsOpen={setKosaricaIsOpen}
        handleIsOpenKosarica={handleIsOpenKosarica}
        handleOrder={handleOrder}
        ukupnaCijena={suma}
        handleResetNotification={handleResetNotification}
        setCheckoutScreen={checkoutScreen}
        marginTop="5px"
        marginTopMobile="40px"
        setNapomenaCart={setNapomenaCart}
        napomenaCart={napomenaCart}
        handleNapomenaCartUpdateCart={handleNapomenaCartUpdateCart}
      ></Kosarica>
      {/* <HeroContent />
      <Hero2 /> */}
      <Link href="/">
        <HomePage>Početna stranica</HomePage>
      </Link>
      {!isLoading && <Title>Posebna ponuda</Title>}
      {isLoading ? (
        <WrapLoader>
          <ClipLoader
            color={color}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <LoaderText>Učitavam namirnice</LoaderText>
        </WrapLoader>
      ) : (
        <WrapSlider>
          <Slider {...settings}>
            {dataFeatured.slice(0, 6).map((product) => (
              <Namirnica
                key={product.id}
                id={product.id}
                cijena={product.cijena}
                // kategorija={product.kategorija}
                selected={selected}
                free={product.free}
                naziv={product.naziv}
                mjernaJedinica={product.mjernaJedinica}
                marked={product.selected}
                handleClick={() => handleClick(product.id)}
                handleMarker={() => handleMarker(product.id)}
                handleUpdateCart={handleUpdateCart}
                odabraneKolicine={odabraneKolicine}
                length={length}
                discount={product.discount}
                discountAmount={product.discountAmount}
                width="330px"
                minwidth="430px"
                widthMobile="305px"
                backgroundColor="white"
                textColor="light"
                cartStanje={product.cartStanje}
                height="220px"
                heightMobile="150px"
                iconSize="small"
                partner={product.partner}
                marginTop="0px"
                foto={product.foto ? product.foto : null}
                prikazNapomene={false}
                isSlider={true}
              />
            ))}
          </Slider>
        </WrapSlider>
      )}
      <Legend />
      <Title>Kategorije</Title>
      <WrapKategorije>
        {/* <Kat
          onClick={() => {
            setKategorija("Sve");
            setCurrent(10);
          }}
          className={current === 10 ? "activeKat" : ""}
        >
          Sve
        </Kat> */}
        {uniqueKategorija.map((kat, index) => (
          <Kat
            onClick={(e) => {
              handleClickKat(e, kat, index);
              // setKategorija(kat);
            }}
            className={current === index ? "activeKat" : ""}
          >
            {kat}
          </Kat>
        ))}
      </WrapKategorije>
      {!isLoading && <Title2>Odaberi namirnice</Title2>}
      <WrapInputSelector>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <input type="search" value={state.query} onChange={handleChange} />

        {/* {isQueryOpen && state.list.length > 0 && (
          <WrapLista>
            <Lista style={{ color: "black" }} ref={refs}>
              {state.query === ""
                ? ""
                : state.list.map((week) => (
                    <Namirnica
                      key={week.id}
                      id={week.id}
                      cijena={week.cijena}
                      kategorija={week.kategorija}
                      selected={selected}
                      free={week.free}
                      naziv={week.naziv}
                      mjernaJedinica={week.mjernaJedinica}
                      marked={week.selected}
                      handleClick={() => handleClick(week.id)}
                      handleMarker={() => handleMarker(week.id)}
                      handleUpdateCart={handleUpdateCart}
                      odabraneKolicine={odabraneKolicine}
                      length={length}
                      discount={week.discount}
                      discountAmount={week.discountAmount}
                      width="470px"
                      cartStanje={week.cartStanje}
                      height="170px"
                      textColor="light"
                      iconSize="small"
                      partner={week.partner}
                      foto={week.foto ? week.foto : null}
                    />
                  ))}
            </Lista>
          </WrapLista>
        )} */}
      </WrapInputSelector>
      {/* <SubTitle>Choose your dates and make reservation</SubTitle> */}
      {/* {size.width < 600 ? <Legend /> : ""} */}

      {isLoading ? (
        <WrapLoader>
          <ClipLoader
            color={color}
            loading={isLoading}
            size={250}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <LoaderText>Učitavam namirnice</LoaderText>
        </WrapLoader>
      ) : (
        <Wrap ref={targetElement}>
          {/* {kategorija === "Sve"
            ? state.list.map((week) => (
                <Namirnica
                  key={week.id}
                  id={week.id}
                  cijena={week.cijena}
                  kategorija={week.kategorija}
                  setKategorija={setKategorija}
                  selected={selected}
                  free={week.free}
                  naziv={week.naziv}
                  mjernaJedinica={week.mjernaJedinica}
                  marked={week.selected}
                  handleClick={() => handleClick(week.id)}
                  handleMarker={() => handleMarker(week.id)}
                  handleUpdateCart={handleUpdateCart}
                  odabraneKolicine={odabraneKolicine}
                  length={length}
                  discount={week.discount}
                  discountAmount={week.discountAmount}
                  width="40%"
                  widthMobile="90%"
                  cartStanje={week.cartStanje}
                  height="170px"
                  iconSize="small"
                  partner={week.partner}
                  marginTop="0"
                  foto={week.foto ? week.foto : null}
                  prikazNapomene={true}
                />
              ))
            : state.list.map((week) => (
                <Namirnica
                  key={week.id}
                  id={week.id}
                  cijena={week.cijena}
                  kategorija={week.kategorija}
                  setKategorija={setKategorija}
                  selected={selected}
                  free={week.free}
                  naziv={week.naziv}
                  mjernaJedinica={week.mjernaJedinica}
                  marked={week.selected}
                  handleClick={() => handleClick(week.id)}
                  handleMarker={() => handleMarker(week.id)}
                  odabraneKolicine={odabraneKolicine}
                  handleUpdateCart={handleUpdateCart}
                  length={length}
                  discount={week.discount}
                  discountAmount={week.discountAmount}
                  width="40%"
                  widthMobile="90%"
                  cartStanje={week.cartStanje}
                  height="170px"
                  iconSize="small"
                  partner={week.partner}
                  marginTop="0"
                  foto={week.foto ? week.foto : null}
                  prikazNapomene={true}
                />
              ))} */}

          {currentListPaginated.map((week) => (
            <Namirnica
              key={week.id}
              id={week.id}
              cijena={week.cijena}
              kategorija={week.kategorija}
              setKategorija={setKategorija}
              selected={selected}
              free={week.free}
              naziv={week.naziv}
              mjernaJedinica={week.mjernaJedinica}
              marked={week.selected}
              handleClick={() => handleClick(week.id)}
              handleMarker={() => handleMarker(week.id)}
              odabraneKolicine={odabraneKolicine}
              handleUpdateCart={handleUpdateCart}
              length={length}
              discount={week.discount}
              discountAmount={week.discountAmount}
              width="40%"
              widthMobile="90%"
              cartStanje={week.cartStanje}
              height="170px"
              iconSize="small"
              partner={week.partner}
              marginTop="0"
              foto={week.foto ? week.foto : null}
              prikazNapomene={true}
            />
          ))}
        </Wrap>
      )}

      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        onPageChange={paginate}
        pageCount={Math.ceil(state.list.length / postsPerPage)}
        previousLabel={"Prethodna"}
        nextLabel={"Sljedeća"}
        nextClassName={"item next "}
        pageClassName={"item pagination-page "}
        pageLinkClassName={"page-number"}
        previousLinkClassName={"page-number"}
        nextLinkClassName={"page-number"}
        activeLinkClassName={"active"}
        previousClassName={"item previous"}
      />
    </WrapSection>
  );
}

export default Trgovina;
