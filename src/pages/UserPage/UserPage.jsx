import HeaderInternal from "../../components/HeaderInternal/HeaderInternal";
import {
  ButtonAcessibility,
  Container,
  ContainerCards,
  ContainerFooter,
  ContainerMid,
  ContentContainer,
  SubtitleBtnAcessibility,
  TitleAcessibility,
} from "./style";
import CardsUser from "../../components/CardsUser/CardsUser";
import Computer from "../../assets/Computer.svg";
import Cellphone from "../../assets/Cellphone.svg";
const UserPage = () => {
  return (
    <Container>
      <ContentContainer>
        <HeaderInternal />
        <ContainerMid>
          <ButtonAcessibility>Acessibilidade</ButtonAcessibility>
          <SubtitleBtnAcessibility>
            <p>Aperte aqui para escolher sua necessidade</p>
          </SubtitleBtnAcessibility>
        </ContainerMid>
        <TitleAcessibility>
          <p>Aqui você escolhe o que quer aprender!</p>
          <p>Aperte no celular ou no computador para começar</p>
        </TitleAcessibility>
        <ContainerCards>
          <CardsUser
            photo={Computer}
            textAlt="Ícone clicável de um computador"
          />
          <CardsUser photo={Cellphone} textAlt="Ícone clicável de um Celular" />
        </ContainerCards>
      </ContentContainer>
      <ContainerFooter></ContainerFooter>
    </Container>
  );
};

export default UserPage;
