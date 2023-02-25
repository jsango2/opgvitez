import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  z-index: 40;
  left: 10px;
  top: 50%;
  width: 450px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 0 0 0;
  @media only screen and (max-width: 850px) {
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

  left: ${(props) => (props.isInBasket ? "0px" : "10px")};
  top: ${(props) => (props.isInBasket ? "-1px" : "8px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "28px")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};
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
  left: ${(props) => (props.isInBasket ? "0px" : "10px")};
  top: ${(props) => (props.isInBasket ? "-1px" : "8px")};

  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => (props.isInBasket ? "16px" : "24pxpx")};

  width: ${(props) => (props.isInBasket ? "25px" : "35px")};
  height: ${(props) => (props.isInBasket ? "25px" : "35px")};

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
  height: 37px;
  align-items: center;
  padding-top: 15px;
  font-weight: 700;
  margin-left: 20px;
  color: #00425a;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapEachLegend = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 240px;
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
