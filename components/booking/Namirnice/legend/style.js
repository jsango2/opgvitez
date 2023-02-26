import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  z-index: 40;

  width: 500px;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  margin: 0;
  background-color: #4ed085;
  @media only screen and (max-width: 600px) {
    width: 80%;
    height: auto;
    align-items: center;
    flex-direction: column;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const NasProizvod = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "18px")};

  width: ${(props) => (props.isInBasket ? "25px" : "25px")};
  height: ${(props) => (props.isInBasket ? "25px" : "25px")};
  border-radius: 8px;
  background-color: #edce4a;
  svg {
    color: ${(props) => (props.isInBasket ? "white !important" : "")};
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Partner = styled.div`
  position: relative;

  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.isInBasket ? "3px" : "0px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "24pxpx")};

  width: ${(props) => (props.isInBasket ? "25px" : "25px")};
  height: ${(props) => (props.isInBasket ? "25px" : "25px")};

  border-radius: 8px;
  background-color: #bfdb38;
  svg {
    color: ${(props) => (props.isInBasket ? "white !important" : "")};
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const LegendTitle = styled.div`
  display: flex;
  position: relative;
  z-index: 50;
  align-items: flex-end;
  font-weight: 700;
  margin-left: 20px;
  color: white;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapEachLegend = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 30px;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: 700;
  font-size: 12px;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
