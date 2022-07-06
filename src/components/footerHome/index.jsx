import { MidArrowContainer } from "../headerMidArrows/style";
import { HomeHeaderDownArrow } from "../headerArrowHomepage";
import { HomeHeaderArrowContainer } from "../headerArrowHomepage/style";

export const Footer = () => {
  return (
    <>
      <HomeHeaderArrowContainer
        BgColor="#ffff"
        transitionColor="#3C28AF"
        shape="rotate(0deg)"
      >
        <HomeHeaderDownArrow />
      </HomeHeaderArrowContainer>
      <MidArrowContainer BgColor="#3C28AF">
        <section>
          <h1>Sobre nós</h1>
          <p>
            Somos uma equipe que se importa com o ser humano e com o
            conhecimento que possuímos decidimos desenvolver uma plataforma que
            auxilia a você a aprender do ínicio até chegar a sua autônomia com a
            tecnologia! A tecnologia é um direito que agora vai ser
            reinvindicado por você!
          </p>
        </section>
      </MidArrowContainer>
    </>
  );
};
