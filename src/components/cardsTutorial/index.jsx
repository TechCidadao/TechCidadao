import { Button } from "components/button";
import { ContainerCard, ContainerImg } from "./style";
import { TitleCard, TextCard } from "./style";

export const CardsTutorial = ({
  photo,
  textAlt,
  title,
  text,
  imgHeight,
  imgWidth,
}) => {
  return (
    <>
      <ContainerCard>
        <ContainerImg imgHeight={imgHeight} imgWidth={imgWidth}>
          <img src={photo} alt={textAlt} />
        </ContainerImg>
        <TitleCard>{title}</TitleCard>
        <TextCard>{text}</TextCard>
        <Button
          title="Aperte aqui!"
          BgColor="var(--blue-sky)"
          color="var(--white)"
          hoverColor={"var(--black)"}
          width={"90%"}
        />
      </ContainerCard>
    </>
  );
};
