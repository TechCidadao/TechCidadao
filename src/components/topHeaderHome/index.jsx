import { HomeHeaderBox, BoxImg, ContainerArrow } from "./style";
import Logo from "../../assets/Logo.svg";
import bgHeader from "../../assets/bgHeader.png";
import { Button } from "../button";
import ArrowAcessibilidade from "../../assets/ArrowAcessibilidade.svg";
export const TopHeaderHome = () => {
  return (
    <>
      <HomeHeaderBox>
        <BoxImg>
          <img
            src={Logo}
            style={{ zIndex: "1", position: "absolute" }}
            alt="Tech cidadão Logo"
          />

          <img
            src={bgHeader}
            style={{ zIndex: "-1" }}
            alt="Img inclusão social"
          />
        </BoxImg>

        <ContainerArrow>
          <Button
            title="Acessibilidade"
            BgColor="#ffff"
            color="#365DA7"
            hoverColor={"#1e1e1e"}
            width={"300px"}
          />
          <div className="arrowPosition">
            <h1>
              Aperte aqui
              <br />
              para escolher <br />
              sua necessidade
            </h1>
            <img
              src={ArrowAcessibilidade}
              alt="Flecha apontando para o texto de Acessibilidade"
            />
          </div>
        </ContainerArrow>
      </HomeHeaderBox>
    </>
  );
};
