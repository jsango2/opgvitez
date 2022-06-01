import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 679px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  z-index: 0;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  h1 {
    transition: all 0.3s ease-in-out;
    font-family: "Buenard", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    z-index: 5;
    color: black;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
  @media only screen and (max-width: 420px) {
    height: 556px;
  }
  div {
    cursor: pointer;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 7 / 5;
  position: relative;
  /* padding-left: 38px; */
  &:hover ${Overlay} {
    background: rgba(255, 255, 255, 0);
  }
  &:hover h1 {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title1 = styled.h1`
  position: absolute;
  text-transform: uppercase;
  margin-left: 38px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title2 = styled.h1`
  position: relative;
  text-transform: uppercase;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title3 = styled.h1`
  position: relative;
  width: 80%;
  text-transform: uppercase;
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title4 = styled.h1`
  position: absolute;
  text-transform: uppercase;
  margin-left: 38px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title5 = styled.h1`
  position: relative;
  margin-left: 38px;

  text-transform: uppercase;
  margin-top: auto;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Div2 = styled.div`
  grid-area: 7 / 1 / 11 / 5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${Overlay} {
    background: rgba(255, 255, 255, 0);
  }
  &:hover h1 {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 11 / 8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${Overlay} {
    background: rgba(255, 255, 255, 0);
  }
  &:hover h1 {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Div4 = styled.div`
  grid-area: 1 / 8 / 5 / 13;
  position: relative;
  &:hover ${Overlay} {
    background: rgba(255, 255, 255, 0);
  }
  &:hover h1 {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Div5 = styled.div`
  grid-area: 5 / 8 / 11 / 13;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover ${Overlay} {
    background: rgba(255, 255, 255, 0);
  }
  &:hover h1 {
    color: white;
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
