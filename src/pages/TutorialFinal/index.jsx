import HeaderInternal from "../../components/headerInternal/index";
import { Container } from "./styled";
import { ContainerSubHeader } from "./styled";
import { SubtitleBtnAcessibility } from "pages/userPage/style";
import ArrowAcessibility from "../../assets/ArrowAcessibilidade.svg";
import StudyngImg from "../../assets/studyingImage.jpg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContentInfo } from "providers/content";
import { useUserInfo } from "providers/userInfo";
import { Button } from "components/button";
import { useState } from "react";
import { Modal } from "components/Modal";

export const PageTutorial = () => {
  const [modalAccess, setModalAccess] = useState(false);
  const { currentContent } = useContentInfo();
  const { title, description, link, extra } = currentContent;
  const { token } = useUserInfo();
  const navigate = useNavigate();

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

  return (
    <>
      <HeaderInternal titleBtn={"Voltar"} onClick={() => handleClick()} />
      <Container>
        <ContainerSubHeader>
          <h1>{title}</h1>
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
        </ContainerSubHeader>

        <div className="main">
          <div className="container-video">
            {link.includes("youtube") ? (
              <div className="div-video" style={{ height: "50vh" }}>
                <iframe
                  width={"100%"}
                  height={"100%"}
                  src={link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="div-video">
                <img
                  className="imgContent"
                  src={link}
                  alt={"imagem relacionada ao conteudo"}
                />
              </div>
            )}
            <div className="div-text">
              <p className="description-text">{description}</p>
            </div>
          </div>
          <div className="info-container">
            <div>
              {extra !== "" ? (
                <a href={extra} target={"_blank"} rel={"noreferrer"}>
                  Conteudo Complementar! Clique aqui
                </a>
              ) : (
                <>
                  <p className="description-text">
                    Sem conteúdo extra por hoje!
                  </p>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={StudyngImg}
                    alt="imagem de pessoas estudando"
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <button
          className="backToTop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Voltar ao Topo
        </button>
        {modalAccess && <Modal type="access" setModalAccess={setModalAccess} />}
      </Container>
    </>
  );
};
