import { ContainerCard } from "./style";
import { useNavigate } from "react-router-dom";

export const CardsUser = ({ photo, textAlt, route }) => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);

    localStorage.clear();
  };
  return (
    <>
      <ContainerCard onClick={() => handleClick(route)}>
        <img src={photo} alt={textAlt} />
      </ContainerCard>
    </>
  );
};
