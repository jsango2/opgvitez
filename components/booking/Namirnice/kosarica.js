import React, { useState, useEffect, useRef } from "react";
import {
  KosaricaWrap,
  ProizvodTotal,
  CloseIcon,
  OrderButton,
  ProductInCart,
  Trash,
  BottomTotal,
  WrapAllProducts,
  WrapOrderWindow,
  Napomena,
  WrapImage,
  CijenaIikone,
  WrapNazivCijena,
  PriceKn,
  Mj,
  NasProizvod,
  Naziv,
  Partner,
  WrapPlusMinus,
  Amount,
  WrapData,
} from "./style.js";
import Image from "next/image";

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { TfiTrash } from "react-icons/tfi";
import { MdClose } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { Namirnica } from "../Namirnica/namirnica";
import useOnClickOutside from "../../helper/useOnClickOutside.js";
import { ClassNames } from "@emotion/react";
import useWindowSize from "../../useWindowSize";

import {
  // Mj,
  // NasProizvod,
  // Naziv,
  // Partner,
  Price,
} from "../Namirnica/style.js";
import Diskont from "../Namirnica/diskont.js";
import CheckoutForm from "../checkoutForm/index.js";

function Kosarica({
  data,
  handleAddItemAMount,
  handleRemoveItemAMount,
  handleRemoveAllItems,
  kosaricaIsOpen,
  setKosaricaIsOpen,
  handleOrder,
  handleIsOpenKosarica,
  ukupnaCijena,
  handleResetNotification,
  setCheckoutScreen,
  marginTop,
  marginTopMobile,
}) {
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [length, setLength] = useState(0);
  const [kosarica, setKosarica] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [isQueryOpen, setIsQueryOpen] = useState(true);
  const [ordered, setOrdered] = useState(false);
  const [checkoutWindow, setCheckoutWindow] = useState(false);
  const [OPG, setOPG] = useState(false);
  const [partnerHover, setPartnerHover] = useState(false);
  const size = useWindowSize();

  const refs = useRef();
  // useOnClickOutside(refs, () => setIsQueryOpen(false));
  // useEffect(() => {
  //   handleIsOpenKosarica(isQueryOpen);
  //   if (kosaricaIsOpen === false) {
  //     setIsQueryOpen(true);
  //   }
  // }, [kosaricaIsOpen, isQueryOpen]);
  // useEffect(() => {
  //   const cartData = data.filter((product) => product.cartStanje > 0);
  //   setCartData(cartData);
  // }, [data]);
  const checkout = () => {
    setCheckoutWindow((prev) => !prev);
    setKosaricaIsOpen(false);
  };
  useEffect(() => {
    setCheckoutWindow(setCheckoutScreen);
  }, [setCheckoutScreen]);

  const handleCloseKosarica = () => {
    setKosaricaIsOpen(false);
  };
  const handleCartReset = () => {
    handleResetNotification();
    setCartData([]);
  };
  useEffect(() => {
    setCartData(data);
  }, [data]);

  // useEffect(() => {
  //   checkoutWindow &&
  //     ((document.body.style.overflow = "hidden"),
  //     (document.body.style.marginRight = "27px"));

  //   !checkoutWindow &&
  //     ((document.body.style.overflow = "unset"),
  //     (document.body.style.marginRight = "0"));
  // }, [checkoutWindow]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     kosaricaIsOpen &&
  //       ((document.body.style.overflow = "hidden"),
  //       (document.body.style.marginRight = "27px"));

  //     !kosaricaIsOpen &&
  //       ((document.body.style.overflow = "unset"),
  //       (document.body.style.marginRight = "0"));
  //   }, 900);
  // }, [kosaricaIsOpen]);

  // const handleMouseOver = (data) => {
  //   if (data === "Domaći proizvod") {
  //     setOPG(true);
  //   }
  //   if (data === "Proizvod partnera") {
  //     setPartnerHover(true);
  //   }
  // };
  // const handleMouseLeave = (data) => {
  //   data === "Domaći proizvod" &&
  //     setTimeout(() => {
  //       setOPG(false);
  //     }, 1000);
  //   data === "Proizvod partnera" &&
  //     setTimeout(() => {
  //       setPartnerHover(false);
  //     }, 1000);
  // };

  return (
    <>
      {checkoutWindow && (
        <CheckoutForm
          closeCheckoutWindow={checkout}
          suma={ukupnaCijena.toFixed(2)}
          cartData={data}
          handleCartReset={handleCartReset}
        />
      )}
      {cartData.length > 0 && (
        <KosaricaWrap
          ref={refs}
          className={` cart ${kosaricaIsOpen ? "cartOpen" : "cartClosed"}`}
          height={`${cartData.length * 343}px`}
          heightMobile={`${cartData.length * 345}px`}
          // height="100%"
        >
          <CloseIcon
            onClick={() => handleCloseKosarica()}
            style={{ color: "#093b69" }}
          >
            <span
              style={{
                position: "relative",
                fontSize: "14px",
                bottom: "5px",
                color: "#093b69",
              }}
            >
              Zatvori
            </span>
            <MdClose />
          </CloseIcon>
          <WrapAllProducts
            height={`${cartData.length * 158}px`}
            heightMobile={`${cartData.length * 238}px`}
          >
            {cartData.map((item) => (
              <ProductInCart>
                <WrapImage>
                  <Image
                    priority
                    src={item.foto != null ? item.foto : "/vege.png"}
                    layout="fill"
                    objectFit="cover"
                  />
                </WrapImage>

                <WrapData textColor="dark">
                  <WrapNazivCijena>
                    <Naziv style={{ marginTop: "0px", fontSize: "25px" }}>
                      {item.naziv}
                    </Naziv>
                  </WrapNazivCijena>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                      paddingTop: "0px",
                    }}
                  >
                    <CijenaIikone>
                      <div>
                        <Price>{(item.cijena * 1).toFixed(2)} €</Price>
                        <PriceKn>
                          {(item.cijena * 7.5435).toFixed(2)} kn
                        </PriceKn>
                      </div>

                      <Mj>{item.mjernaJedinica}</Mj>
                      <NasProizvod isInBasket={true}>
                        <GiFarmer />
                      </NasProizvod>
                      {item.partner && (
                        <Partner isInBasket={true}>
                          <FaHandsHelping />
                        </Partner>
                      )}
                    </CijenaIikone>
                  </div>
                  <WrapPlusMinus
                    marginTop={marginTop}
                    marginTopMobile={marginTopMobile}
                  >
                    <Amount>{item.cartStanje} </Amount>
                    <div
                      style={{
                        width: "90px",
                        marginBottom: "2px",
                        marginLeft: "20px",
                      }}
                    >
                      <IoIosAddCircleOutline
                        onClick={() =>
                          handleAddItemAMount(item.id, item.cartStanje)
                        }
                      />
                      <IoIosRemoveCircleOutline
                        onClick={() =>
                          handleRemoveItemAMount(item.id, item.cartStanje)
                        }
                      />
                    </div>
                  </WrapPlusMinus>{" "}
                  <Trash>
                    <TfiTrash onClick={() => handleRemoveAllItems(item.id)} />
                  </Trash>
                  <ProizvodTotal>
                    {item.naziv}:
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        marginLeft: "auto",
                      }}
                    >
                      <div>{(item.cartStanje * item.cijena).toFixed(2)} €</div>
                      <PriceKn>
                        {(item.cartStanje * item.cijena * 7.5435).toFixed(2)} kn
                      </PriceKn>
                    </div>
                  </ProizvodTotal>
                  {item.napomena && (
                    <Napomena>
                      <div style={{ marginRight: "10px" }}>
                        <BsPencilSquare />
                      </div>
                      {item.napomena}
                    </Napomena>
                  )}
                </WrapData>
              </ProductInCart>
            ))}
          </WrapAllProducts>
          <WrapOrderWindow>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginBottom: "30px",
              }}
            >
              <BottomTotal>Ukupno: {ukupnaCijena.toFixed(2)}€</BottomTotal>
              <PriceKn>{(ukupnaCijena * 7.5434).toFixed(2)}kn</PriceKn>
            </div>

            <OrderButton
              onClick={() => {
                checkout();
                handleOrder(data);
              }}
            >
              Naruči
            </OrderButton>
          </WrapOrderWindow>
          {/* {ordered && <div>{data.map((item) => item.naziv)}</div>} */}
        </KosaricaWrap>
      )}
    </>
  );
}

