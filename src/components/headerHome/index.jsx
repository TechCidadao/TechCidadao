import { TopHeaderHome } from "../topHeaderHome";
import { HomeHeaderDownArrow } from "../headerArrowHomepage";
import { HomeHeaderArrowContainer } from "../headerArrowHomepage/style";
import { HeaderMidArrow } from "../headerMidArrows";

export const HeaderHome = () => {
  return (
    <>
      <TopHeaderHome />
      <HomeHeaderArrowContainer BgColor="#1c07a2;" transitionColor="#365DA7">
        <HomeHeaderDownArrow />
      </HomeHeaderArrowContainer>
      <HeaderMidArrow />
      <HomeHeaderArrowContainer
        BgColor="#ffffff"
        transitionColor="#365DA7"
        shape="rotate(180deg);"
      >
        <HomeHeaderDownArrow />
      </HomeHeaderArrowContainer>
    </>
  );
};
