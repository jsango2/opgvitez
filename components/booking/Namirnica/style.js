import styled from "styled-components";
export const WeekWrap = styled.div`
  position: relative;

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  min-width: 350px;
  background: ${(props) => props.backgroundColor};
  background-color: #3275a1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);

  /* padding-top: 3px; */
  z-index: 0;
  margin: 7px;
  /* cursor: pointer; */

  /* pointer-events: ${(props) => (props.length < 5 ? "auto " : "none")}; */
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
  input {
    width: 50px;
    margin-left: 5px;
    margin-right: 5px;
  }
  /* &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  } */
  @media only screen and (max-width: 600px) {
    /* margin: 8px 6px; */
    width: ${(props) => props.widthMobile} !important;
    min-width: unset;

    height: 310px;
  }
  @media only screen and (max-width: 450px) {
    width: 86vw !important;
    min-width: 338px;

    height: 290px;
  }
`;
export const Naziv = styled.h3`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */
  margin-bottom: 5px;
  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapNazivCijena = styled.div`
  width: 90%;
  height: ${(props) => (props.height ? props.height : "55px")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  align-items: flex-start;
  padding-left: 10px;
  @media only screen and (max-width: 600px) {
    height: 55px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Price = styled.h3`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const PriceKn = styled.h3`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  /* Gray 6 */

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapPricesInNamirnica = styled.div`
  position: relative;
  display: flex;
  color: #00425a;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapPlusMinus = styled.div`
  /* margin-left: auto; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 155px;
  height: ${(props) => (props.height ? props.height : "55px")};

  margin-top: ${(props) => props.marginTop};

  svg {
    font-size: 28px;
    margin-left: 5px;
    cursor: pointer;
    color: "#093b69";
  }
  input,
  select {
    height: 40px;
    /* width: 450px; */
    width: 70px;
    background: #ffffff;
    /* Gray04 */

    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    color: #093b69;
    padding-left: 10px;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  @media only screen and (max-width: 900px) {
    margin-top: auto;
  }
  @media only screen and (max-width: 600px) {
    input {
      width: 48px;
      font-size: 15px;
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Napomena = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 160px;
  right: 17px;
  top: 20px;
  svg {
    font-size: 28px;
    margin-left: 5px;
    cursor: pointer;
    color: "#093b69";
  }
  input,
  select,
  textarea {
    height: 40px;
    /* width: 450px; */
    width: 220px;
    background: #ffffff;
    /* Gray04 */
    resize: none;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    color: #4f4f4f;
    padding-left: 10px;
  }

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const DiskontWrap = styled.div`
  position: ${(props) => (props.isInBasket ? "relative" : "absolute")};

  z-index: 3;

  top: ${(props) => (props.isInBasket ? "0px" : "8px")};
  right: ${(props) => (props.isInBasket ? "0px" : "8px")};
  font-size: ${(props) => (props.isInBasket ? "16px" : "28px")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};
  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};
  border-radius: 4px;
  /* border: 1px solid white; */
  background-color: #f4c914;

  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    top: -13px;
    right: -6px;
    height: 17px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const DiskontText = styled.div`
  font-size: ${(props) => (props.isInBasket ? "16px" : "20px")};

  font-weight: bold;
  color: #0d3151;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Amount = styled.div`
  margin: 0 10px;
  width: 40px;
  font-weight: bold;
  font-size: 42px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  svg {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  background-color: white;
  padding: 8px 0 8px 30px;
  div > * {
    color: ${(props) => (props.textColor === "dark" ? "#093b69" : "#093b69")};
  }
  @media only screen and (max-width: 1000px) {
    padding: 6px 0 6px 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 6px 0 6px 10px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapInBasket = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 4%;
  bottom: 15px;
  font-size: ${(props) => (props.iconSize === "small" ? "14px" : "36px")};
  font-weight: 700;
  width: 144px;
  height: 42px;
  border-radius: 10px;
  background-color: ${(props) => (props.warning ? "#dc3545" : "#2ecc71")};
  cursor: pointer;
  /* width: 400px !important; */
  /* flex-direction: column;
  align-items: center; */
  /* margin-left: 80px; */
  color: ${(props) => (props.textColor === "dark" ? "#093b69" : "white")};
  svg {
    font-size: 20px;
    margin-left: 4px;
  }
  @media only screen and (max-width: 600px) {
    bottom: 10px;
    font-size: 11px;
    width: 114px;
    height: 33px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Alert = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5%;
  bottom: 65px;
  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
  /* width: 400px !important; */
  /* flex-direction: column;
  align-items: center; */
  /* margin-left: 80px; */
  color: #093b69;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const NasProizvod = styled.div`
  position: ${(props) => (props.isInBasket ? "relative" : "absolute")};
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};

  left: ${(props) => (props.isInBasket ? "0px" : "10px")};
  top: ${(props) => (props.isInBasket ? "-1px" : "8px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "28px")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};
  border-radius: 8px;
  background-color: #edce4a;
  svg {
    color: ${(props) => (props.isInBasket ? "white !important" : "")};
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Partner = styled.div`
  position: ${(props) => (props.isInBasket ? "relative" : "absolute")};

  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};
  left: ${(props) => (props.isInBasket ? "0px" : "10px")};
  top: ${(props) => (props.isInBasket ? "-1px" : "8px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "24pxpx")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};

  border-radius: 8px;
  background-color: #bfdb38;
  svg {
    color: ${(props) => (props.isInBasket ? "white !important" : "")};
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Kategorija = styled.div`
  position: absolute;

  z-index: 3;

  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};
  left: ${(props) => (props.isInBasket ? "0px" : "20px")};
  bottom: 8px;

  font-weight: 700;
  color: #00425a;
  background-color: white;
  border-radius: 5px;
  padding: 3px 8px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Mj = styled.div`
  position: relative;
  /* right: 20px;
  top: 25px; */
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  width: auto;
  padding: 5px 5px;
  height: 25px;
  border-radius: 5px;
  background-color: #00425a;
  color: white !important;
  bottom: 1px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.7231486344537815) 0%,
    rgba(0, 0, 0, 0.36740633753501406) 0%,
    rgba(2, 11, 13, 0) 78%
  );
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
