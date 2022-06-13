import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding-top: 86px;
  background: linear-gradient(
    360deg,
    rgba(138, 218, 237, 0.19) 0%,
    rgba(137, 219, 238, 0) 67.05%
  );
  overflow: hidden;
  padding-bottom: 70px;
  @media only screen and (max-width: 450px) {
    padding-top: 73px;
  }
`;
export const WrapImages = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImageL = styled.div`
  position: relative;
  width: 671px;
  height: 480px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
    height: 74vw;
    max-height: 500px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImageR = styled.div`
  position: relative;
  width: 671px;
  height: 480px;

  @media only screen and (max-width: 1050px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Button = styled.a`
  width: 395px;
  height: 53px;
  margin: 70px auto 0 auto;
  /* TAMNO PLAVA */

  border: 2px solid #0d3255;
  /* Medium Drop */

  filter: drop-shadow(0px 14px 23px rgba(28, 37, 44, 0.08));
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  /* TAMNO PLAVA */
  cursor: pointer;
  color: #0d3255;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`;
export const TextWrap = styled.div`
  position: relative;
  height: 416px;
  width: 55%;
  margin-top: 98px;
  margin-left: 60px;
  width: 60%;
  padding-right: 100px;
  h1 {
    font-family: "Buenard";
    font-style: normal;
    font-weight: 700;
    font-size: 55px;
    line-height: 120%;
    //     /* identical to box height, or 66px */

    //     /* TAMNO PLAVA */

    color: #ffffff;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  } ;
`;
export const Title = styled.h2`
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* or 66px */

  /* TAMNO PLAVA */

  color: #0d3255;
  margin-bottom: 80px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: 73px;
  }
`;
export const WrapText = styled.div`
  margin: 80px auto 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Text = styled.p`
  width: 470px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  /* Gray 2 */

  /* TAMNO PLAVA */

  color: #0d3255;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
  @media only screen and (max-width: 450px) {
    font-size: 15px;
  }
`;
