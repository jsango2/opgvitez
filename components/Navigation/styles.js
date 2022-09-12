import styled from "styled-components";

export const NavbarWrap = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 111px;
  display: flex;
  align-items: center;
  padding-right: 90px;
  @media screen and (max-width: 1050px) {
    width: 100vw;
    padding-right: 40px;
    height: 0;
  }
`;
export const LogoWrap = styled.div`
  position: relative;
  width: 257px;
  height: 70%;
  min-width: 180px;
  z-index: 5;
  margin-left: 50px;
  cursor: pointer;
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.inView ? `translate(0%)` : `translate(-100%)`};
  box-shadow: ${(props) =>
    props.isOpen
      ? `2px 2px 10px 0px #C2C2C2`
      : `2px 2px 10px 0px rgba(194,194,194,0)`};
  @media screen and (max-width: 1050px) {
    width: 250px;
  }
`;

export const LinkWrap = styled.div`
  margin-left: auto;
  position: relative;
  width: 800px;
  min-width: 800px;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Hamburger = styled.div`
  position: absolute;
  z-index: 4;
  right: 40px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  top: 27px;
  @media screen and (min-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 400px) {
    right: 25px;
  }
`;
export const CloseIcon = styled.div`
  position: absolute;
  z-index: 4;
  top: 52px;
  right: 40px;
  height: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
export const LineX1 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(45deg);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;
export const LineX2 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(315deg) translate(6px, -7px);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;
export const Line = styled.div`
  height: 3px;
  width: 23px;
  background-color: white;
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: #aea8b2;
  margin: 0 0;
  cursor: pointer;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #aea8b2;
    margin: 0 0;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
  }
  a:hover {
    color: #3275a1;
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`;
