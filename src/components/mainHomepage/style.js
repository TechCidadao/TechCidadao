import styled from "styled-components";

export const ContainerMain = styled.main`
  background-color: white;
  margin-top: 40px;
  text-align: center;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
`;

export const ContainerBtn = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 80px;
    align-items: flex-start;
    justify-content: space-around;
    width: 90%;
  }
`;

export const SectionBtn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .tutorialBtn {
    border: none;
    text-align: start;
    margin: 0;
    padding: 10px;
    font-size: 25px;
    width: 300px;

    background-color: #ffffff;
    margin-top: 20px;
    font-weight: bolder;
  }

  @media (min-width: 1200px) {
    width: 35%;
    align-items: center;

    padding: 10px;
  }
`;
