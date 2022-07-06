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
          <div>
            <h1>Sobre nós</h1>
            <p>texto aqui</p>
          </div>
          <div>
            <h2>Devs</h2>
            <p>devs aqui</p>
          </div>
        </section>
      </MidArrowContainer>
    </>
  );
};
