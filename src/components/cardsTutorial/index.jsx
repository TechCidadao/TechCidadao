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
          <img tabIndex={0} src={photo} alt={textAlt} />
        </ContainerImg>
        <TitleCard tabIndex={0}>{title}</TitleCard>
        <TextCard tabIndex={0}>{text}</TextCard>
        <Button
          tabIndex={0}
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
