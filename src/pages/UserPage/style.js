import styled from "styled-components";
import PeopleTogether from "../../assets/PeopleTogether.png";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #364462;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ContainerMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 40px 0px;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    flex-direction: column;
  }
`;

export const SubtitleBtnAcessibility = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px 10px;

  p {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 30px;
    text-align: left;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const TitleAcessibility = styled.div`
  width: 85%;
  margin-top: 2px;
  margin-bottom: 3px;
  padding-bottom: 5px;
  p {
    font-family: "Inter";
    font-weight: 600;
    font-size: 30px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 1024px) {
    margin: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      text-align: start;
    }
  }
`;
export const ContainerCards = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const ContainerFooter = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url(${PeopleTogether});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;

  img {
    width: 150px;
  }
`;
