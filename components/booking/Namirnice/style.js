import styled from "styled-components";

import bg from "../../../images/booking/bg.png";

// import { HeroWrap } from "./style.js"

export const Wrap = styled.div`
  position: relative;
  margin: 50px auto 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 4;

  @media only screen and (max-width: 850px) {
    width: 97%;
    overflow: hidden;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const BlurOverlay = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(
    0.93deg,
    rgba(21, 31, 43, 0.245) 0.67%,
    rgba(197, 223, 255, 0.325) 99.08%
  ); */
  backdrop-filter: blur(6px);
  top: 0;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapPrice = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 5;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* identical to box height, or 36px */
  align-items: center;
  /* Gray 6 */

  color: #093b69;
  width: 459px;
  height: auto;
  margin-left: auto;
  @media only screen and (max-width: 750px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapSection = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* padding-top: 163px; */
  overflow: hidden;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  padding-bottom: 80px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  backdrop-filter: blur(3px);

  z-index: 3;

  /* Note: backdrop-filter has minimal browser support */
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Title = styled.h1`
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 120%;
  margin-top: 63px;
  margin-bottom: 0;
  /* identical to box height, or 66px */

  text-align: center;

  /* TAMNO PLAVA */
  z-index: 4;
  color: #093b69;
  margin-top: 130px;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 90px;
  }
`;
export const Title2 = styled(Title)`
  margin-top: 70px;

  @media only screen and (max-width: 600px) {
    font-size: 26px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 120px;
  }
`;
export const SubTitle = styled.h1`
  position: relative;
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 120%;
  /* margin-top: 163px; */
  /* identical to box height, or 66px */

  text-align: center;

  /* TAMNO PLAVA */
  z-index: 4;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    /* margin-top: 103px; */
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const PopupForm = styled.div`
  position: fixed;
  margin: 50px auto 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 5;
  top: 150px;
  z-index: 6;
  width: 580px;
  height: 715px;

  background: #ffffff;
  /* Gray04 */

  border: 1px solid #eaeaea;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  form {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 320px;
    border: 1px solid black;
    padding: 20px 0;
    border-radius: 10px;
    background-color: #68bfe2;
  }
  input,
  select {
    height: 60px;
    width: 300px;
    text-align: center;
    margin: 6px;
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 100%;
    }
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapUp = styled.div`
  z-index: 5;
  position: relative;

  display: flex;
  align-items: center;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  margin-left: auto;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapDown = styled.div`
  z-index: 5;
  position: relative;

  display: flex;
  align-items: center;
  margin-top: 70px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const YourPrice = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* identical to box height, or 22px */

  /* Gray 6 */

  color: #093b69;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

// export const Line = styled.div`
//   position: relative;
//   margin-left: 5px;
//   width: 140px;
//   height: 1px;
//   background-color: white;

//   /* background-image: url(${bg});
//   background-position: center;
//   background-size: cover; */
//   @media only screen and (max-width: 750px) {
//     display: none;
//   }
//   @media only screen and (max-width: 420px) {
//   }
// `;
export const WrapBox = styled.div`
  position: relative;
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  margin: 0 15px;
  /* identical to box height, or 17px */

  /* Gray 6 */

  color: black;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 450px) {
    margin: 0 5px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Loading = styled.div`
  position: relative;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 120%;
  margin: 30px 15px;
  height: 45px;
  /* identical to box height, or 17px */

  /* Gray 6 */

  color: #093b69;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Box = styled.div`
  position: relative;
  display: flex;
  width: 59px;
  height: 18px;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  border-radius: 3px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 450px) {
    width: 39px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Kategorije = styled.h4`
  position: relative;
  z-index: 10;
  color: black;
  height: 40px;
  input,
  select {
    height: 40px;
    /* width: 450px; */

    background: #ffffff;
    /* Gray04 */

    border: 2px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    color: #4f4f4f;
    padding-left: 10px;
  }
  margin-left: 30px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 1000px) {
    select {
      width: 130px;
    }
    margin-left: 10px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const PriceFrom = styled.h4`
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  /* identical to box height, or 17px */

  /* Gray 6 */
  top: -20px;
  color: #093b69;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 750px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  /* identical to box height, or 36px */

  /* Gray 6 */
  margin-left: 5px;
  color: #093b69;
  text-align: right;
  @media only screen and (max-width: 750px) {
    margin: 0 0 30px 0;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const OverlayBlur = styled.div`
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* padding: 10px; */
  /* background: rgb(94 93 93 / 50%); */
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  @media only screen and (max-width: 750px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Alert = styled.div`
  position: fixed;
  z-index: 6;
  color: #0d3255;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  background-color: white;
  /* border: 1px solid darkblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  top: 30%;
  left: 50%;
  padding: 20px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.65);
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Button = styled.div`
  width: 290px;
  height: 49px;

  border: 2px solid #ffffff;
  /* Medium Drop */

  filter: drop-shadow(0px 14px 23px rgba(28, 37, 44, 0.08));
  border-radius: 7px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 24px */

  text-align: center;

  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: grey;

  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  }
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
    a {
      text-decoration: none;
      color: #035865;
    }
    margin: 0 auto;
    background-color: white;
    color: #035865;
    font-size: 16px;
  }

  @media only screen and (max-width: 420px) {
  }
