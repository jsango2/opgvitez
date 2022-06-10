import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 210px;
  overflow: hidden;
  z-index: 0;
  padding: 100px 0;
  @media only screen and (max-width: 1050px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 450px) {
    padding: 65px 0;
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
  left: -50px;
  top: 130px;
  @media only screen and (max-width: 1050px) {
    display: none;
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
  @media only screen and (max-width: 1050px) {
    margin: 0 auto;
    background-color: white;
    color: #32bde3;
    font-size: 16px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapValTitle = styled.div`
  position: relative;
  z-index: 7;
  height: auto;
  width: 700px;
  margin: 0px 0 0 auto;
  background: rgba(0, 62, 82, 0.66);
  background-blend-mode: multiply;
  padding-top: 47px;
  padding-left: 92px;
  padding-bottom: 50px;

  h1 {
    font-family: "Buenard";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    /* identical to box height, or 66px */

    /* TAMNO PLAVA */

    color: #ffffff;
    margin: 0;
  }
  p {
    width: 80%;
    margin: 30px 0;
    font-family: "Avenir Next";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    /* bilo */

    color: #ffffff;
  }
  @media only screen and (max-width: 1050px) {
    background: none;
    padding-left: 0;
    text-align: center;
    margin: 0 auto;
    width: auto;
    p {
      margin: 30px auto;
    }
  }
  @media only screen and (max-width: 450px) {
    h1 {
      width: 90%;
      margin: 0 auto;
    }
    p {
      font-size: 15px;
    }
  }
`;
export const ImageOverlay = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(3, 88, 101, 0.61) 0%,
    rgba(3, 88, 101, 0) 96.08%
  );
  background-blend-mode: multiply;

  @media only screen and (min-width: 1050px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
  }
`;
