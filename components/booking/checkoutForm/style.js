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
  height: auto;
  border-radius: 10px;
  border: 0.3px solid rgba(23, 56, 97, 0.3);
  background-color: white;
  top: 125px;
  padding: 30px 0;
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
    top: 0;
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;
    padding-top: 60px;
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
export const Naslov = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin: 40px 0;
  color: #093b69;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const OrderTitle = styled.h2`
  position: relative;
  z-index: 30;

  font-size: 18px;
  font-weight: 700;

  color: white;
  margin-bottom: 0px;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const NoteTitle = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  color: white;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const NoteAmount = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  width: 90px;
  color: white;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const NoteNapomena = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  font-size: 14px;
  font-weight: 500;

  color: white;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapEachOrderItem = styled.h2`
  position: relative;
  z-index: 30;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  max-width: 90%;
  color: white;
  margin: 0 auto;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const FormaSubmitedNote = styled.div`
  position: fixed;
  top: 0;
  z-index: 65;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 92vw;
  height: 80vh;
  background-color: #093b69;
  color: white;
  top: 10%;
  border-radius: 10px;
  padding: 0px 0;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
