import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 1442px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Up = styled.div`
  position: relative;
  height: 721px;
  background: linear-gradient(
    90deg,
    rgba(138, 218, 237, 0.19) 3.57%,
    rgba(137, 219, 238, 0) 81.31%
  );
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapLeft = styled.div`
  position: relative;
  width: 400px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapRight = styled(WrapLeft)`
  position: relative;
  width: 273px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const BoatWrap = styled.div`
  position: absolute;
  height: 696px;
  width: 389px;
  right: 220px;
  top: 50px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const BoatTitleWrap = styled.div`
  position: relative;
  height: 66px;
  width: 500px;
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* identical to box height, or 66px */

  /* TAMNO PLAVA */

  color: #0d3255;
  margin-top: 65px;
  margin-left: 215px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
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

    color: #0d3255;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const TextWrapDown = styled(TextWrap)`
  height: 574px;
  width: 824px;
  margin-top: 65px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const DataWrap = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin-bottom: 7px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Property = styled.h3`
  width: 35%;
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
export const Text = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  /* Gray 2 */

  color: #4f4f4f;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Download = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 120%;
  /* or 20px */

  /* Gray 2 */

  color: #4f4f4f;
  /* or 19px */

  /* Gray 2 */
  margin-top: 30px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Data = styled.h2`
  width: 65%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 120%;
  /* or 20px */

  /* Gray 2 */

  color: #4f4f4f;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
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

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Down = styled.div`
  position: relative;
  height: 721px;
  background: linear-gradient(
    270deg,
    rgba(138, 218, 237, 0.19) 1.51%,
    rgba(137, 219, 238, 0) 70.64%
  );
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
  height: 450px;
  width: 500px;
  right: -410px;
  bottom: -210px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapWave = styled.div`
  position: absolute;
  height: 145px;
  width: 373px;
  right: 0px;
  bottom: 20px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
