import { HomeHeaderBox, BoxImg } from "./style";
import Logo from "../../assets/Logo.svg";
import bgHeader from "../../assets/bgHeader.png";
import { Button } from "../button";

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
          width="90%"
          BgColor="#ffff"
          color="#365DA7"
        />
      </section>
    </HomeHeaderBox>
  );
};
