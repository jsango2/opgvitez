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
  z-index: 46;
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
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #093b69;
  width: 459px;
  height: auto;
  margin-left: auto;
  @media only screen and (max-width: 750px) {
    margin-top: 0px;
    width: 49px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapSection = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  min-height: 100vh;
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
  background: linear-gradient(
    rgba(247, 247, 247, 0) 0%,
    rgb(247, 247, 247) 100%
  );
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
  margin-bottom: 30px;
  /* identical to box height, or 66px */

  text-align: center;

  /* TAMNO PLAVA */
  z-index: 4;
  color: #093b69;
  margin-top: 60px;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    margin-top: 80px;
    margin-bottom: 256px;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 50px;
  }
`;
export const Title2 = styled(Title)`
  margin-top: 70px;

  @media only screen and (max-width: 600px) {
    font-size: 26px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 40px;
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
  margin-top: 33px;
  input,
  select {
    height: 30px;
    /* width: 450px; */

    background: #ffffff;
    /* Gray04 */

    border: 2px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    color: #4f4f4f;
    padding-left: 10px;
  }
  margin-left: 0px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 1000px) {
    select {
      width: 185px;
    }
    margin-right: 10px;
    margin-top: 18px;
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
  @media only screen and (max-width: 380px) {
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
  top: 45px;
  left: 0px;
  border-bottom: 0.5px solid grey;
  border-radius: 5px;
  background-color: white;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Lista = styled.div`
  color: #00425a;
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
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 45px;
  /* top: 62px;
  left: 0; */
  input,
  select {
    height: 35px;

    background: #ffffff;
    /* Gray04 */

    border: 2px solid #eaeaea;
    border-radius: 8px;
    /* font-family: "Montserrat"; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */
    opacity: 0.8;
    color: #4f4f4f;
    padding-left: 10px;
  }
  @media only screen and (max-width: 1000px) {
    background-color: #e5e5e5;
    width: 100%;

    input {
      width: 75%;
    }
  }
  @media only screen and (max-width: 700px) {
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
  z-index: 45;
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
  right: 0;
  top: 6px;
  width: 35px;
  height: 35px;
  z-index: 45;
  color: #00425a;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    left: 195px;
    top: 16px;
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
    height: 189px;
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
  width: 73%;

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

export const WrapInBasket = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  right: 140px;
  bottom: 10px;
  font-size: 36px;
  font-weight: 700;
  width: auto;
  height: 34px;
  border-radius: 20px;
  background-color: #239d56;
  cursor: pointer;
  /* width: 400px !important; */
  /* flex-direction: column;
  align-items: center; */
  /* margin-left: 80px; */
  color: white;
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
    font-size: 11px;
    width: auto;
    height: 33px;
  }
  @media only screen and (max-width: 500px) {
    width: 77px;
    right: 130px;
  }
  @media only screen and (max-width: 450px) {
    /* right: 120px; */
  }
  @media only screen and (max-width: 400px) {
  }
  @media only screen and (max-width: 370px) {
    /* right: 120px; */
  }
`;

export const MinusWrap = styled.div`
  position: relative;
  z-index: 40;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 100%;
  background-color: #26b061;
  /* background-color: #26b061; */
  margin-right: 1px;
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
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 100%;
  background-color: #26b061;
  margin-left: 1px;
  /* background-color: #26b061; */
  svg {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
// export const Napomena = styled.div`
//   position: absolute;
//   top: 43px;
//   left: 240px;
//   color: #093b69;
//   width: 40%;

//   svg {
//     width: 20px;
//     font-size: 24px;
//     /* margin-right: 10px; */
//   }
//   display: flex;
//   /* justify-content: flex-start; */
//   align-items: flex-start;
//   @media only screen and (max-width: 600px) {
//     width: 60%;

//     top: 100px;
//     left: 24px;
//   }
//   @media only screen and (max-width: 420px) {
//   }
// `;
export const Napomena = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 160px;
  left: 22px;
  top: 69px;
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

  @media only screen and (max-width: 600px) {
    top: 96px;
  }
  @media only screen and (max-width: 420px) {
    top: 88px;
  }
`;
export const WrapImage = styled.div`
  position: relative;
  top: 18px;
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
    height: 25px;
    margin-bottom: 10px;
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
  position: absolute;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 40px;
  font-weight: 700;
  color: #093b69;
  bottom: 3px;
  right: 390px;
  @media only screen and (max-width: 500px) {
    right: 290px;
  }
  @media only screen and (max-width: 450px) {
    right: 270px;
  }
  @media only screen and (max-width: 390px) {
    right: 250px;
  }
`;

export const WrapLoader = styled.div`
  position: absolute;
  top: 140%;
  z-index: 50;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
  }
  @media only screen and (max-width: 450px) {
  }
  @media only screen and (max-width: 390px) {
  }
`;

export const LoaderText = styled.div`
  position: absolute;
  top: calc (40% - 50px);
  z-index: 50;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #093b69;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  @media only screen and (max-width: 500px) {
  }
  @media only screen and (max-width: 450px) {
  }
  @media only screen and (max-width: 390px) {
  }
`;
export const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;

  z-index: 45;
  width: 100%;
  height: 80px;
  display: flex;
  padding-left: 20px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-weight: 700;
  font-size: 18px;
  text-align: left;
  background-color: #2ecc71;
  @media only screen and (max-width: 1000px) {
    height: 59px;
  }
  @media only screen and (max-width: 450px) {
  }
  @media only screen and (max-width: 390px) {
  }
`;
