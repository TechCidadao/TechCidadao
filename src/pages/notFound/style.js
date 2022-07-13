import styled from "styled-components";

export const ContainerMessage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;

  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: auto;
    width: 90%;
    height: auto;
    background-color: #15346b;
    border-radius: 20px;
    padding: 20px;
    gap: 40px;
  }

  button {
    width: 300px;
    height: 50px;
    border-radius: 13px;
    border: none;
    font-weight: 900;
    font-size: 30px;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    box-shadow: 2px 6px 2px -1px #0000005c;
  }

  h1 {
    font-size: 30px;
    color: white;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  }

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    div {
      width: 50%;
    }
  }
`;
