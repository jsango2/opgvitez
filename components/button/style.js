import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  width: 144px;
  height: 42px;
  border-radius: 10px;
  border: 0;

  background-color: ${(props) =>
    props.buttonType === "dark" ? "#2d2f45" : "#579c03"};

  color: white;
  margin: 10px 3px 0 3px;
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
