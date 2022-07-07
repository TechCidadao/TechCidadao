import { MidArrowContainer } from "components/headerHome/style";
import { HomeHeaderDownArrow } from "../headerArrowHomepage";
import { HomeHeaderArrowContainer } from "../headerArrowHomepage/style";
import FooterImg from "../../assets/hands.png";
import { ImgContainer, DivFooter } from "./style";

export const Footer = () => {
  return (
    <>
      <ImgContainer>
        <img
          className="foot"
          src={FooterImg}
          alt="imagem de mãos coloridas no centro"
        />
      </ImgContainer>

      <DivFooter>
        <HomeHeaderArrowContainer
          BgColor="var(--blue-marine)"
          transitionColor="var(--blue-marine)"
          shape="rotate(0deg)"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0, 51% 54%)",
            zIndex: "1",
            marginTop: "250px",
          }}
        >
          <HomeHeaderDownArrow />
        </HomeHeaderArrowContainer>
        <MidArrowContainer BgColor="var(--blue-marine)">
          <section>
            <h1 tabIndex={"0"}>Sobre nós</h1>
            <p tabIndex={"0"}>
              Somos uma equipe que se importa com o ser humano e com o
              conhecimento que possuímos decidimos desenvolver uma plataforma
              que auxilia a você a aprender do ínicio até chegar a sua autônomia
              com a tecnologia! A tecnologia é um direito que agora vai ser
              reinvindicado por você!
            </p>
          </section>
        </MidArrowContainer>
      </DivFooter>
    </>
  );
};
