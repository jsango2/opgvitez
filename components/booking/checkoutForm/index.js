import React, { useState, useEffect } from "react";
import { CloseIcon } from "../Namirnice/style.js";
import {
  CheckoutWrap,
  Amount,
  FormaSubmitedNote,
  OrderTitle,
  Naslov,
  WrapEachOrderItem,
  NoteTitle,
  NoteAmount,
  NoteNapomena,
} from "./style.js";
import { MdClose } from "react-icons/md";
import Button from "../../button/index";

function checkoutForm({
  closeCheckoutWindow,
  suma,
  cartData,
  handleCartReset,
}) {
  const [data, setData] = useState([]);
  const [imePrezime, setImePrezime] = useState("");
  const [email, setEmail] = useState("");
  const [adresa, setAdresa] = useState("");
  const [mobitel, setMobitel] = useState("");
  const [danDostave, setDanDostave] = useState("");
  const [nacinPlacanja, setNacinPlacanja] = useState("");
  const [formSubmited, setFormSubmited] = useState(false);

  useEffect(() => {
    cartData.length > 0 && setData(cartData);
  }, [cartData]);
  console.log("data", cartData.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "form submited",
      imePrezime,
      email,
      adresa,
      mobitel,
      danDostave,
      "Iznos kosarice:",
      suma,
      "Eur"
    );
    setFormSubmited(true);
    setTimeout(() => {
      setImePrezime("");
      setEmail("");
      setAdresa("");
      setMobitel("");
      setDanDostave("");
      closeCheckoutWindow();
      handleCartReset();
      setFormSubmited(false);
    }, 3000);
  };
  return (
    <>
      {formSubmited && (
        <FormaSubmitedNote>
          <OrderTitle>Narudžba zaprimljena</OrderTitle>
          {/* {cartData.map((item) => (
            <WrapEachOrderItem>
              <NoteTitle>{item.naziv}</NoteTitle>
              <NoteAmount>{item.kolicina}</NoteAmount>
              <NoteAmount>x {item.cijena} Eur</NoteAmount>
              {item.napomena && <NoteNapomena>{item.napomena}</NoteNapomena>}
            </WrapEachOrderItem>
          ))} */}
        </FormaSubmitedNote>
      )}

      <CheckoutWrap>
        <CloseIcon
          onClick={() => closeCheckoutWindow()}
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
        <Naslov>Ispunite vaše podatke za dostavu</Naslov>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
            <label htmlFor="imePrezime" style={{ color: "#093b69" }}>
              Ime i Prezime
            </label>
            <input
              name="imePrezime"
              type="text"
              value={imePrezime}
              onChange={(event) => setImePrezime(event.target.value)}
            />{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
            <label htmlFor="cijena" style={{ color: "#093b69" }}>
              E-mail
            </label>
            <input
              name="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
            <label htmlFor="adresa" style={{ color: "#093b69" }}>
              Adresa za dostavu
            </label>
            <input
              name="adresa"
              type="adresa"
              value={adresa}
              onChange={(event) => setAdresa(event.target.value)}
            />{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
            <label htmlFor="mobitel" style={{ color: "#093b69" }}>
              Broj telefona
            </label>
            <input
              name="mobitel"
              type="tel"
              value={mobitel}
              onChange={(event) => setMobitel(event.target.value)}
            />{" "}
          </div>

          <div style={{ color: "#093b69", marginTop: "15px" }}>
            Način plaćanja
          </div>
          <select
            name="nacinPlacanja"
            type="select"
            value={nacinPlacanja}
            onChange={(event) => {
              setNacinPlacanja(event.target.value);
            }}
          >
            <option>Odaberi</option>
            <option value="Transkacijski">Transkacijski</option>
            <option value="Pouzećem">Pouzećem</option>
          </select>

          <div style={{ color: "#093b69", marginTop: "15px" }}>Dan dostave</div>
          <select
            name="danDostave"
            type="select"
            value={danDostave}
            onChange={(event) => {
              setDanDostave(event.target.value);
            }}
          >
            <option>Odaberi</option>
            <option value="Pon">Ponedjeljak - samo tvrtke</option>
            <option value="Uto">Utorak (Od 8h do 18h)</option>
            <option value="Čet">Četvrtak (Od 8h do 18h)</option>
          </select>
          <Amount>Ukupni iznos košarice: {suma}€ </Amount>
          <div>
            <Button type="submit" text="Naruči" buttonType="dark" />
          </div>
        </form>
      </CheckoutWrap>
    </>
  );
}

export default checkoutForm;
