import styled from "styled-components";

export const WrapHeroContent = styled.div`
  position: relative;
  display: flex;
  z-index: 40;

  width: 90%;
  padding: 50px 70px;
  min-height: 300px;
  height: auto;
  border-radius: 10px;
  margin: 30px 0 0 0;
  background: rgb(86, 171, 47);
  background: linear-gradient(
    147deg,
    rgba(86, 171, 47, 1) 0%,
    rgba(168, 224, 99, 1) 100%
  );
  @media only screen and (max-width: 750px) {
    width: 95%;
    height: auto;
    align-items: center;
    flex-direction: column;
    padding: 50px 25px;

    margin: 60px 0 0 0;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 100;

  width: 65%;
  max-width: 600px;
  min-height: 400px;
  height: auto;
  border-radius: 10px;
  @media only screen and (max-width: 750px) {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
  }
  @media only screen and (max-width: 450px) {
    min-height: unset;
  }
`;
export const WrapImage = styled.div`
  position: absolute;
  display: flex;
  z-index: 40;
  right: 0px;
  width: 60%;
  min-height: 300px;
  height: auto;
  border-radius: 10px;
  margin: 130px 0 0 0;

  @media only screen and (max-width: 750px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 75px;
  margin: 0;
  color: white !important;

  @media only screen and (max-width: 750px) {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 55px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 35px;
  }
`;
export const Trgovina = styled.h1`
  position: relative;
  font-size: 35px;
  font-weight: 600;
  margin: 0;
  color: white;
  background-color: rgb(86, 171, 47);
  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 750px) {
    width: 80%;
    height: auto;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 45px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
export const SubTitle = styled.h4`
  position: relative;
  width: 90%;
  color: white !important;

  z-index: 10;
  @media only screen and (max-width: 750px) {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 30px;
    line-height: 140%;
  }
  @media only screen and (max-width: 420px) {
  }
`;
