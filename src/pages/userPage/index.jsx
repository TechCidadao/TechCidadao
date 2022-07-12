import HeaderInternal from "../../components/headerInternal/index";
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
import { CardsUser } from "../../components/cardUser/index";
import Computer from "../../assets/Computer.svg";
import Cellphone from "../../assets/Cellphone.svg";
import { Button } from "../../components/button/index";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      navigate("/");
      localStorage.clear();
    }
  };

  return (
    <Container>
      <ContentContainer>
        <HeaderInternal titleBtn={"sair"} />
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
              tabIndex={0}
              className="arrowImg"
              src={ArrowAcessibility}
              alt="imagem da flecha apontando para o botão de acessibilidade"
            />
            <SubtitleBtnAcessibility>
              <p tabIndex={0}>Aperte aqui para escolher sua necessidade</p>
            </SubtitleBtnAcessibility>
          </div>
        </ContainerMid>
        <TitleAcessibility>
          <p tabIndex={0}>Aqui você escolhe o que quer aprender!</p>
          <p tabIndex={0}>Aperte no celular ou no computador para começar</p>
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
