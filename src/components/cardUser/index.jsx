import { Container, ContainerCard, DescriptionButton } from "./style";

export const CardsUser = ({ photo, textAlt }) => {
  return (
    <Container>
      <ContainerCard>
        <img src={photo} alt={textAlt} />
      </ContainerCard>
      <DescriptionButton id="access-button">
        <small tabIndex={"0"}>Ícone de acesso para o conteúdo</small>
      </DescriptionButton>
    </Container>
  );
};
