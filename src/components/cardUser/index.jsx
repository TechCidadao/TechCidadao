import { ContainerCard } from "./style";

export const CardsUser = ({ photo, textAlt }) => {
  return (
    <>
      <ContainerCard>
        <img src={photo} alt={textAlt} />
      </ContainerCard>
    </>
  );
};
