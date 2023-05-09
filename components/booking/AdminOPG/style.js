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
  @media only screen and (max-width: 600px) {
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  /* identical to box height, or 36px */
  align-items: center;
  /* Gray 6 */

  color: #f2f2f2;
  width: 100%;
  height: 50px;
  @media only screen and (max-width: 600px) {
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
  padding-top: 163px;
  padding-bottom: 80px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
    padding-top: 83px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(
    0.93deg,
    rgba(21, 31, 43, 0.245) 0.67%,
    rgba(197, 223, 255, 0.325) 99.08%
  ); */
  backdrop-filter: blur(2px);
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 20;

  /* Note: backdrop-filter has minimal browser support */
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
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
  backdrop-filter: blur(2px);
  top: 0;
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
  font-size: 35px;
  line-height: 120%;
  /* identical to box height, or 66px */

  text-align: center;

  /* TAMNO PLAVA */
  z-index: 4;
  color: darkblue;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const NoviProizvodButton = styled.h1`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 239px;
  height: 53px;
  cursor: pointer;
  /* SUNRISE / White */
  background: radial-gradient(
    61.32% 215.39% at 93.04% 39.63%,
    #3ea0c9 0%,
    #1e7ca4 100%
  );
  border: 1px solid darkblue;

  /* Medium Drop */

  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  border-radius: 7px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  /* SUNRISE/Coral */

  color: white;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  }
  a {
    text-decoration: none;
    color: #035865;
  }
  @media only screen and (max-width: 1050px) {
    font-size: 16px;
    width: 339px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 16px;
    width: 259px;
  }
`;
export const PopupForm = styled.div`
  position: fixed;
  top: 100px;
  z-index: 40;
  width: 600px;
  height: auto;

  background: #ffffff;
  /* Gray04 */

  border: 1px solid #eaeaea;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-top: 50px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
  }
  label {
    font-size: 14px;
  }
  input,
  select {
    height: 30px;
    /* width: 450px; */

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

    color: #4f4f4f;
    padding-left: 10px;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    form {
      width: 80%;
    }
    input,
    select {
      height: 60px;
      width: 100%;
      max-width: 300px;
      height: 35px;
      margin-bottom: 15px;
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

      color: #4f4f4f;
      padding-left: 10px;
    }
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Fixed = styled.div`
  position: relative;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #0d3151;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapTwo = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const SingleInputSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 3px 0;
  input,
  select {
    margin-left: 10px;
  }
  @media only screen and (max-width: 600px) {
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
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapDown = styled.div`
  z-index: 5;
  position: relative;

  display: flex;
  align-items: center;
  margin-top: 0px;
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
  width: 145px;
  height: 1px;
  background-color: white;

  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
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
  font-size: 15px;
  line-height: 120%;
  margin: 0 15px;
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
  border-radius: 4px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
    border-radius: 2px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const LogOut = styled.div`
  position: relative;
  z-index: 4;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: auto;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  background: radial-gradient(
    61.32% 215.39% at 93.04% 39.63%,
    #3ea0c9 0%,
    #1e7ca4 100%
  );
  border: 1px solid darkblue;
  text-align: center;
  padding: 5px;
  font-weight: 500;
  font-size: 12px;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #103f52;
    border: 1px solid #17172b;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    text-align: center;
    font-size: 12px;
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
  color: #f2f2f2;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Price = styled.h3`
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
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Button = styled.div`
  width: 318px;
  height: 49px;

  border: 2px solid #ffffff;
  /* Medium Drop */

  filter: drop-shadow(0px 14px 23px rgba(28, 37, 44, 0.08));
  border-radius: 7px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  /* identical to box height, or 24px */

  text-align: center;

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const HomeLink = styled.div`
  position: absolute;
  z-index: 5;
  top: 40px;
  right: 60px;
  a {
    text-decoration: none;
    color: #1e7ca4;
  }
  &:hover a {
    color: darkblue;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Icon = styled.div`
  position: absolute;
  z-index: 30;
  top: 23px;
  left: 23%;
  svg {
    color: ${(props) => props.color};
    font-size: 56px;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const WrapImageInEditor = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  color: #0d3151;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
