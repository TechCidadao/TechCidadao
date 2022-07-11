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

const HeaderInternal = () => {
  return (
    <>
      <ContainerHeader>
        <ContainerStart>
          <img tabIndex={0} src={UserLogo} alt="Ícone do Tech Cidadão" />
        </ContainerStart>
        <ContainerMid>
          <img src={IconsHands} alt="Quatro mãos unidas no centro" />
          <p tabIndex={"0"}>Bem vindo, fulano de tal</p>
        </ContainerMid>
        <ContainerEnd>
          <p tabIndex={"0"}>Aperte aqui para Voltar</p>
          <img
            tabIndex={0}
            src={ArrowRight}
            alt="Seta para direita indicando o botão para voltar"
          />
          <ButtonEnd tabIndex={"0"}>Voltar</ButtonEnd>
        </ContainerEnd>
      </ContainerHeader>
    </>
  );
};
export default HeaderInternal;
