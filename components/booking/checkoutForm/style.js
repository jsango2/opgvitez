import styled from "styled-components";

export const CheckoutWrap = styled.div`
  position: fixed;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  width: 654px;
  height: 654px;
  border-radius: 10px;
  border: 0.3px solid rgba(23, 56, 97, 0.3);
  background-color: white;
  top: 200px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
  input,
  select {
    height: 40px;
    /* width: 450px; */

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
    width: 250px;
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Amount = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
  color: #093b69;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
