import HeaderInternal from "../../components/headerInternal/index";
import { Container } from "./styled";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PageTutorial = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
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
        <nav className="nav">
          <section className="btn-nav">
            <div className="container-btn">
              <button tabIndex={"0"}>Acessibilidade</button>
            </div>
            <div className="btn-text">
              <p tabIndex={"0"}>Aperte aqui para escolher sua acessibilidade</p>
            </div>
          </section>
          <div className="div-titulo">
            <h1 tabIndex={"0"}>Conteudo tal: sobre tal assunto</h1>
          </div>
        </nav>

        <main className="main">
          <section className="container-video">
            <div className="div-video">
              <video controls></video>
            </div>
            <div className="div-text">
              <p tabIndex={"0"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </section>
          <section className="info-container">
            <div>
              <p tabIndex={"0"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
};
