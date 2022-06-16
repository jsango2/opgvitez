import styled from "styled-components";
export const WeekWrap = styled.div`
  position: relative;
  height: 44px;
  width: 163px;
  background-color: ${(props) => (props.isFree ? "#68BFE2 " : "#BDBDBD")};
  background: ${(props) => (props.marked ? "#2C5F7B " : "")};
  opacity: ${(props) => (props.isFree ? 1 : 0.6)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 3px; */
  z-index: 0;
  margin: 11px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isFree ? "auto " : "none")};
  /* pointer-events: ${(props) => (props.length < 5 ? "auto " : "none")}; */
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  }
  @media only screen and (max-width: 600px) {
    margin: 8px;
    width: 115px;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Price = styled.h3`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Dates = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  /* or 17px */

  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const DiskontWrap = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  width: 80px;
  height: 18px;

  border-radius: 4px;
  /* border: 1px solid white; */
  background-color: #f4c914;

  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    top: -13px;

    height: 17px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const DiskontText = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #0d3151;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Amount = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
