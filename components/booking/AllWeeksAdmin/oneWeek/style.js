import styled from "styled-components";
export const WeekWrap = styled.div`
  position: relative;
  height: 44px;
  width: 163px;
  background-color: ${(props) => (props.isFree ? "#68BFE2 " : "#BDBDBD")};
  /* background: ${(props) => (props.marked ? "#2C5F7B " : "")}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  margin: 11px;
  cursor: pointer;
  /* pointer-events: ${(props) => (props.isFree ? "auto " : "none")}; */
  transition: all 0.2s ease-in-out;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #48849c;
    box-shadow: 5px 5px 9px 1px #48849c;
  }
  @media only screen and (max-width: 600px) {
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

export const Date = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
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
