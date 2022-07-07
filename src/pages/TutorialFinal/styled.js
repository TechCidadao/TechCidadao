import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #364462;

  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 36px;
    font-weight: bold;
    color: #365da7;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  video {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;

      p {
        color: white;
        font-size: 18px;
        font-weight: 900;
      }
      .btn-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .container-btn {
        width: 95vw;
        height: 8vh;
        background-color: white;
        border: 1px solid black;
        border-radius: 8px;
        margin-top: 1rem;
      }

      .div-titulo {
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: white;
        font-size: 18px;
      }
    }
    .container-video {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;

      .div-video {
        width: 20rem;
        height: 12rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .div-text {
        width: 18.75rem;
        height: 12.5rem;
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
    .nav {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;

      p {
        color: white;
        font-size: 18px;
        font-weight: 900;
      }
      .btn-nav {
        display: flex;
        align-items: center;
        width: 90vw;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
      .btn-text {
        width: 10rem;
      }
      .container-btn {
        width: 45vw;
        height: 8vh;
        background-color: white;
        border: 1px solid black;
        border-radius: 8px;
        margin-top: 1rem;
      }

      .div-titulo {
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: white;
        font-size: 18px;
      }
    }
    .container-video {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;

      .div-video {
        width: 80vw;
        height: 32vh;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      .div-text {
        width: 80vw;
        height: 15vh;
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

    .nav {
      width: 97vw;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      justify-content: space-around;

      p {
        color: white;
        font-size: 16px;
        font-weight: 900;
      }

      .btn-nav {
        width: 42vw;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
      }
      .btn-text {
        width: 10rem;
      }
      .container-btn {
        width: 25vw;
        margin-top: 2rem;
        margin-left: 1rem;
        height: 97px;
        background-color: white;
        border: 1px solid black;
        border-radius: 8px;
        margin-top: 1rem;
      }

      .div-titulo {
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: white;
        font-size: 18px;
      }
    }
    .container-video {
      width: 50vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;

      .div-video {
        width: 45vw;
        height: 35vh;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      .div-text {
        width: 45vw;
        height: 15vh;
      }
    }

    .info-container {
      width: 20vw;
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