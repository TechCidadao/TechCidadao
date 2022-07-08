import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { ModalLoginTutotial } from "./LoginTutorial";
import { RegistrationForm } from "./RegistrationForm";
import { RegistrationTutorial } from "./RegistrationTutorial";
import { BodyModal, CloseModal, HeadModal, HeadText, ModalBg } from "./style";

export const Modal = ({ type }) => {
  const [selectType, setSelectType] = useState(type);
  function modalType(type) {
    switch (type) {
      case "loginTutorial":
        return <ModalLoginTutotial setSelectType={setSelectType} />;
      case "loginForm":
        return <LoginForm />;
      case "registration":
        return <RegistrationTutorial setSelectType={setSelectType} />;
      case "registrarionForm":
        return <RegistrationForm />;
      default:
        return <span>nada</span>;
    }
  }
  return (
    <ModalBg>
      <HeadModal>
        <HeadText>Aperte no X para fechar →</HeadText>
        <CloseModal>X</CloseModal>
      </HeadModal>
      <BodyModal>{modalType(selectType)}</BodyModal>
    </ModalBg>
  );
};
