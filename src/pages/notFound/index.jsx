import { ContainerMessage } from "./style";
import AlertImg from "../../assets/payAttentionImg.svg";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ContainerMessage>
      <div>
        <h1>
          Infelizmente você não está logado! Aperte em voltar e entre. Caso não
          tenha uma conta para entrar, faça o cadastro! É super rápido e simples
        </h1>
        <button onClick={() => navigate("/")}>Voltar</button>
        <img src={AlertImg} alt="Imagem de uma pessoa sinalizando um alerta" />
      </div>
    </ContainerMessage>
  );
};
