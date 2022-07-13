import { ContainerCard, ContainerImg } from "./style";
import { TitleCard, TextCard } from "./style";
import WhiteIcon from "../../assets/WhiteIcon.svg";

export const CardsTutorial = ({
  photo,
  textAlt,
  title,
  text,
  imgHeight,
  imgWidth,
  id,
  onClick,
}) => {
  return (
    <>
      <ContainerCard id={id}>
        <ContainerImg imgHeight={imgHeight} imgWidth={imgWidth}>
          <img tabIndex={0} src={photo} alt={textAlt} />
        </ContainerImg>
        <TitleCard tabIndex={0}>{title}</TitleCard>
        <TextCard tabIndex={0}>{text}</TextCard>
        <button onClick={() => onClick(id)}>
          <p>
            Aperte Aqui!
            <img
              className="btnMobile"
              src={WhiteIcon}
              alt="icone indicando clique"
            />
          </p>
        </button>
      </ContainerCard>
    </>
  );
};
