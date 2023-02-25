import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Namirnica from "../Namirnica/namirnica";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase/firebase";
import bg from "../../../images/booking/bgusko.jpg";
import useOnClickOutside from "../../helper/useOnClickOutside";
import Slider from "react-slick";
import ClipLoader from "react-spinners/ClipLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrap,
  Lista,
  WrapLista,
  WrapSection,
  Title,
  Loading,
  Kategorije,
  WrapInputSelector,
  WrapHeader,
  WrapHeaderMobile,
  SearchIcon,
  BlurOverlay,
  OrderButton,
  Title2,
  WrapBottomBar,
  TotalPriceBottomBar,
  TotalPriceBottomBarKn,
  VievCart,
} from "./style.js";
import PriceComponent from "./priceComponent";

import Legend from "./legend/index";
import useWindowSize from "../../useWindowSize";
import { useScrollPercentage } from "react-scroll-percentage";
import Kosarica from "./kosarica";

import { FiSearch } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  className: "testimonialSlider",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        className: "testimonialSlider",
      },
    },
  ],
};

function Namirnice() {
  const size = useWindowSize();
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
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
  const [kategorija, setKategorija] = useState("Sve");
  const [odabraneKolicine, setOdabraneKolicine] = useState(0);
  const [kosarica, setKosarica] = useState([]);
  const [kosaricaLS, setKosaricaLS] = useState([]);
  const [kosaricaIsOpen, setKosaricaIsOpen] = useState(false);
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [kosaricaLength, setKosaricaLength] = useState(0);
  const [checkoutScreen, setCheckoutScreen] = useState(false);
  let [color, setColor] = useState("#093b69");

  // const dbInstance = collection(database, "Charter2");
  // const dbInstance2 = collection(database, "Charter2");
  // const dbInstance3 = collection(database, "Charter2");
  const dbInstance4 = collection(database, "Charter3");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [query, setquery] = useState("");
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
    // var now = new Date().getTime();
    // if (localStorage.getItem("Cart Data OPG Vitez")) {
    //   var localStorageState = JSON.parse(
    //     localStorage.getItem("Cart Data OPG Vitez")
    //   );
    //   var localStorageDate = localStorageState.time;
    //   var localStorageData = localStorageState.cart;
    //   var timePassedStorageAndNow = (now - localStorageDate) / (1000 * 60);
    // }

    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance4).then((data) => {
        // console.log(data.docs.length);
        data.docs.length !== 0 ? setIsLoading(false) : setIsLoading(true);
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id, cartStanje: 0 };
        });
        setData(podaci);
      });
    };
    // if (localStorageState.length != 0 && timePassedStorageAndNow < 60) {
    //   setCartData(localStorageData);
    //   // getNotes();
    //   // setIsLoading(false);
    //   console.log("LSD", localStorageData);
    // } else {
    //   getNotes();
    // }
    getNotes();
  }, []);
  console.log("first", data);
  // ________

  // (function () {
  //   const generateId = () => Math.random().toString(36).substr(2, 18);
  //   const setUserClientId = async () => {
  //     return localStorage.setItem("clientId", generateId());
  //   };
  //   const getUserClientId = () => {
  //     return localStorage.getItem("clientId");
  //   };
  //   const cleanUserClientId = () => {
  //     localStorage.removeItem("clientId");
  //   };
  // })();

  // useEffect(() => {
  //   const generateId = () => Math.random().toString(36).substr(2, 18);
  //   localStorage.setItem("clientId", generateId());
  //   console.log("storage ID", localStorage.getItem("clientId"));
  // }, []);

  // ----

  const handleClick = (id) => {
    setIsOpen(true);
    const docRef = doc(dbInstance4, id);
    getDoc(docRef).then((doc) => {
      setCijena(doc.data().cijena);
    });
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

    // localStorage.setItem(
    //   "Cart Data OPG Vitez",
    //   JSON.stringify({ cart: newState, time: now })
    // );
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
    // setCartData(newState2);
    setData(newState);
    setCartData(newState2);
    // localStorage.setItem(
    //   "Cart Data OPG Vitez",
    //   JSON.stringify({ cart: newState2, time: now })
    // );
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

    // const newState2 = newState.filter((obj) => obj.kolicina > 0);

    const newState2 = newState.filter((obj) => obj.cartStanje > 0);
    setData(newState);
    setCartData(newState2);
    // setCartData(newState2);
    // localStorage.setItem(
    //   "Cart Data OPG Vitez",
    //   JSON.stringify({ cart: newState2, time: now })
    // );
  };

  //zbroji eure svih tjedana

  // useEffect(() => {
  //   let sum = 0;
  //   data.map((object) => {
  //     if (object.selected === true) {
  //       sum = sum + object.cijena;
  //     }
  //   });
  //   setSuma(sum);
  // }, [data]);
  //idi kroz array nakon svakog klika tjedna i promjeni state selected u true
  const handleKolicine = (kol) => {
    console.log("kolicine:", kol);
  };
  const handleOpenKosarica = () => {
    setKosaricaIsOpen(!kosaricaIsOpen);
  };

  const handleUpdateCart = (id, kolicina, cartStanje, napomena) => {
    console.log(napomena);
    var now = new Date().getTime();
    // if (localStorage.getItem("Cart Data OPG Vitez") != undefined) {
    //   var localStorageState = JSON.parse(
    //     localStorage.getItem("Cart Data OPG Vitez")
    //   );
    //   var localStorageDate = localStorageState.time;
    //   var localStorageData = localStorageState.newState;
    // }
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
    // console.log("new state", newState);
    let cartDataFilter = newState.filter((item) => item.cartStanje > 0);
    // setCartData(cartDataFilter);
    // console.log("updated on ad to basket", cartDataFilter);
    setData(newState);
    // localStorage.setItem(
    //   "Cart Data OPG Vitez",
    //   JSON.stringify({ cart: cartDataFilter, time: now })
    // );
    setCartData(cartDataFilter);
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
  }, [cartData]);

  // useEffect(() => {
  //   const purchasedItems = data.filter((item) => item.kolicina > 0);
  //   setKosarica(purchasedItems);
  //   if (purchasedItems.length != 0) {
  //     localStorage.setItem("kosarica3", JSON.stringify(purchasedItems));
  //   }
  // }, [data]);
  // useEffect(() => {
  //   const purchasedItems = kosarica.filter((item) => item.kolicina > 0);
  //   setKosarica(purchasedItems);
  //   if (purchasedItems.length != 0) {
  //     localStorage.setItem("kosarica3", JSON.stringify(purchasedItems));
  //   }
  // }, [kosarica]);

  // useEffect(() => {
  //   const retriveProducts = JSON.parse(localStorage.getItem("kosarica3"));
  //   if (retriveProducts.length != 0) setKosarica(retriveProducts);
  // }, []);

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

  useEffect(() => {
    state.query.length > 0 ? setIsQueryOpen(true) : setIsQueryOpen(false);
  }, [state.query]);

  const filteredData = data.filter(
    (week) => week.kategorija === kategorija && week.free
  );
  const dataRaspolozivo = data.filter((week) => week.free);
  const dataFeatured = data.filter((product) => product.discount);
  useEffect(() => {
    setCartData(data.filter((item) => item.cartStanje > 0));
  }, [data]);

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
  useEffect(() => {
    isQueryOpen &&
      state.list.length > 0 &&
      ((document.body.style.overflow = "overlay"),
      (document.body.style.width = "100%"));
    !isQueryOpen && (document.body.style.overflow = "unset");
  }, [isQueryOpen]);

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
  return (
    <WrapSection id="booking" ref={ref}>
      {isQueryOpen && state.list.length > 0 && <BlurOverlay />}
      {size.width > 1000 ? (
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
                          height="290px"
                          textColor="light"
                          iconSize="small"
                          partner={week.partner}
                          foto={week.foto ? week.foto : null}
                        />
                      ))}
                </Lista>
              </WrapLista>
            )}
          </WrapInputSelector>
          <Kategorije>
            <select
              name="Kategorija"
              type="select"
              value={kategorija}
              onChange={(event) => {
                setKategorija(event.target.value);
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
          <PriceComponent
            price={suma}
            countOrders={kosaricaLength}
            data={cartData}
            handleOpenKosarica={handleOpenKosarica}
            kosaricaIsOpen={kosaricaIsOpen}
          />{" "}
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
        </WrapHeader>
      ) : (
        <>
          <WrapHeaderMobile>
            <WrapInputSelector>
              <SearchIcon>
                <FiSearch />
              </SearchIcon>
              <input
                type="search"
                value={state.query}
                onChange={handleChange}
              />

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
                            width="400px"
                            cartStanje={week.cartStanje}
                            height="290px"
                            textColor="light"
                            iconSize="small"
                            partner={week.partner}
                            foto={week.foto ? week.foto : null}
                          />
                        ))}
                  </Lista>
                </WrapLista>
              )}
            </WrapInputSelector>
            <Kategorije>
              <select
                name="Kategorija"
                type="select"
                value={kategorija}
                onChange={(event) => {
                  setKategorija(event.target.value);
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
                {kosaricaIsOpen ? "Zatvori košaricu" : "Pogledaj košaricu"}{" "}
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
      ></Kosarica>
      <Title>Posebna ponuda</Title> 
      <Slider {...settings}>
        {dataFeatured.slice(0, 6).map((product) => (
          <Namirnica
            key={product.id}
            id={product.id}
            cijena={product.cijena}
            kategorija={product.kategorija}
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
            width="350px"
            widthMobile="305px"
            backgroundColor="white"
            textColor="light"
            cartStanje={product.cartStanje}
            height="290px"
            iconSize="small"
            partner={product.partner}
            marginTop="0px"
            foto={product.foto ? product.foto : null}
          />
        ))}
      </Slider>
      <Legend />
      <Title2>Odaberi namirnice</Title2> 
      {/* <SubTitle>Choose your dates and make reservation</SubTitle> */}
      {/* {size.width < 600 ? <Legend /> : ""} */}
      {isLoading ? (
        <>
          {/* <Loading>UČITAVAM NAMIRNICE</Loading>
          <div className="animatedLine"></div> */}
          <ClipLoader
            color={color}
            loading={isLoading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <Wrap>
          {kategorija === "Sve"
            ? dataRaspolozivo.map((week) => (
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
                  width="30%"
                  widthMobile="90%"
                  cartStanje={week.cartStanje}
                  height="370px"
                  iconSize="small"
                  partner={week.partner}
                  marginTop="0"
                  foto={week.foto ? week.foto : null}
                />
              ))
            : filteredData.map((week) => (
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
                  odabraneKolicine={odabraneKolicine}
                  handleUpdateCart={handleUpdateCart}
                  length={length}
                  discount={week.discount}
                  discountAmount={week.discountAmount}
                  width="30%"
                  widthMobile="90%"
                  cartStanje={week.cartStanje}
                  height="370px"
                  iconSize="small"
                  partner={week.partner}
                  marginTop="0"
                  foto={week.foto ? week.foto : null}
                />
              ))}
        </Wrap>
      )}
    </WrapSection>
  );
}

export default Namirnice;
