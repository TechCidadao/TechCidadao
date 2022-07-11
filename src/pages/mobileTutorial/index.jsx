import HeaderInternal from "../../components/headerInternal/index";
import ArrowAcessibility from "../../assets/ArrowAcessibilidade.svg";
import {
  Container,
  ContainerCards,
  ContainerMid,
  ContentContainer,
  SubtitleBtnAcessibility,
} from "./style";
import { CardsTutorial } from "components/cardsTutorial";
import { Button } from "components/button";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import IconSocialMedia from "../../assets/iconSocialMedia.png";
import IconPeople from "../../assets/iconMySpace.png";
import ArrowTitle from "../../assets/ArrowTitle.png";
import IconCell from "../../assets/iconCell.png";

export const MobileTutorial = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      navigate("/dashboard");
    }
  };

  return (
    <Container>
      <ContentContainer>
        <HeaderInternal />
        <ContainerMid>
          <div style={{ textAlignLast: "center" }}>
            <h1 tabIndex={0}>Sobre Celular:</h1>
            <img
              tabIndex={0}
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
                tabIndex={0}
                className="arrowImg"
                src={ArrowAcessibility}
                alt="imagem da flecha apontando para o botão de acessibilidade"
              />
              <SubtitleBtnAcessibility>
                <p tabIndex={0}>Aperte aqui para escolher sua necessidade</p>
              </SubtitleBtnAcessibility>
            </div>
          </div>
        </ContainerMid>

        <ContainerCards>
          <CardsTutorial
            imgHeight={"115px"}
            imgWidth={"120px"}
            photo={IconCell}
            textAlt={"imagem ilustrativa de um celular"}
            title={"Celular: Primeiros Passos"}
            text={
              "Aqui você vai aprender os primeiros passos para mexer no seu celular!"
            }
          />
          <CardsTutorial
            imgHeight={"75px"}
            imgWidth={"255px"}
            photo={IconSocialMedia}
            textAlt={
              "imagem ilustrativa de icones: facebook, instagram, youtube e google"
            }
            title={"Ícones: O que são?"}
            text={"O que são ícones? Como identificá-los? Para que servem?"}
          />
          <CardsTutorial
            imgHeight={"135px"}
            imgWidth={"160px"}
            photo={IconPeople}
            textAlt={"Imagem ilustrativa três pessoas enfileiradas"}
            title={"Mais Sobre: Cadastros e Login"}
            text={"Como preencher? Para que servem? O que são?"}
          />
        </ContainerCards>
      </ContentContainer>
    </Container>
  );
};
