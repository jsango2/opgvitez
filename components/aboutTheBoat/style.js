import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 682px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 210px;
  overflow: hidden;
  z-index: 0;
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
  height: 145px;
  width: 372px;
  right: -50px;
  bottom: 30px;
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
  width: 265px;
  height: 53px;

  border: 2px solid #ffffff;
  /* Medium Drop */
  cursor: pointer;
  filter: drop-shadow(0px 14px 23px rgba(28, 37, 44, 0.08));
  border-radius: 7px;
  border-radius: 7px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  color: #ffffff;
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
