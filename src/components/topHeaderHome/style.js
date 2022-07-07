import styled from "styled-components";

export const HomeHeaderBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgb(28 7 162) 20%,
    rgb(54 93 167 / 55%) 100%
  );

  width: 100%;

  section {
    width: 90%;
    text-align: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    height: 417px;

    section {
      padding: 10px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ContainerArrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px 10px;
  align-items: center;

  .arrowPosition {
    display: flex;
    align-items: flex-start;

    img {
      width: 80px;
      margin-top: -20px;
    }
  }

  h1 {
    color: white;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 96%);
  }

  @media (min-width: 1024px) {
    margin-top: 105px;
  }
`;
export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
  }

  @media (min-width: 600px) {
    img {
      width: 500px;
    }
  }
`;
