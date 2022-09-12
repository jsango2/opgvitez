import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 542px;
  width: 100%;
  padding-top: 57px;
  background: radial-gradient(
      61.32% 215.39% at 93.04% 39.63%,
      #3ca0c9 0%,
      #1e7ca4 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImages = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  width: 269px;
  height: 150px;
  margin-bottom: 54px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Button = styled.div`
  width: 383px;
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

  text-align: center;

  /* TAMNO PLAVA */
  cursor: pointer;
  color: #0d3255;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
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
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapText = styled.p`
  margin: 80px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  @media only screen and (max-width: 600px) {
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

  color: #4f4f4f;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const LinkWrap = styled.div`
  /* margin: auto; */
  position: relative;
  width: 800px;
  min-width: 800px;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 90%;
    min-width: unset;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const Data = styled.div`
  margin-top: 60px;
  position: relative;
  width: 396px;
  /* height: 40px; */
  text-align: center;

  @media screen and (max-width: 1000px) {
    width: 90%;
    max-width: 396px;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  margin: 0 0;
  cursor: pointer;
  word-wrap: wrap none;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #ffffff;
    margin: 0 0;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
  }
  a:hover {
    color: #dcdcdc;
  }

  @media screen and (max-width: 1000px) {
    margin: 4px 10px;
  }
`;
