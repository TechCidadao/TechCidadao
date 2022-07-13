import styled from "styled-components";

export const ModalBg = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 10%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 200;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    padding: 15%;
  }
  @media (min-width: 1024px) {
    padding: 25%;
  }
`;

export const HeadModal = styled.div`
  width: 100%;
  height: 58px;
  padding: 0 2.5%;

  background-color: var(--primary-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodyModal = styled.div`
  width: 100%;
  min-height: 95vh;
  padding: 5%;
  background-color: var(--background-input);
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    min-height: 90vh;
  }
  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

export const HeadText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: white;

  @media (min-width: 600px) {
    font-size: 18px;
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ThemeText = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 18px;
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const CloseModal = styled.button`
  width: 10%;
  height: 80%;

  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  color: white;

  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tutorial = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  background-color: var(--primary-background);
  border-radius: 5px;
`;

export const SuccessBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;

  background-color: var(--green-primary);
  border-radius: 5px;
`;

export const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bold;
    margin-left: 35px;
  }
  p {
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bold;
    color: red;
    margin-left: 35px;
  }
  @media (min-width: 600px) {
    min-height: 260px;
  }
  @media (min-width: 1024px) {
    min-height: 380px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  label {
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bold;
    margin-left: 35px;
  }
  p {
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bold;
    color: red;
    margin-left: 35px;
  }
  @media (min-width: 600px) {
    min-height: 260px;
    justify-content: space-evenly;
  }
  @media (min-width: 1024px) {
    min-height: 380px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 90%;
  padding: 2.5%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
`;
export const StyledFormLogin = styled.form`
  width: 100%;
  height: 90%;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2%;
`;
export const ThemeButton = styled.button`
  width: 98%;
  height: 58px;
  background-color: var(--primary-background);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 500;
`;

export const ButtonAcess = styled.button`
  width: 98%;
  height: 90px;
  background-color: var(--primary-background);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 15px;
`;
