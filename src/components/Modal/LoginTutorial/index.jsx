import { Tutorial, HeadText } from "../style";

export const ModalLoginTutotial = ({ setSelectType }) => {
  return (
    <Tutorial onClick={() => setSelectType("loginForm")}>
      <HeadText>
        Aqui você vai estar utilizando sua senha e e-mail para entrar no seu
        espaço pessoal de aprendizado que deve ser criado no Cadastro! Veja as
        informações sobre o Cadastro para entender mais.
      </HeadText>
    </Tutorial>
  );
};
