import { ContainerMain, SectionBtn } from "./style";
import { Button } from "../../components/button/index";
import { ContainerBtn } from "./style";
import FooterImg from "../../assets/hands.png";

export const MainHome = () => {
  return (
    <>
      <ContainerMain>
        <ContainerBtn>
          <SectionBtn>
            <Button
              title="Entrar"
              BgColor="#365DA7"
              color="#ffff"
              width="100%"
              hoverColor={"#03AF5D"}
            />
            <h1>
              O que é Cadastro e porque cadastrar? Aperte nessas letras para
              saber
            </h1>
          </SectionBtn>
          <SectionBtn>
            <Button
              title="Cadastre-se"
              BgColor="#365DA7"
              color="#ffff"
              width="100%"
              hoverColor={"#03AF5D"}
            />
            <h1>
              O que é Entrar e porque entrar? Aperte nessas letras para saber
            </h1>
          </SectionBtn>
        </ContainerBtn>
        <img
          className="foot"
          src={FooterImg}
          alt="imagem de mãos coloridas no centro"
        />
      </ContainerMain>
    </>
  );
};
