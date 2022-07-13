import { useState } from "react";
import { AccessButtons } from "./AccessButtons";
import { LoginForm } from "./LoginForm";
import { ModalLoginTutorial } from "./LoginTutorial";
import { RegistrationForm } from "./RegistrationForm";
import { RegistrationTutorial } from "./RegistrationTutorial";
import { BodyModal, CloseModal, HeadModal, HeadText, ModalBg } from "./style";
import { Success } from "./Success";

export const Modal = ({
  type,
  setModalLoginForm,
  setModalRegisForm,
  setModalAccess,
  setModalRegis,
  setModalLogin,
}) => {
  const [selectType, setSelectType] = useState(type);
  function closeModal() {
    if (type === "registrarionForm") {
      setModalRegisForm(false);
    }
    if (type === "loginForm") {
      setModalLoginForm(false);
    }
    if (type === "access") {
      setModalAccess(false);
    }
    if (type === "loginTutorial") {
      setModalLogin(false);
    }
    if (type === "registration") {
      setModalRegis(false);
    }
  }
  function modalType(type) {
    switch (type) {
      case "loginTutorial":
        return <ModalLoginTutorial />;
      case "loginForm":
        return <LoginForm />;
      case "registration":
        return <RegistrationTutorial />;
      case "registrarionForm":
        return <RegistrationForm setSelectType={setSelectType} />;
      case "access":
        return <AccessButtons />;
      case "success":
        return <Success />;
      default:
        return;
    }
  }
  return (
    <ModalBg>
      <HeadModal>
        <HeadText>Aperte no X para fechar →</HeadText>
        <CloseModal onClick={() => closeModal()}>X</CloseModal>
      </HeadModal>
      <BodyModal>{modalType(selectType)}</BodyModal>
    </ModalBg>
  );
};
