import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ContainerCard = styled.div`
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
  img {
    width: 210px;
    height: 210px;
  }
  &:hover,
  &:active,
  &:focus {
    border: 5px solid var(--black);
  }
`;
//talvez precisa mudar pra celular
export const ContainerImg = styled.div`
  width: 95%;
  height: 276px;
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleCard = styled.div`
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  color: var(--black);
`;

export const TextCard = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  color: var(--black);
`;
