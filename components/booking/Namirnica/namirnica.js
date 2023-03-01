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
  MinusWrap,
  PlusWrap,
  WrapMiddle,
  MouseOverPartner,
  MouseOverNas,
  ItemAddedOverlay,
} from "./style.js";
import Diskont from "./diskont";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import moment from "moment";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { BsFillBasket2Fill } from "react-icons/bs";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";

import { GiFarmer } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import useWindowSize from "../../useWindowSize";

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
  heightMobile,
  iconSize,
  partner,
  foto,
  setKategorija,
  prikazNapomene,
  isSlider,
}) => {
  //   const [selected, setSelected] = useState(false);

  //   const handleSelect = (id) => {
  //     setSelected(!selected);
  //   };
  const size = useWindowSize();
  const [startD, setStartD] = useState("");
  const [napomena, setNapomena] = useState("");
  const [endD, setEndD] = useState("");
  const [kolicina, setKolicina] = useState(Number(1));
  const [inputKolicina, setInputKolicina] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertWrongInput, setAlertWrongInput] = useState(false);
  const [uspjesnoUneseno, setUspjesnoUneseno] = useState(false);
  const [mouseOverPartner, setMouseOverPartner] = useState(false);
  const [mouseOverNas, setMouseOverNas] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
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
    if (kolicina > 1) {
      setKolicina((Number(kolicina) - 1).toFixed(1));
    }
  };
  const validateAndAddToBasket = () => {
    if (kolicina) {
      handleAddToBasket();
    } else {
      setKolicina(1);
      setAlertWrongInput(true);
      setTimeout(() => {
        setAlertWrongInput(false);
      }, 2000);
    }
  };
  const handleAddToBasket = () => {
    // if(kolicina !typeof n)
    setItemAdded(true);
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
      setItemAdded(false);
    }, 1000);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  const handleMouseOver = () => {
    setMouseOverPartner(true);
    setMouseOverNas(true);
    setTimeout(() => {
      setMouseOverPartner(false);
      setMouseOverNas(false);
    }, 2000);
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
      heightMobile={heightMobile}
    >
      <WrapImage>
        {/* <Overlay /> */}
        <Image
          priority
          src={foto != null ? foto : "/vege.png"}
          layout="fill"
          objectFit="cover"
        />
        <ItemAddedOverlay
          className={`  ${
            itemAdded ? "itemAddedOverlayOn" : "itemAddedOverlayOff"
          }`}
        >
          DODANO U KOŠARICU
        </ItemAddedOverlay>
      </WrapImage>
      <WrapData textColor={textColor}>
        {" "}
        {partner ? (
          <Partner isSlider={isSlider} onMouseOver={() => handleMouseOver()}>
            <FaHandsHelping />
            {mouseOverPartner && (
              <MouseOverPartner>Proizvod partnera</MouseOverPartner>
            )}
          </Partner>
        ) : (
          <NasProizvod
            isSlider={isSlider}
            onMouseOver={() => handleMouseOver()}
          >
            <GiFarmer />
            {mouseOverNas && <MouseOverNas>Naš proizvod</MouseOverNas>}
          </NasProizvod>
        )}
        {kategorija && (
          <Kategorija onClick={() => setKategorija(kategorija)}>
            {kategorija}
          </Kategorija>
        )}
        {/* {prikazNapomene && (
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
        )} */}
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
            <>
              <input
                name="kolicina"
                type="number"
                // pattern="[0-9]+([\..][0-9]+)?"
                value={kolicina}
                onChange={(e) => {
                  setKolicina(e.target.value);
                }}
              />
              <div style={{ marginBottom: "8px" }}>kg</div>
            </>
          ) : (
            <Amount>{Number(kolicina).toFixed(0)}</Amount>
          )}
        </WrapPlusMinus>
      </WrapData>

      {alert && <Alert>Odaberi količinu</Alert>}

      <WrapInBasket
        textColor={textColor}
        iconSize={iconSize}
        warning={alertWrongInput}
      >
        <MinusWrap
          warning={alertWrongInput}
          onClick={() => handleKolicinaMinus()}
        >
          <MdOutlineRemoveCircle />
        </MinusWrap>

        <WrapMiddle
          onClick={() => validateAndAddToBasket()}
          warning={alertWrongInput}
        >
          {uspjesnoUneseno ? (
            <MdDoneOutline />
          ) : alertWrongInput ? (
            "Krivo"
          ) : (
            <BsFillBasket2Fill />
          )}
        </WrapMiddle>
        <PlusWrap
          warning={alertWrongInput}
          onClick={() => handleKolicinaPlus()}
        >
          <MdOutlineAddCircle />
        </PlusWrap>

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
