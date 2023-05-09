import React from "react";
import Button from "../../../button/index";
import { CloseX } from "../../Namirnice/reservationModal/style";
import { PopupForm, Fixed } from "./style.js";
function NoviUnos({
  handleNewProductClose,
  handleSubmit,
  setNaziv,
  naziv,
  setKategorija,
  kategorija,
  setMjernaJedinica,
  mjernaJedinica,
  setCijena,
  cijena,
  setDiscount,
  discount,
  setFree,
  free,
  naslov,
  buttonSave,
  buttonDelete,
  handleDelete,
  handleClose,
}) {
  return (
    <PopupForm>
      <CloseX onClick={handleClose}>X</CloseX>
      <Fixed>{naslov}</Fixed>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="cijena" style={{ color: "darkblue" }}>
              Naziv namirnicea
            </label>
            <input
              name="naziv"
              type="text"
              value={naziv}
              onChange={(event) => setNaziv(event.target.value)}
            />{" "}
          </div>
          <div>
            <label htmlFor="Free" style={{ color: "darkblue" }}>
              Kategorija proizvodas
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
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div style={{ color: "darkblue" }}>Mjerna jedinica</div>
            <select
              name="MjernaJedinica"
              type="select"
              value={mjernaJedinica}
              onChange={(event) => {
                console.log(event.target.value);
                setMjernaJedinica(event.target.value);
              }}
            >
              <option value="1kg">1kg</option>
              <option value="komad">komad</option>
              <option value="cjelovito pakiranje">cjelovito pakiranje</option>
              <option value="litra">litra</option>
              <option value="vezica">vezica</option>
              <option value="0.5kg">0.5kg</option>
              <option value="0.1kg">0.1kg</option>
              <option value="teglica 450g">teglica 450g</option>
              <option value="teglica 900g">teglica 900g</option>
            </select>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <div style={{ color: "darkblue" }}>Cijena</div>
            <input
              name="cijena"
              type="number"
              value={cijena}
              onChange={(event) => setCijena(event.target.value)}
            />{" "}
          </div>
        </div>
        <div style={{ display: "flex", width: "90%" }}>
          <div style={{ display: "flex", width: "90%" }}>
            <label htmlFor="discount" style={{ color: "darkblue" }}>
              Namirnica na akciji
            </label>

            <input
              style={{ width: "20px", marginRight: "20px" }}
              type="checkbox"
              name="discount"
              checked={discount}
              onChange={() => setDiscount(!discount)}
            ></input>
          </div>

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
        </div>
        <div>
          {buttonSave && <Button type="submit" text="Submit" />}
          {buttonDelete && (
            <Button handleOnClick={handleDelete} text="Delete" />
          )}
        </div>
      </form>
    </PopupForm>
  );
}

export default NoviUnos;
