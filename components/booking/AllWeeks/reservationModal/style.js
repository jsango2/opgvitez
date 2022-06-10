import styled from "styled-components";

// import { HeroWrap } from "./style.js"

export const WrapSection = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 6;
  width: 580px;
  height: auto;
  min-height: 500px;
  background: #ffffff;
  /* Gray04 */

  border: 1px solid #eaeaea;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-top: 50px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  input,
  textarea,
  button {
    width: 450px;
    height: 55px;
    margin-bottom: 20px;
    background: #ffffff;
    /* Gray04 */

    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    /* Gray 2 */

    color: #4f4f4f;
    padding-left: 10px;
  }
  textarea {
    height: 100px;
    padding-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    width: 420px;
    height: 50px;
    margin-top: 20px;
    background: radial-gradient(
      61.32% 215.39% at 93.04% 39.63%,
      #3ca0c9 0%,
      #1e7ca4 100%
    );
    /* Blue */

    border: 1px solid #0d3151;
    /* Blue shadow */

    box-shadow: 0px 4px 10px rgba(0, 133, 255, 0.2);
    border-radius: 16px;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */

    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }
  @media only screen and (max-width: 750px) {
    top: 10%;
    transform: translate(0, 0%);

    width: 90%;
    min-width: 340px;
    max-width: 580px;
    input,
    textarea,
    button,
    form {
      width: 90%;
    }
    button {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const CloseX = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Fixed = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #0d3151;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column;
  flex-wrap: wrap; */

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapDates = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #0d3151;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Week = styled.div`
  position: relative;
  height: 44px;
  width: 163px;
  background-color: #68bfe2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  margin: 7px 11px;
  border-radius: 5px;
  /* cursor: pointer; */
  /* pointer-events: ${(props) => (props.isFree ? "auto " : "none")}; */
  transition: all 0.2s ease-in-out;
  /* &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  } */
  @media only screen and (max-width: 600px) {
    width: 112px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
