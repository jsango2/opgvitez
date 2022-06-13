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
  /* display: flex; */
  /* justify-content: space-between; */
  width: 100%;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  width: calc(100% / 4 - 6px);
  height: 337px;
  cursor: pointer;
  margin: 3px;
  @media only screen and (max-width: 850px) {
    width: calc(100% / 4 - 6px);
  }
  @media only screen and (max-width: 450px) {
    width: calc(100% / 2 - 6px);

    height: 260px;
  }
`;
export const Caption = styled.div`
  position: absolute;
  width: 195px;
  height: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  /* or 14px */

  text-align: center;

  color: #f2f2f2;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    width: 90%;
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
  margin: 0 auto 80px auto;
  text-align: center;
  width: 75%;

  @media only screen and (max-width: 450px) {
    margin: 0 auto 73px auto;

    font-size: 40px;
  }
  @media only screen and (max-width: 450px) {
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
