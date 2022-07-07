import HeaderInternal from "../../components/headerInternal/index";
import ArrowAcessibility from "../../assets/ArrowAcessibilidade.svg";
import {
  Container,
  ContainerCards,
  ContainerMid,
  ContentContainer,
  SubtitleBtnAcessibility,
} from "./style";
import { Button } from "../../components/button/index";
import { CardsTutorial } from "components/cardsTutorial";

export const DesktopTutorial = () => {
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

        <ContainerCards>{/* Colocar cards Tutorials */}</ContainerCards>
      </ContentContainer>
    </Container>
  );
};
