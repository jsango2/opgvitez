import styled from "styled-components";

export const PopupForm = styled.div`
  position: fixed;
  top: 100px;
  z-index: 6;
  width: 600px;
  height: auto;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-top: 50px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
  input,
  select {
    height: 40px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #4f4f4f;
    padding-left: 10px;
  }
`;

export const Fixed = styled.div`
  position: relative;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #0d3151;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
