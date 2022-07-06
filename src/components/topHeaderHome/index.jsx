import { HomeHeaderBox, BoxImg, ContainerArrow } from "./style";
import Logo from "../../assets/Logo.svg";
import bgHeader from "../../assets/bgHeader.png";
import { Button } from "../button";
import ArrowAcessibilidade from "../../assets/ArrowAcessibilidade.svg";
export const TopHeaderHome = () => {
  return (
    <HomeHeaderBox>
      <BoxImg position="relative" space="10px" style={{ opacity: "0.6" }}>
        <img src={bgHeader} alt="Img inclusão social" />
      </BoxImg>
      <BoxImg position="absolute" space="40px">
        <img src={Logo} alt="Tech cidadão Logo" />
      </BoxImg>
      <section>
        <Button
          title="Acessibilidade"
          BgColor="#ffff"
          color="#365DA7"
          hoverColor={"#92c5d7"}
          width={"100%"}
        />
        <ContainerArrow>
          <img
            src={ArrowAcessibilidade}
            alt="imagem de flecha apontando para o texto abaixo do botão"
          />
          <h1>Aperte aqui para escolher sua acessibilidade</h1>
        </ContainerArrow>
      </section>
    </HomeHeaderBox>
  );
};
