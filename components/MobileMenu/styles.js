import styled from "styled-components"

export const WrapMobileMenu = styled.div`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 570px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0 60px 0;
  /* width: ${props => props.width}; */
  transform: ${props =>
    props.isOpen ? `translate(0, 0px)` : `translate(500px, 0)`};
  transition: all 0.5s ease-in-out;
  opacity: 0.95;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #aea8b2;
    margin: 0 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CloseIcon = styled.div`
  position: absolute;
  z-index: 5;
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
  @media screen and (max-width: 400px) {
    right: 25px;
  }
`
export const LineX1 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(45deg);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`
export const LineX2 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(315deg) translate(6px, -7px);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`
