import styled from "styled-components";

import bg from "../../../images/booking/bg.png";

// import { HeroWrap } from "./style.js"

export const Wrap = styled.div`
  position: relative;
  margin: 50px auto 0 auto;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 4;
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapPrice = styled.div`
  position: relative;
  z-index: 5;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  /* identical to box height, or 36px */
  align-items: center;
  /* Gray 6 */

  color: #f2f2f2;
  width: 759px;
  height: auto;
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
  background: rgba(49, 59, 66, 0.3);
  /* backdrop-filter: blur(2px); */

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
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  margin-top: 163px;
  margin-bottom: 0;
  /* identical to box height, or 66px */

  text-align: center;

  /* TAMNO PLAVA */
  z-index: 4;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    margin-top: 103px;
  }
  @media only screen and (max-width: 420px) {
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

  color: #f2f2f2;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Line = styled.div`
  position: relative;
  margin-left: 5px;
  width: 140px;
  height: 1px;
  background-color: white;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 750px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapBox = styled.div`
  position: relative;
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  margin: 0 15px;
  /* identical to box height, or 17px */

  /* Gray 6 */

  color: #f2f2f2;
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
  margin: 0 15px;
  height: 45px;
  /* identical to box height, or 17px */

  /* Gray 6 */

  color: #f2f2f2;
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

export const PriceFrom = styled.h4`
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  /* identical to box height, or 17px */

  /* Gray 6 */
  top: -20px;
  color: #f2f2f2;
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
  font-size: 30px;
  line-height: 120%;
  /* identical to box height, or 36px */

  /* Gray 6 */
  margin-left: 5px;
  margin-right: 35px;
  color: #f2f2f2;
  @media only screen and (max-width: 750px) {
    margin: 0 0 30px 0;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const OverlayBlur = styled.div`
  position: absolute;
  z-index: 6;
  width: 100%;
  height: 100%;
  /* padding: 10px; */
  background: rgb(94 93 93 / 50%);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(2px);
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

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  }
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
