import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ContainerCard = styled.section`
  width: 280px;
  height: 365px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 15px 0px;

  button {
    width: 90%;
    margin: 10px;
    padding: 10px;
    box-shadow: 2px 6px 2px -1px #0000005c;
    border-radius: 8px;
    background-color: var(--blue-sky);
    color: var(--white);
    border: none;
  }
  img {
    width: 40px;
  }

  p {
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    font-size: 30px;
  }

  p {
    font-size: 20px;
    padding: 0;
  }
  &:hover,
  &:active,
  &:focus {
    border: 5px solid var(--black);
  }

  button:hover,
  button:active,
  button:focus {
    border: 5px solid var(--black);
  }

  @media (min-width: 600px) {
    width: 300px;
    padding: 5px;
  }
`;
//talvez precisa mudar pra celular
export const ContainerImg = styled.div.attrs((props) => ({
  imgHeight: props.imgHeight,
  imgWidth: props.imgWidth,
}))`
  width: 95%;
  height: 145px;
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 5px;

  img {
    width: ${(props) => props.imgWidth};
    height: ${(props) => props.imgHeight};
    padding: 10px;
  }
`;

export const TitleCard = styled.div`
  font-family: "Inter";
  font-weight: 600;
  color: var(--black);
  align-self: self-start;
  padding: 0px 10px;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const TextCard = styled.div`
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  color: var(--black);
  align-self: self-start;
  padding: 0px 10px;
  letter-spacing: 1px;
`;
export const DescriptionButton = styled.p`
  small{
    font-size: 10px;
  }
`