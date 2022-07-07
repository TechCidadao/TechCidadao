import { Button } from "components/button";
import { ContainerCard, ContainerImg } from "./style";
import { TitleCard, TextCard } from "./style";
export const CardsTutorial = ({ photo, textAlt, title, text }) => {
  return (
    <>
      <ContainerCard>
        <ContainerImg>
          <img src={photo} alt={textAlt} />
        </ContainerImg>
        <TitleCard>{title}</TitleCard>
        <TextCard>{text}</TextCard>
        <Button> {/* botar props no botão */}</Button>
      </ContainerCard>
    </>
  );
};
