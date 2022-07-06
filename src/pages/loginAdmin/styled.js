import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background);
  .header {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-around;
      h1 {
        font-size: 20px;
        color: var(--white);
      }
      button {
        width: 100px;
        border-radius: 4px;
        border: none;
        background-color: var(--button-white);
        font-weight: bold;
        font-size: 16px;
        color: var(--black);
      }
    }
  input,
  select {
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #d9d9d9;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 1rem;
  }
  .Body {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: var(--white);
    width: 90%;
    border-radius: 8px;

    h2 {
      padding-left: 15px;
      padding-top: 5px;
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
   
    input,
    select {
      border-radius: 8px;
      width: 90%;
      padding: 12px;
    }
    input::placeholder {
      padding-left: 10px;
    }
    label {
      font-size: 16px;
    }
    .div-select {
      .btn-container {
        display: flex;
        justify-content: center;
      }
      button {
        width: 80%;
        background-color: var(--background);
        border: none;
        border-radius: 6px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 8px;
        font-weight: 700;
        color: var(--white);
      }
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1023px) {

    input,
    select {
      border-radius: 8px;
      width: 90%;
      padding: 12px;
    }
    input::placeholder {
      padding-left: 10px;
    }
      label {
      font-size: 16px;
    }
    .div-select {
      .btn-container {
        display: flex;
        justify-content: center;
      }
      button {
        width: 80%;
        background-color: var(--background);
        border: none;
        border-radius: 6px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 8px;
        font-weight: 700;
        color: var(--white);
      }
    }
  }

  @media (min-width: 1024px) {
   
    .input-topo {
      display: flex;

      .titulo {
        max-width: 582px;
        width: 582px;
      }
      .descricao {
        width: 788px;
        width: 788px;
      }
    }

    .inputs {
      width: 91.3vw;
    }

    .link {
      padding: 25px;
    }

    input {
      border-radius: 8px;
      width: 90%;
      padding: 12px;
    }
    input::placeholder {
      padding-left: 10px;
    }
    label {
      font-size: 16px;
    }
    .div-select {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.7rem;

      select {
        width: 30vw;
        border-radius: 8px;
        padding: 12px;
      }

      button {
        width: 30vw;
        background-color: var(--background);
        border: none;
        border-radius: 8px;
        margin-top: 2.6rem;
        margin-bottom: 1rem;
        padding: 12px;
        font-weight: 700;
        color: var(--white);
      }
    }
    .btn-container {
      margin-right: 4rem;
    }
  }
`;
