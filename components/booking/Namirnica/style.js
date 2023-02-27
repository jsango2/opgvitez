import styled from "styled-components";
export const WeekWrap = styled.div`
  position: relative;

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  min-width: 470px;
  background: ${(props) => props.backgroundColor};
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);

  /* padding-top: 3px; */
  z-index: 0;
  margin: 1px auto 1px auto;
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
    /* width: ${(props) => props.widthMobile} !important; */
    width: 100%;
    min-width: unset;

    height: ${(props) => (props.heightMobile ? props.heightMobile : "150px")};
  }
  @media only screen and (max-width: 450px) {
    width: 95vw !important;
    min-width: 338px;
  }
`;
export const Naziv = styled.h3`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  /* or 19px */
  margin-bottom: 5px;
  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
    font-size: 17px;
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
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
    font-size: 14 px;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 105px;
  height: ${(props) => (props.height ? props.height : "55px")};
  right: 20px;
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
    background: #ffffff;
    /* Gray04 */
    width: 77px;
    font-size: 39px;
    font-weight: 700;

    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    /* or 19px */

    /* Gray 2 */
    text-align: center;
    color: #093b69;
    padding-left: 10px;
    margin-bottom: 5px;
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
      width: 70px;
      font-size: 32px;
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
  left: 34px;
  top: 78px;
  svg {
    font-size: 28px;
    margin-left: 5px;
    cursor: pointer;
    color: "#093b69";
  }
  input,
  select,
  textarea {
    height: 23px;
    /* width: 450px; */
    width: 220px;
    background: #ffffff;
    /* Gray04 */
    resize: none;
    border: 0.3px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    padding-left: 10px;
    outline: 0.2px solid grey;
  }
  textarea::placeholder {
    color: #093b69;
    opacity: 70%;
  }
  textarea:focus,
  input:focus {
    border: none !important;
  }

  @media only screen and (max-width: 450px) {
    left: 17px;
    top: 80px;
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
  top: -25px;
  width: 100px;
  height: 100px;
  color: white;
  margin-left: 10px;
  border-radius: 50%;
  overflow: hidden;

  svg {
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 85px;
    height: 85px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const MinusWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 100%;
  background-color: ${(props) => (props.warning ? "#dc3545" : "#26b061")};
  /* background-color: #26b061; */

  svg {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const PlusWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 100%;
  background-color: ${(props) => (props.warning ? "#dc3545" : "#26b061")};
  /* background-color: #26b061; */
  svg {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapMiddle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 73px;
  height: 100%;
  background-color: ${(props) => (props.warning ? "#dc3545" : "#2bc36b")};
  /* background-color: #26b061; */
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  width: 73%;
  height: 100%;
  background-color: white;
  padding: 8px 0 8px 30px;
  justify-content: space-between;
  div > * {
    color: ${(props) => (props.textColor === "dark" ? "#093b69" : "#093b69")};
  }
  @media only screen and (max-width: 1000px) {
    padding: 13px 0 6px 10px;
  }
  @media only screen and (max-width: 600px) {
    /* padding: 6px 0 6px 10px; */
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapInBasket = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  right: 4%;
  bottom: 15px;
  font-size: ${(props) => (props.iconSize === "small" ? "17px" : "36px")};
  font-weight: 700;
  width: 144px;
  height: 34px;
  border-radius: 20px;
  background-color: ${(props) => (props.warning ? "#dc3545" : "#2ecc71")};
  cursor: pointer;
  /* width: 400px !important; */
  /* flex-direction: column;
  align-items: center; */
  /* margin-left: 80px; */
  color: ${(props) => (props.textColor === "dark" ? "#093b69" : "white")};
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  svg {
    font-size: 20px;
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    bottom: 10px;
    font-size: 14px;
    width: 117px;
    height: 33px;
  }
  @media only screen and (max-width: 410px) {
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

  right: 20px;
  top: ${(props) => (props.isSlider ? "10px" : "40px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "28px")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};
  border-radius: 8px;
  background-color: #edce4a;
  svg {
    color: white !important;
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
  right: 20px;
  top: ${(props) => (props.isSlider ? "10px" : "40px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "24pxpx")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};

  border-radius: 8px;
  background-color: #bfdb38;
  svg {
    color: white !important;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Kategorija = styled.div`
  position: absolute;
  z-index: 3;
  margin-left: 0px;
  right: 20px;
  top: 13px;
  font-weight: 700;
  color: white;
  background-color: #fe9920;
  border-radius: 5px;
  padding: 3px 8px;
  font-size: 10px;

  cursor: pointer;
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

export const MouseOverPartner = styled.div`
  position: absolute;
  z-index: 2;
  top: 38px;
  right: 0px;
  padding: 3px 6px;
  width: 130px;
  color: white !important;
  text-align: center;
  background: #bfdb38;
  border-radius: 5px;
  font-size: 11px !important ;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const MouseOverNas = styled.div`
  position: absolute;
  z-index: 2;
  top: 38px;
  right: 0px;
  padding: 3px 6px;
  width: 110px;
  color: white !important;
  text-align: center;
  background: #edce4a;
  border-radius: 5px;
  font-size: 11px !important ;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
