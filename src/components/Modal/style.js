import styled from "styled-components";

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadModal = styled.div`
  width: 100%;
  height: 58px;
  padding: 0 2.5%;

  background-color: var(--primary-background);
  display: flex;
  align-items: center;
`;

export const BodyModal = styled.div`
  width: 100%;
  min-height: 256px;
  padding: 5%;

  background-color: var(--background-input);
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    min-height: 384px;
  }
  @media (min-width: 1024px) {
    min-height: 576px;
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

export const FlexBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const ThemeButton = styled.button`
  width: 98%;
  height: 58px;
  background-color: var(--primary-background);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 500;
`;
