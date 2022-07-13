import { ContainerMain, SectionBtn } from "./style";
import { Button } from "../../components/button/index";
import { ContainerBtn } from "./style";
import { useState } from "react";
import { Modal } from "components/Modal";

export const MainHome = () => {
  const [modalRegis, setModalRegis] = useState(false);
  const [modalRegisForm, setModalRegisForm] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalLoginForm, setModalLoginForm] = useState(false);
  return (
    <>
      <ContainerMain>
        <ContainerBtn>
          <SectionBtn>
            <Button
              title="Cadastre-se"
              BgColor="var(--blue-sky)"
              color="var(--white)"
              width="300px"
              hoverColor={"var(--black)"}
              setModalRegisForm={setModalRegisForm}
            />
            <h2 tabIndex={"0"} onClick={() => setModalLogin(true)}>
              O que é Cadastro e porque cadastrar? Aperte nessas letras para
              saber
            </h2>
          </SectionBtn>
          <SectionBtn>
            <Button
              title="Entrar"
              BgColor="var(--blue-sky)"
              color="var(--white)"
              width="300px"
              hoverColor={"var(--black)"}
              setModalLoginForm={setModalLoginForm}
            />
            <h2 tabIndex={"0"} onClick={() => setModalRegis(true)}>
              O que é Entrar e porque entrar? Aperte nessas letras para saber
            </h2>
          </SectionBtn>
        </ContainerBtn>
      </ContainerMain>
      {modalRegisForm && (
        <Modal type="registrarionForm" setModalRegisForm={setModalRegisForm} />
      )}
      {modalLoginForm && (
        <Modal type="loginForm" setModalLoginForm={setModalLoginForm} />
      )}
      {modalRegis && (
        <Modal type="registration" setModalRegis={setModalRegis} />
      )}
      {modalLogin && (
        <Modal type="loginTutorial" setModalLogin={setModalLogin} />
      )}
    </>
  );
};
