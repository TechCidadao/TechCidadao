import { HomeHeaderDownArrow } from "../headerArrowHomepage";
import { HomeHeaderArrowContainer } from "../headerArrowHomepage/style";
import { HomeHeaderBox, BoxImg, ContainerArrow } from "../headerHome/style";
import Logo from "../../assets/Logo.svg";
import bgHeader from "../../assets/bgHeader.png";
import { Button } from "../button";
import ArrowAcessibilidade from "../../assets/ArrowAcessibilidade.svg";
import { MidArrowContainer } from "../headerHome/style";

export const HeaderHome = () => {
  return (
    <>
      <HomeHeaderBox>
        <BoxImg>
          <img
            tabIndex={"0"}
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
            BgColor="var(--white)"
            color="var(--blue-sky)"
            hoverColor={"var(--black)"}
            width={"300px"}
          />
          <div className="arrowPosition">
            <h1 tabIndex={"0"}>
              Aperte aqui
              <br />
              para escolher <br />
              sua necessidade
            </h1>
            <img
              tabIndex={"0"}
              src={ArrowAcessibilidade}
              alt="Flecha apontando para o texto de Acessibilidade"
            />
          </div>
        </ContainerArrow>
      </HomeHeaderBox>

      <HomeHeaderArrowContainer
        BgColor="var(--blue-marine)"
        transitionColor="var(--blue-sky)"
      >
        <HomeHeaderDownArrow />
      </HomeHeaderArrowContainer>
      <MidArrowContainer BgColor="var(--blue-sky)">
        <h1 tabIndex={"0"}>
          Esse site foi pensado para você! Isso mesmo, você que deseja aprender
          mais sobre tecnologia mas não acha os recursos necessários ou tem
          dificuldade em encontrar um site com acessibilidade!
        </h1>
      </MidArrowContainer>
      <HomeHeaderArrowContainer
        BgColor="var(--white)"
        transitionColor="var(--blue-sky)"
        shape="rotate(180deg);"
      >
        <HomeHeaderDownArrow />
      </HomeHeaderArrowContainer>
    </>
  );
};
