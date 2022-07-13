import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

import IconMouse from "../../assets/MouseImg.png";
import IconComputer from "../../assets/ComputerImg.png";
import IconTeclado from "../../assets/TecladoImg.png";
import ArrowTitle from "../../assets/ArrowTitle.png";
import { useState } from "react";
import { Modal } from "components/Modal";

import TechCidadaoAPI from "services/api";
import { useUserInfo } from "providers/userInfo";
import { useContentInfo } from "providers/content";

import { toast } from "react-toastify";

export const DesktopTutorial = () => {
  const [modalAccess, setModalAccess] = useState(false);
  const navigate = useNavigate();
  const { token } = useUserInfo();
  const { getCurrentContent } = useContentInfo();

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  useEffect(() => {
    if (token === "") {
      return navigate("/notFound");
    }
  });

  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      navigate("/dashboard");
    }
  };
  const handleClick = () => {
    navigate("/dashboard");
  };

  const GetContent = (id) => {
    TechCidadaoAPI.get(`/contentDesktop/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        getCurrentContent(res.data);
        if (res.data) {
          navigate(`/dashboard/desktop/tutorial/${id}`);
        }
      })
      .catch((error) =>
        toast.error("Algo está errado, tente novamente mais tarde")
      );
  };
  return (
    <Container>
      <ContentContainer>
        <HeaderInternal titleBtn={"voltar"} onClick={() => handleClick()} />
        <ContainerMid>
          <div style={{ textAlignLast: "center" }}>
            <h1 tabIndex={"0"}>Sobre Computador:</h1>
            <img
              src={ArrowTitle}
              alt="Seta apontando para os cards de conteúdo"
            />
          </div>
          <section>
            <Button
              title="Acessibilidade"
              color="var(--blue-sky)"
              BgColor="var(--white)"
              width="300px"
              hoverColor={"var(--black)"}
              setModalAccess={setModalAccess}
            />
            <div className="arrowPosition">
              <img
                className="arrowImg"
                src={ArrowAcessibility}
                alt="imagem da flecha apontando para o botão de acessibilidade"
              />
              <SubtitleBtnAcessibility>
                <p tabIndex={"0"}>Aperte aqui para escolher sua necessidade</p>
              </SubtitleBtnAcessibility>
            </div>
          </section>
        </ContainerMid>

        <ContainerCards>
          <CardsTutorial
            id={"1"}
            imgHeight={"115px"}
            imgWidth={"155px"}
            photo={IconComputer}
            textAlt={"imagem ilustrativa de um computador"}
            title={"Computador: Primeiros Passos"}
            text={"Aqui você vai aprender o básico do seu computador!"}
            onClick={GetContent}
          />
          <CardsTutorial
            id={"2"}
            imgHeight={"115px"}
            imgWidth={"255px"}
            photo={IconMouse}
            textAlt={"imagem ilustrativa de um mouse e um cursor de computador"}
            title={"Mouse: como usar?"}
            text={"Como usar o mouse? O que é? O que faz cada botão?"}
            onClick={GetContent}
          />
          <CardsTutorial
            id={3}
            imgHeight={"135px"}
            imgWidth={"160px"}
            photo={IconTeclado}
            textAlt={"Imagem ilustrativa de um teclado de computador"}
            title={"Teclado: como usar?"}
            text={"Como usar o teclado? O que é? O que faz?"}
            onClick={GetContent}
          />
        </ContainerCards>
      </ContentContainer>
      {modalAccess && <Modal type="access" setModalAccess={setModalAccess} />}
    </Container>
  );
};
