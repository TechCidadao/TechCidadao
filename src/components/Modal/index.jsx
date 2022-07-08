import { useState } from "react";
import { AccessButtons } from "./AccessButtons";
import { LoginForm } from "./LoginForm";
import { ModalLoginTutotial } from "./LoginTutorial";
import { RegistrationForm } from "./RegistrationForm";
import { RegistrationTutorial } from "./RegistrationTutorial";
import { BodyModal, CloseModal, HeadModal, HeadText, ModalBg } from "./style";
import { Success } from "./Success";

export const Modal = ({ type }) => {
  const [selectType, setSelectType] = useState(type);
  function modalType(type) {
    switch (type) {
      case "loginTutorial":
        return <ModalLoginTutotial />;
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
        <CloseModal>X</CloseModal>
      </HeadModal>
      <BodyModal>{modalType(selectType)}</BodyModal>
    </ModalBg>
  );
};
