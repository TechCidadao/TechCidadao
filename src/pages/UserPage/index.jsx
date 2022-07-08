import HeaderInternal from "../../components/HeaderInternal";
import ArrowAcessibility from "../../assets/ArrowAcessibilidade.svg";
import {
  Container,
  ContainerCards,
  ContainerFooter,
  ContainerMid,
  ContentContainer,
  SubtitleBtnAcessibility,
  TitleAcessibility,
} from "./style";
import { CardsUser } from "../../components/CardsUser";
import Computer from "../../assets/Computer.svg";
import Cellphone from "../../assets/Cellphone.svg";
import { Button } from "../../components/button";

export const UserPage = () => {
  return (
    <Container>
      <ContentContainer>
        <HeaderInternal />
        <ContainerMid>
          <Button
            title="Acessibilidade"
            color="var(--blue-sky)"
            BgColor="var(--white)"
            width="300px"
            hoverColor={"var(--black)"}
          />
          <div className="arrowPosition">
            <img
              className="arrowImg"
              src={ArrowAcessibility}
              alt="imagem da flecha apontando para o botão de acessibilidade"
            />
            <SubtitleBtnAcessibility>
              <p>Aperte aqui para escolher sua necessidade</p>
            </SubtitleBtnAcessibility>
          </div>
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
      <ContainerFooter />
    </Container>
  );
};
