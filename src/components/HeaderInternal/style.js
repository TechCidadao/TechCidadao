import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  min-width: 100%;
  height: 261px;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 17px;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 108px;
  }
`;
export const ContainerStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 328px;
    height: 60px;
  }
  @media (min-width: 1024px) {
    width: 80%;
    img {
      width: 250px;
      height: 60px;
    }
  }
  @media (min-width: 1440px) {
    img {
      width: 350px;
      height: 60px;
    }
  }
`;

export const ContainerMid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 32px;
    color: #365da7;
    margin: 0;
  }
  img {
    width: 70px;
    height: 70px;
  }
  @media (min-width: 1024px) {
    width: 70%;
    justify-content: center;
    p {
      font-size: 32px;
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
  @media (min-width: 1440px) {
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
`;
export const ContainerEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 15px;

  p {
    width: 160px;
    font-family: "Poppins";
    font-size: 22px;
    font-weight: 600;
    color: #365da7;
    text-align: center;
    margin: 0px;
  }
  img {
    width: 35px;
  }
  @media (min-width: 1024px) {
    justify-content: center;
    img {
      width: 50px;
    }
    p {
      font-size: 26px;
    }
  }
  @media (min-width: 1440px) {
    justify-content: center;
    img {
      width: 50px;
    }
    p {
      font-size: 26px;
    }
  }
`;
export const ButtonEnd = styled.button`
  width: 116px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #365da7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 32px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 5px;
  border: none;
`;
