import UserLogo from "../../assets/UserLogo.svg";
import IconsHands from "../../assets/IconsHands.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import {
  ButtonEnd,
  ContainerEnd,
  ContainerHeader,
  ContainerMid,
  ContainerStart,
} from "./style";
import { useUserInfo } from "providers/userInfo";

const HeaderInternal = ({ titleBtn, onClick }) => {
  const { userName } = useUserInfo();

  const firstName = userName.split(" ")[0];
  return (
    <>
      <ContainerHeader>
        <ContainerStart role="img">
          <img tabIndex={"0"} src={UserLogo} alt="Ícone do Tech Cidadão" />
        </ContainerStart>
        <ContainerMid role="img">
          <img src={IconsHands} alt="Quatro mãos unidas no centro" />
          <p tabIndex={"0"}>Bem vindo, {firstName}</p>
        </ContainerMid>
        <ContainerEnd role="img">
          <p tabIndex={"0"}>Aperte aqui para {titleBtn}</p>
          <img
            src={ArrowRight}
            alt={`Seta para direita indicando o botão para ${titleBtn}`}
          />
          <ButtonEnd tabIndex={"0"} onClick={onClick}>
            {titleBtn}
          </ButtonEnd>
        </ContainerEnd>
      </ContainerHeader>
    </>
  );
};
export default HeaderInternal;
