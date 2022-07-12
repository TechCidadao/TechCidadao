import HeaderInternal from "components/headerInternal";
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

  const handleClick = () =>{
    navigate("/dashboard")
  }

  return (
    <>
    <HeaderInternal titleBtn={'Voltar'}/>
      <Container>
        <div className="nav">
          <div className="btn-nav">
            <div className="container-btn">
              <button>Acessibilidade</button>
            </div>
            <div className="btn-text">
              <p>Aperte aqui para escolher sua acessibilidade</p>
            </div>
          </div>
          <div className="div-titulo">
            <h3>Conteudo tal: sobre tal assunto</h3>
          </div>
        </div>

        <div className="main">
          <div className="container-video">
            <div className="div-video">
              <video controls></video>
            </div>
            <div className="div-text">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h3>
            </div>
          </div>
          <div className="info-container">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
