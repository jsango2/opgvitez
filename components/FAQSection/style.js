import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 1312px;
  width: 100%;
  display: flex;

  overflow: hidden;

  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  height: 100%;
  width: 45%;

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
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  /* Gray 2 */

  color: #4f4f4f;
  margin-bottom: 9px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
// export const ValWrap = styled.div`
//   position: absolute;
//   height: 70px;
//   width: 200px;
//   left: -250px;
//   @media only screen and (max-width: 600px) {
//   }
//   @media only screen and (max-width: 420px) {
//   }
// `;
// export const WrapValTitle = styled.div`
//   position: relative;
//   height: auto;
//   width: 400px;

//   @media only screen and (max-width: 600px) {
//   }
//   @media only screen and (max-width: 420px) {
//   }
// `;
// export const WrapImage = styled.div`
//   position: absolute;
//   height: 845px;
//   width: 607px;
//   right: 0;
//   top: 190px;

//   @media only screen and (max-width: 600px) {
//   }
//   @media only screen and (max-width: 420px) {
//   }
// `;
