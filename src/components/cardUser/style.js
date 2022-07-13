import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ContainerCard = styled.button`
  width: 265px;
  height: 276px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 15px 0px;
  cursor: pointer;
  border: none;
  img {
    width: 210px;
    height: 210px;
  }
`;