export default Kosarica;

/* <ProductInCart key={item.id}>
  <WrapImage>
    <Image
      priority
      src={item.foto != null ? item.foto : "/vege.png"}
      layout="fill"
      objectFit="cover"
    />
  </WrapImage>
  <WrapData textColor="dark">
    <ProizvodTotal>
      {item.naziv}:
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginLeft: "auto",
        }}
      >
        <div>{(item.cartStanje * item.cijena).toFixed(2)} €</div>
        <PriceKn>
          {(item.cartStanje * item.cijena * 7.5435).toFixed(2)} kn
        </PriceKn>
      </div>
    </ProizvodTotal>
    <WrapNazivCijena direction="row" height="25px">
      <Naziv style={{ marginTop: "0px", fontSize: "25px" }}>
        {item.naziv}
      </Naziv>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "10px",
          paddingTop: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "10px",
            paddingTop: "5px",
          }}
        >
          <Price>{(item.cijena * 1).toFixed(2)} €</Price>
          <PriceKn>
            {(item.cijena * 7.5435).toFixed(2)} kn
          </PriceKn>
        </div>
        <Mj>{item.mjernaJedinica}</Mj>
        <NasProizvod
          isInBasket={true}
    
        >
          <GiFarmer />
        </NasProizvod>
        {item.partner && (
          <Partner
            isInBasket={true}
     
          >
            <FaHandsHelping />
          </Partner>
        )}
      </div>
    </WrapNazivCijena>
    <WrapPlusMinus
      marginTop={marginTop}
      marginTopMobile={marginTopMobile}
    >
      <Amount>{item.cartStanje} </Amount>
      <div
        style={{
          width: "90px",
          marginBottom: "2px",
          marginLeft: "20px",
        }}
      >
        <IoIosAddCircleOutline
          onClick={() =>
            handleAddItemAMount(item.id, item.cartStanje)
          }
        />
        <IoIosRemoveCircleOutline
          onClick={() =>
            handleRemoveItemAMount(item.id, item.cartStanje)
          }
        />
      </div>
    </WrapPlusMinus>{" "}
    <Trash>
      <TfiTrash onClick={() => handleRemoveAllItems(item.id)} />
    </Trash>
  </WrapData>
  {item.napomena && (
    <Napomena>
      <BsPencilSquare /> {item.napomena}
    </Napomena>
  )}
</ProductInCart> */
