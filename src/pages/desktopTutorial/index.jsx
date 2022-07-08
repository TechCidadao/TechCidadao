import HeaderInternal from "../../components/HeaderInternal";
import ArrowAcessibility from "../../assets/ArrowAcessibilidade.svg";
import {
  Container,
  ContainerCards,
  ContainerMid,
  ContentContainer,
  SubtitleBtnAcessibility,
} from "./style";
import { Button } from "../../components/button";
import { CardsTutorial } from "components/cardsTutorial";

import IconMouse from "../../assets/MouseImg.png";
import IconComputer from "../../assets/ComputerImg.png";
import IconTeclado from "../../assets/TecladoImg.png";
import ArrowTitle from "../../assets/ArrowTitle.png";

export const DesktopTutorial = () => {
  return (
    <Container>
      <ContentContainer>
        <HeaderInternal />
        <ContainerMid>
          <div style={{ textAlignLast: "center" }}>
            <h1>Sobre Computador:</h1>
            <img
              src={ArrowTitle}
              alt="Seta apontando para os cards de conteúdo"
            />
          </div>
          <div>
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
          </div>
        </ContainerMid>

        <ContainerCards>
          <CardsTutorial
            imgHeight={"115px"}
            imgWidth={"155px"}
            photo={IconComputer}
            textAlt={"imagem ilustrativa de um computador"}
            title={"Computador: Primeiros Passos"}
            text={"Aqui você vai aprender o básico do seu computador!"}
          />
          <CardsTutorial
            imgHeight={"115px"}
            imgWidth={"255px"}
            photo={IconMouse}
            textAlt={"imagem ilustrativa de um mouse e um cursor de computador"}
            title={"Mouse: como usar?"}
            text={"Como usar o mouse? O que é? O que faz cada botão?"}
          />
          <CardsTutorial
            imgHeight={"135px"}
            imgWidth={"160px"}
            photo={IconTeclado}
            textAlt={"Imagem ilustrativa de um teclado de computador"}
            title={"Teclado: como usar?"}
            text={"Como usar o teclado? O que é? O que faz?"}
          />
        </ContainerCards>
      </ContentContainer>
    </Container>
  );
};
