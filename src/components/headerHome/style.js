import styled from "styled-components";

export const HomeHeaderBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    var(--blue-marine) 20%,
    var(--blue-sky) 100%
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

export const MidArrowContainer = styled.div.attrs((props) => ({
  BgColor: props.BgColor,
}))`
  background-color: ${(props) => props.BgColor};
  padding: 10px;

  h1 {
    margin: 0;
    font-size: 15px;
    color: white;
    letter-spacing: 2px;
    text-shadow: 4px 3px 4px rgb(41 35 35);
  }
  p {
    color: wheat;
    font-weight: 500;
    font-size: 20px;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 30px;
      width: 90%;
      padding: 0px 10px 0px 10px;
    }
    p {
      font-size: 30px;
    }
  }
`;
