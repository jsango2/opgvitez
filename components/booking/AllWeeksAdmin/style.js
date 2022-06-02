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
  width: 759px;
  height: 50px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapSection = styled.div`
  position: relative;
  height: 1082px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 163px;
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 988px;
  background: linear-gradient(
    0.93deg,
    rgba(21, 31, 43, 0.245) 0.67%,
    rgba(197, 223, 255, 0.325) 99.08%
  );
  backdrop-filter: blur(2px);
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
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
  /* identical to box height, or 66px */

  text-align: center;

  /* TAMNO PLAVA */
  z-index: 4;
  color: #0d3255;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const PopupForm = styled.div`
  position: fixed;
  top: 150px;
  z-index: 6;
  width: 580px;
  height: auto;

  background: #ffffff;
  /* Gray04 */

  border: 1px solid #eaeaea;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  select {
    height: 60px;
    width: 450px;
    height: 55px;
    margin-bottom: 25px;
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

  button {
    width: 420px;
    height: 80px;
    margin-top: 20px;
    background: radial-gradient(
      61.32% 215.39% at 93.04% 39.63%,
      #3ca0c9 0%,
      #1e7ca4 100%
    );
    /* Blue */

    border: 1px solid #0d3151;
    /* Blue shadow */

    box-shadow: 0px 4px 10px rgba(0, 133, 255, 0.2);
    border-radius: 16px;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */

    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }

  @media only screen and (max-width: 600px) {
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
  font-size: 14px;
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
  /* background-image: url(${bg});
  background-position: center;
  background-size: cover; */
  @media only screen and (max-width: 600px) {
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
