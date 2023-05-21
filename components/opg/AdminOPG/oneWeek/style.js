import styled from "styled-components";
export const NamirnicaWrap = styled.div`
  position: relative;
  height: 31px;
  width: 100%;
  min-width: 300px;
  background-color: ${(props) => (props.isFree ? "#3275a1" : "#a1324f")};
  /* background-color: #3275a1; */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: center;
  justify-content: flex-start;
  z-index: 0;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding-left: 30px;
  &:hover {
    -webkit-box-shadow: 5px 5px 9px 1px #1d1f20;
    box-shadow: 1px 1px 4px 1px #1718185e;
    background-color: #275c7e;
  }
  @media only screen and (max-width: 600px) {
    width: 120px;
    margin: 5px;
    padding-left: 5px;
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

  color: white;
  min-width: 45px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Namirnica = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  /* or 17px */

  text-align: center;

  /* Gray 6 */

  color: white;

  margin: 5px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Namirnica2 = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 120%;
  /* or 17px */

  text-align: center;

  /* Gray 6 */

  color: #f8e117;

  margin: 5px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
