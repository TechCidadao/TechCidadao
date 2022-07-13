import styled from "styled-components";

export const ModalBg = styled.div`
  width: 100%;
  min-height: 100vh;
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
    padding: 0 15%;
  }
`;

export const HeadModal = styled.div`
  width: 90%;
  height: 58px;
  padding: 0 2.5%;
  margin-top: 23px;
  background-color: var(--primary-background);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const BodyModal = styled.div.attrs((props) => ({
  desktopHeight: props.desktopHeight,
  mobileHeight: props.mobileHeight,
}))`
  width: 90%;
  min-height: ${(props) => props.desktopHeight};
  padding: 5% 0%;
  background-color: var(--background-input);
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    min-height: ${(props) => props.desktopHeight};
    width: 60%;
    padding: 10px;
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
    font-size: 18px;
  }
`;

export const ThemeText = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
  padding: 5px;

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
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;

  label {
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bold;
    margin-left: 35px;
  }
  p {
    font-size: 12px;
    display: flex;
    align-self: flex-start;
    font-weight: bold;
    color: red;
    margin-left: 35px;
  }
  @media (min-width: 600px) {
    min-height: 260px;

    p {
      font-size: 18px;
    }
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
  align-items: center;
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
  width: 90%;
  height: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledFormLogin = styled.form`
  width: 90%;
  height: 90%;
  text-align-last: center;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;
export const ThemeButton = styled.button`
  width: 90%;
  height: 75px;
  background-color: var(--primary-background);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
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