`;

export const KosaricaWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  /* position: relative; */
  z-index: 50;
  /* border: 2px solid black; */
  width: 100%;
  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};
  overflow-y: scroll;
  height: ${(props) => props.height};
  /* height: 100%; */
  max-height: 91%;
  min-height: 250px;
  padding: 40px 20px 80px 20px;
  background-color: white;
  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  position: fixed;
  top: 80px;
  border-radius: 5px;
  padding-bottom: 30px;
  @media only screen and (max-width: 1000px) {
    top: 58px;
  }
  @media only screen and (max-width: 870px) {
    min-height: 550px;
    padding: 70px 20px 80px 20px;
    height: ${(props) => props.heightMobile};
    flex-direction: column;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 600px) {
    padding: 70px 3px 80px 3px;
    height: 100vh;
    width: 100%;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const ProizvodRed = styled.div`
  display: flex;
  height: auto;
  margin-bottom: 10px;
  border: 0.5px solid black;
  border-radius: 4px;
  padding: 10px 20px;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const ProizvodNaziv = styled.div`
  font-weight: bold;
  margin-right: 5px;
  padding: 0 20px;
  min-width: 220px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const ProizvodCijena = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const ProizvodKoličina = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const ProizvodTotal = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #093b69;
  right: 30px;
  bottom: 10px;
  width: 205px;
  position: absolute;

  text-align: right;
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapIcons = styled.div`
  display: flex;
  margin-left: auto;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid darkblue;
  padding: 0;
  margin-left: 5px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapLista = styled.div`
  width: 510px;
  height: 600px;
  position: absolute;
  z-index: 1;
  overflow-y: scroll;
  top: 50px;
  left: -15px;
  border: 0.5px solid grey;
  border-radius: 5px;
  background-color: white;
  @media only screen and (max-width: 550px) {
    width: 100vw;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Lista = styled.div`
  color: black;
  position: relative;
  /* top: 50px;
  left: 0; */
  z-index: 23;
  opacity: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  flex-wrap: wrap;
  /* box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  padding: 41px; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  height: auto;
  @media only screen and (max-width: 550px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapInputSelector = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  input,
  select {
    height: 40px;
    /* width: 450px; */

    background: #ffffff;
    /* Gray04 */

    border: 2px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    color: #4f4f4f;
    padding-left: 10px;
  }
  @media only screen and (max-width: 700px) {
    input {
      width: 130px;
    }
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapHeader = styled.div`
  padding-top: 20px;
  position: fixed;
  z-index: 70;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 0 10%;
  box-shadow: 0px 4px 23px rgba(28, 37, 44, 0.08);
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapBottomBar = styled.div`
  padding-top: 20px;
  position: fixed;
  bottom: 0;
  height: 50px;
  z-index: 60;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2ecc71;
  width: 100%;
  padding: 0;
  box-shadow: 0px 4px 23px rgba(28, 37, 44, 0.08);
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const TotalPriceBottomBar = styled.div`
  padding-top: 20px;
  position: relative;
  bottom: 0;
  height: 50px;
  z-index: 61;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #229954;
  width: 140px;
  padding: 0 5% 0 3%;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const TotalPriceBottomBarKn = styled.div`
  position: relative;
  font-size: 12px;
  z-index: 61;
  width: 100%;
  font-weight: 300;
  text-align: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const VievCart = styled.div`
  padding-top: 20px;
  position: relative;
  bottom: 0;
  height: 50px;
  z-index: 61;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 3% 0 3%;
  font-weight: 500;
  svg {
    font-size: 22px;
    color: white;
    margin-top: 3px;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapHeaderMobile = styled.div`
  padding-top: 20px;
  position: fixed;
  height: 60px;
  z-index: 30;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 0 5% 0 3%;
  box-shadow: 0px 4px 23px rgba(28, 37, 44, 0.08);
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapAllProducts = styled.div`
  position: relative;
  width: 65%;

  color: black;
  z-index: 20;
  /* border: 2px solid black; */
  /* width: 100%; */
  /* height: auto; */
  /* max-height: 700px; */
  margin-bottom: 30px;
  background-color: white;
  /* box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08); */
  height: ${(props) => props.height};

  top: 0px;
  border-radius: 5px;
  padding-bottom: 30px;

  @media only screen and (max-width: 870px) {
    height: ${(props) => props.heightMobile};

    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const WrapOrderWindow = styled.div`
  position: relative;
  background-color: #e9eaeb;
  padding: 30px 50px;
  border-radius: 10px;
  max-height: 240px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  right: 25px;
  top: 10px;

  z-index: 15;
  color: black;
  font-size: 20px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const OrdersIndex = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 10px;
  top: 18px;
  left: 18px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  font-weight: bold;
  z-index: 15;
  color: black;
  font-size: 20px;
  top: 12px;
  right: 20px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const OrderButton = styled.div`
  position: relative;
  font-weight: normal;
  width: 165px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d2f45;
  /* margin-top: 30px; */
  margin-left: auto;
  cursor: pointer;
  padding: 10px;
  :hover {
    background-color: #353751;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const ProductInCart = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  display: flex;
  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  padding-top: 10px;
  margin-top: 2px;
  border-bottom: 0.3px solid rgba(23, 56, 97, 0.3);
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    height: 200px;
  }
  @media only screen and (max-width: 600px) {
    height: 230px;
  }
`;
export const Trash = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  svg {
    font-size: 32px;
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
    padding: 16px 0 6px 10px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const BottomTotal = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: auto;

  color: #093b69;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Hover = styled.div`
  position: absolute;
  font-size: 15px;
  font-weight: 700;
  color: #093b69;
  top: -3px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Line = styled.div`
  position: absolute;
  height: 0.1px;
  width: 50%;
  background-color: #093b69;
  bottom: 10px;
  /* margin-right: 100px; */
  right: 210px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Napomena = styled.div`
  position: absolute;
  top: 43px;
  left: 240px;
  color: #093b69;
  width: 40%;

  svg {
    width: 20px;
    font-size: 24px;
    /* margin-right: 10px; */
  }
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
  @media only screen and (max-width: 600px) {
    width: 60%;

    top: 112px;
    left: 24px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;

  width: 200px;
  /* height: 100%; */

  @media only screen and (max-width: 1000px) {
    width: 130px;
  }
  @media only screen and (max-width: 870px) {
    height: 100%;
  }
`;

export const CijenaIikone = styled.div`
  position: relative;
  width: auto;
  min-width: 200px;
  display: flex;

  @media only screen and (max-width: 1000px) {
    width: 130px;
  }
  @media only screen and (max-width: 870px) {
    height: 100%;
  }
`;
export const WrapNazivCijena = styled.div`
  width: 90%;
  height: ${(props) => (props.height ? props.height : "auto")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  align-items: flex-start;
  padding-left: 10px;
  @media only screen and (max-width: 600px) {
    height: 44px;
    margin-bottom: 15px;
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

export const WrapPlusMinus = styled.div`
  /* margin-left: auto; */
  position: relative;
  z-index: 40;

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
    z-index: 40;
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

export const Amount = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 35px;
  font-weight: 700;
  margin-top: 20px;
  color: #093b69;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
