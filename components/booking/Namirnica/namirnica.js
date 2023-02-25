import React, { useState, useEffect } from "react";

import {
  WeekWrap,
  Price,
  PriceKn,
  Amount,
  WrapPlusMinus,
  Naziv,
  WrapNazivCijena,
  WrapImage,
  WrapData,
  WrapInBasket,
  NasProizvod,
  Partner,
  Alert,
  Mj,
  Overlay,
  Kategorija,
  Napomena,
  WrapPricesInNamirnica,
} from "./style.js";
import Diskont from "./diskont";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import moment from "moment";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";

import { GiFarmer } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Namirnica = ({
  cijena,
  selected,
  free,
  handleClick,
  id,
  //   handleSelect,
  kategorija,
  mjernaJedinica,
  // handleMarker,
  handleUpdateCart,
  marked,
  length,
  discount,
  discountAmount,
  naziv,
  width,
  widthMobile,
  backgroundColor,
  textColor,
  cartStanje,
  height,
  iconSize,
  partner,
  foto,
}) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };
  const [startD, setStartD] = useState("");
  const [napomena, setNapomena] = useState("");
  const [endD, setEndD] = useState("");
  const [kolicina, setKolicina] = useState(Number(1));
  const [inputKolicina, setInputKolicina] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertWrongInput, setAlertWrongInput] = useState(false);
  const [uspjesnoUneseno, setUspjesnoUneseno] = useState(false);
  useEffect(() => {
    let num = cijena.toString();
    function insert(str, index, value) {
      return str.substr(0, index) + value + str.substr(index);
    }
  }, [cijena]);

  const handleKolicinaPlus = () => {
    setKolicina((Number(kolicina) + 1).toFixed(1));
  };
  const handleKolicinaMinus = () => {
    if (kolicina >= 1) {
      setKolicina((Number(kolicina) - 1).toFixed(1));
    }
  };
  const validateAndAddToBasket = () => {
    if (kolicina) {
      console.log("Dobar");
      handleAddToBasket();
    } else {
      console.log("nije dobar");
      setKolicina(1);
      setAlertWrongInput(true);
      setTimeout(() => {
        setAlertWrongInput(false);
      }, 2000);
    }
  };
  const handleAddToBasket = () => {
    // if(kolicina !typeof n)
    if (kolicina === 0) {
      setAlert(true);
    } else {
      handleUpdateCart(id, kolicina, cartStanje, napomena);

      setUspjesnoUneseno(true);
      setTimeout(() => {
        setKolicina(1);
        setUspjesnoUneseno(false);
        setNapomena("");
      }, 3000);
    }
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <WeekWrap
      width={width}
      isFree={free}
      marked={marked}
      onClick={() => {
        handleClick();
        // handleSelect();
        // handleMarker();
      }}
      selected={selected}
      length={length}
      kategorija={kategorija}
      backgroundColor={backgroundColor}
      textColor={textColor}
      height={height}
      widthMobile={widthMobile}
    >
      <WrapImage>
        <Overlay />
        <Image
          priority
          src={foto != null ? foto : "/vege.png"}
          layout="fill"
          objectFit="cover"
        />

        {partner ? (
          <Partner>
            <FaHandsHelping />
          </Partner>
        ) : (
          <NasProizvod>
            <GiFarmer />
          </NasProizvod>
        )}
        <Kategorija>{kategorija}</Kategorija>
      </WrapImage>
      <WrapData textColor={textColor}>
        <Napomena>
          {" "}
          <textarea
            name="kolicina"
            type="text"
            min="0"
            step="0.5"
            placeholder="Napomena"
            value={napomena}
            onChange={(e) => {
              setNapomena(e.target.value);
            }}
          />
        </Napomena>
        <WrapNazivCijena>
          <Naziv>{naziv}</Naziv>
          <div style={{ display: "flex" }}>
            <WrapPricesInNamirnica>
              <Price>{(cijena * 1).toFixed(2)} €</Price>

              <PriceKn>{(cijena * 7.5435).toFixed(2)} kn</PriceKn>
            </WrapPricesInNamirnica>
            <div>
              <Mj>{mjernaJedinica}</Mj>
            </div>
          </div>
        </WrapNazivCijena>
        <WrapPlusMinus>
          {mjernaJedinica === "1kg" ? (
            <input
              name="kolicina"
              type="number"
              // pattern="[0-9]+([\..][0-9]+)?"
              value={kolicina}
              onChange={(e) => {
                setKolicina(e.target.value);
              }}
              // onChange={(e) =>
              //   setKolicina((v) =>
              //     e.target.validity.valid ? e.target.value : v
              //   )
              // }
            />
          ) : (
            <Amount>{Number(kolicina).toFixed(0)}</Amount>
          )}

          <div style={{ width: "90px", marginBottom: "2px" }}>
            <IoIosAddCircleOutline onClick={() => handleKolicinaPlus()} />
            <IoIosRemoveCircleOutline onClick={() => handleKolicinaMinus()} />
          </div>
        </WrapPlusMinus>
      </WrapData>

      {alert && <Alert>Odaberi količinu</Alert>}

      <WrapInBasket
        textColor={textColor}
        iconSize={iconSize}
        onClick={() => validateAndAddToBasket()}
        warning={alertWrongInput}
      >
        {alertWrongInput ? "Krivi unos" : "U košaricu"}
        {/* {!alertWrongInput && !uspjesnoUneseno ? "U košaricu" : "Krivi unos"} */}
        {/* {!uspjesnoUneseno ? "U košaricu" : "Dodano"} */}
        {uspjesnoUneseno ? (
          <MdDoneOutline />
        ) : (
          <TbTruckDelivery
            // className={`truck ${uspjesnoUneseno ? "truckRight" : "truckLeft"}`}
            className="truckLeft"
          />
        )}

        {/* <CiShoppingBasket onClick={() => handleAddToBasket()} /> */}
      </WrapInBasket>

      {/* {kolicina > 0 ? <div>Tot: {kolicina * cijena}Eur</div> : <div></div>} */}
      {/* {discount && (
        <Diskont discountAmount={discountAmount} isInBasket={false} />
      )} */}
    </WeekWrap>
  );
};

export default Namirnica;
