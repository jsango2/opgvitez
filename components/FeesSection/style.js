import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: radial-gradient(
      61.32% 215.39% at 93.04% 39.63%,
      #3ca0c9 0%,
      #1e7ca4 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  padding: 30px 0 90px 0;

  @media only screen and (max-width: 1050px) {
    padding: 90px 0 90px 0;

    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 450px) {
    padding: 90px 0 30px 0;
  }
`;
export const TextWrap = styled.div`
  position: relative;
  height: auto;
  width: 530px;
  margin-top: 159px;
  margin-left: 215px;
  h1 {
    font-family: "Buenard";
    font-style: normal;
    font-weight: 700;
    font-size: 55px;
    line-height: 120%;
    /* identical to box height, or 66px */

    /* TAMNO PLAVA */

    color: #ffffff;
  }
  @media only screen and (max-width: 1350px) {
    margin-left: 15%;
  }
  @media only screen and (max-width: 1050px) {
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 120%;
  /* or 20px */

  /* Gray 2 */

  color: #4f4f4f;
  margin-bottom: 9px;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Text = styled.div`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */
  width: 484px;
  color: #ffffff;
  margin-bottom: 9px;
  li {
    font-weight: 500;
  }
  @media only screen and (max-width: 1050px) {
    margin-bottom: 146px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 14px;
    margin-bottom: 46px;
  }
`;
export const TextCompany = styled(Text)`
  font-family: "Avenir Next";

  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;
export const ValWrap = styled.div`
  position: absolute;
  height: 70px;
  width: 200px;
  left: -250px;
  @media only screen and (max-width: 1050px) {
    left: 50%;
    transform: translate(-50%, 0);
    top: -65px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapValTitle = styled.div`
  position: relative;
  height: auto;
  width: 400px;

  @media only screen and (max-width: 600px) {
    width: 100%;

    h1 {
      font-size: 40px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: absolute;
  height: 900px;
  width: 45%;
  max-width: 600px;
  right: 0;
  top: 190px;

  object-fit: cover;
  @media only screen and (max-width: 1350px) {
    width: 40%;
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
  }
`;
