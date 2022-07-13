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
import { useEffect, useState } from "react";
import IconSocialMedia from "../../assets/iconSocialMedia.png";
import IconPeople from "../../assets/iconMySpace.png";
import ArrowTitle from "../../assets/ArrowTitle.png";
import IconCell from "../../assets/iconCell.png";
import TechCidadaoAPI from "services/api";
import { useUserInfo } from "providers/userInfo";
import { useContentInfo } from "providers/content";
import { toast } from "react-toastify";
import { Modal } from "components/Modal";

export const MobileTutorial = () => {
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
    TechCidadaoAPI.get(`/contentMobile/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        getCurrentContent(res.data);
        if (res.data) {
          navigate(`/dashboard/mobile/tutorial/${id}`);
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
          <section style={{ textAlignLast: "center" }}>
            <h1 tabIndex={"0"}>Sobre Celular:</h1>
            <img
              src={ArrowTitle}
              alt="Seta apontando para os cards de conteúdo"
            />
          </section>
          <div>
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
          </div>
        </ContainerMid>

        <ContainerCards>
          <CardsTutorial
            id={"1"}
            imgHeight={"115px"}
            imgWidth={"120px"}
            photo={IconCell}
            textAlt={"imagem ilustrativa de um celular"}
            title={"Celular: Primeiros Passos"}
            text={
              "Aqui você vai aprender os primeiros passos para mexer no seu celular!"
            }
            onClick={GetContent}
          />
          <CardsTutorial
            id={"2"}
            imgHeight={"75px"}
            imgWidth={"255px"}
            photo={IconSocialMedia}
            textAlt={
              "imagem ilustrativa de icones: facebook, instagram, youtube e google"
            }
            title={"Ícones: O que são?"}
            text={"O que são ícones? Como identificá-los? Para que servem?"}
            onClick={GetContent}
          />
          <CardsTutorial
            id={"3"}
            imgHeight={"135px"}
            imgWidth={"160px"}
            photo={IconPeople}
            textAlt={"Imagem ilustrativa três pessoas enfileiradas"}
            title={"Mais Sobre: Cadastros e Login"}
            text={"Como preencher? Para que servem? O que são?"}
            onClick={GetContent}
          />
        </ContainerCards>
      </ContentContainer>
      {modalAccess && <Modal type="access" setModalAccess={setModalAccess} />}
    </Container>
  );
};
