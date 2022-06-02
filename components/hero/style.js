import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 679px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 215px;
  overflow: hidden;
  z-index: 0;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 5;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 120%;
  /* or 20px */

  /* Gray 2 */

  color: #4f4f4f;
  margin-bottom: 9px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const ValWrap = styled.div`
  position: absolute;
  height: 70px;
  width: 200px;
  left: -250px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapDots = styled.div`
  position: absolute;
  height: 418px;
  width: 450px;
  right: -150px;
  top: 200px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 239px;
  height: 53px;
  cursor: pointer;
  /* SUNRISE / White */

  background: #ffffff;
  /* Medium Drop */

  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  border-radius: 7px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  /* SUNRISE/Coral */

  color: #32bde3;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapValTitle = styled.div`
  position: relative;
  height: auto;
  width: 600px;
  margin-top: 50px;
  h1 {
    font-family: "Buenard";
    font-style: normal;
    font-weight: 700;
    font-size: 55px;
    line-height: 120%;
    /* identical to box height, or 66px */

    /* TAMNO PLAVA */

    color: #ffffff;
    margin: 0;
  }
  p {
    width: 338px;
    margin: 30px 0;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
