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


const HeaderInternal = ({ titleBtn, onClick }) => {

  const username = localStorage.getItem("@TC:username");
  const firstName = username.split(" ")[0];

  return (
    <>
      <ContainerHeader>
        <ContainerStart>
          <img tabIndex={0} src={UserLogo} alt="Ícone do Tech Cidadão" />
        </ContainerStart>
        <ContainerMid>
          <img src={IconsHands} alt="Quatro mãos unidas no centro" />
          <p tabIndex={"0"}>Bem vindo, {firstName}</p>
        </ContainerMid>
        <ContainerEnd>
          <p tabIndex={"0"}>Aperte aqui para {titleBtn}</p>
          <img
            tabIndex={0}
            src={ArrowRight}
            alt={`Seta para direita indicando o botão para ${titleBtn}`}
          />
          <ButtonEnd tabIndex={"0"} onClick={onClick}>{titleBtn}</ButtonEnd>
        </ContainerEnd>
      </ContainerHeader>
    </>
  );
};
export default HeaderInternal;
