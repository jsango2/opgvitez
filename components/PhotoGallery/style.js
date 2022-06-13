import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  top: -1px;
  overflow: hidden;
  background: radial-gradient(
    61.32% 215.39% at 93.04% 39.63%,
    #3ca0c9 0%,
    #1e7ca4 100%
  );
  padding-top: 123px;
  padding-bottom: 70px;
  /* padding-left: 88px; */

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-top: 73px;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const TextWrap = styled.div`
  position: relative;
  height: 416px;
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
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title = styled.h2`
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* identical to box height, or 66px */

  text-align: center;

  color: #f2f2f2;
  margin-bottom: 109px;

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: 73px;
  }
`;
export const Text = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */
  width: 484px;
  color: #ffffff;
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
export const WrapValTitle = styled.div`
  position: relative;
  height: auto;
  width: 400px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  height: 235px;
  width: 235px;
  margin: 7px;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    height: 116px;
    width: 116px;
  }
  @media only screen and (max-width: 400px) {
    margin: 5px;

    height: 100px;
    width: 100px;
  }
`;

export const WrapGallery = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
