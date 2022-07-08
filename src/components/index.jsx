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
          <img src={UserLogo} alt="Ícone do Tech Cidadão" />
        </ContainerStart>
        <ContainerMid>
          <img src={IconsHands} alt="Quatro mãos unidas no centro" />
          <p>Bem vindo, fulano de tal</p>
        </ContainerMid>
        <ContainerEnd>
          <p>Aperte aqui para Voltar</p>
          <img
            src={ArrowRight}
            alt="Seta para direita indicando o botão para voltar"
          />
          <ButtonEnd>Voltar</ButtonEnd>
        </ContainerEnd>
      </ContainerHeader>
    </>
  );
};
export default HeaderInternal;
