import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #364462;

  .container-video {
    margin-bottom: 20px;
  }
  a {
    font-size: 30px;
  }

  .description-text {
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .div-text {
    height: auto;
  }

  .div-video {
    height: auto;
  }

  .imgContent {
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-video {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;

      .div-video {
        width: 80vw;

        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .div-text {
        width: 80vw;
      }
    }
    .info-container {
      width: 90vw;
      height: 10rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
      background-color: white;
      border-radius: 8px;
      div {
        width: 90%;
        padding-top: 1rem;
        margin: 0 auto;
      }
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-video {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;

      .div-video {
        width: 80vw;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      .div-text {
        width: 80vw;
      }
    }
    .info-container {
      width: 90vw;
      height: 10rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
      background-color: white;
      border-radius: 8px;
      div {
        width: 90%;
        padding-top: 1rem;
        margin: 0 auto;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-video {
      width: 50vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;

      .div-video {
        width: 45vw;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      .div-text {
        width: 45vw;
      }
    }

    .info-container {
      width: 25vw;
      height: 20rem;
      background-color: white;
      border-radius: 8px;
      div {
        width: 90%;
        padding-top: 1rem;
        margin: 0 auto;
      }
    }
    .main {
      width: 95vw;
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  text-align: -webkit-center;
  margin: 50px;
  gap: 40px;

  .arrowImg {
    width: 90px;
    margin-top: -55px;
  }

  .arrowPosition {
    display: flex;
    width: 250px;
    flex-direction: row-reverse;
  }

  h1 {
    text-align: left;
    color: var(--white);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 25px;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 0;
  }
`;
