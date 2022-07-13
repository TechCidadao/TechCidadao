import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  background-color: var(--background);
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
  flex-direction: column-reverse;
  align-items: center;
  margin: 30px 0px 40px 0px;
  width: 100%;

  gap: 50px;
  color: var(--white);
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  .arrowPosition {
    display: flex;
    width: 250px;
    flex-direction: row-reverse;
  }
  .arrowImg {
    width: 90px;
    margin-top: -55px;
  }

  h1{
    font-size:2rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    width: 80%;

    .arrowImg {
      width: 100px;
      margin-top: -21px;
      margin-right: 20px;
      z-index: -1;
    }

    .arrowPosition {
      width: 320px;
    }
  }
`;

export const SubtitleBtnAcessibility = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px 10px;

  p {
    font-weight: 600;
    font-size: 20px;
    text-align: left;
    color: var(--white);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ContainerCards = styled.section`
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
