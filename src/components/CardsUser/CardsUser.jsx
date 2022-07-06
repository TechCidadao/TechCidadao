import { ContainerCard } from "./style";

const CardsUser = ({ photo, textAlt }) => {
  return (
    <>
      <ContainerCard>
        <img src={photo} alt={textAlt} />
      </ContainerCard>
    </>
  );
};
export default CardsUser;
