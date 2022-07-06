import { ContainerMain } from "./style";
import { Button } from "../../components/button/index";
import { ContainerBtn } from "./style";
import FooterImg from "../../assets/hands.png";

export const MainHome = () => {
  return (
    <>
      <ContainerMain>
        <ContainerBtn>
          <section>
            <Button
              title="Entrar"
              BgColor="#365DA7"
              color="#ffff"
              width="90%"
            />
            <h1>
              O que é Cadastro e porque cadastrar? Aperte nessas letras para
              saber
            </h1>
          </section>
          <section>
            <Button
              title="Cadastre-se"
              BgColor="#365DA7"
              color="#ffff"
              width="90%"
            />
            <h1>
              O que é Entrar e porque entrar? Aperte nessas letras para saber
            </h1>
          </section>
        </ContainerBtn>
        <img className="foot" src={FooterImg} alt="imagem de mãos coloridas" />
      </ContainerMain>
    </>
  );
};
