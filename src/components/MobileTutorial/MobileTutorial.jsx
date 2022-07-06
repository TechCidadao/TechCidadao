import { useState } from "react";

import {
  Header,
  Container,
  HeaderSecondary,
  Div,
  Text,
  ImageBtn,
  StyledTypography,
  AccessBtn,
  StyledPaper,
  InformationCards,
  Btn,
  ImageHere,
  TextDescription,
  StyledTypographyTitle,
  IconImageOne,
  IconImageTwo,
  IconImageThree,
  HiddenArrow,
} from "./styles";

import imgButtonAccess from "../../assets/imgButtonAccess.png";
import imgButtonHere from "../../assets/imgButtonHere.png";
import iconCell from "../../assets/iconCell.png";
import iconSocialMedia from "../../assets/iconSocialMedia.png";
import iconMySpace from "../../assets/iconMySpace.png";

import Xarrow from "react-xarrows";

export const MobileTutorial = () => {
  const [width, setWidth] = useState("20vw");
  const [padding, setPadding] = useState("1rem 5rem");
  const [height, setHeight] = useState("10vh");

  return (
    <Container>
      <Header>Header</Header>
      <HeaderSecondary>
        <StyledTypographyTitle variant="h1" id="title">
          Sobre Celulares:
        </StyledTypographyTitle>
        <Div>
          <Text id="elem2">Aperte aqui para escolher a sua acessibilidade</Text>
          <AccessBtn id="elem1" variant="contained">
            Acessibilidade
            <ImageBtn src={imgButtonAccess} />
          </AccessBtn>
          <Xarrow
            start="elem2"
            end="elem1"
            strokeWidth={2}
            path="grid"
            color="white"
          />
        </Div>
      </HeaderSecondary>
      <InformationCards>
        <StyledPaper id="cardOne" elevation={3}>
          <IconImageOne
            src={iconCell}
            width={width}
            padding={padding}
            height={height}
          />
          <StyledTypography
            variant="p"
            component="h3"
            lineHeight="1.2rem"
            size="1.1em"
            color="black"
          >
            Celular: Primeiros Passos
          </StyledTypography>
          <TextDescription>
            Aqui você vai aprender os primeiros passos para mexer no seu
            celular!
          </TextDescription>
          <Btn>
            Aperte aqui!
            <ImageHere src={imgButtonHere} />
          </Btn>
          <HiddenArrow>
            <Xarrow
              start="title"
              end="cardOne"
              color="white"
              strokeWidth={2}
              headShape="heart"
              curveness={0.8}
              animateDrawing={2}
              path="grid"
              strokeWidth={2}
            />
          </HiddenArrow>
        </StyledPaper>
        <StyledPaper id="cardTwo" elevation={3}>
          <IconImageTwo
            src={iconSocialMedia}
            width="61vw"
            padding="1.5rem 1rem"
            height="9vh"
          />
          <StyledTypography
            variant="p"
            component="h3"
            size="1.1em"
            color="black"
          >
            Ícones: O que são?
          </StyledTypography>
          <TextDescription>
            O que são ícones? Como identificá-los? Para que servem?
          </TextDescription>
          <Btn>
            Aperte aqui!
            <ImageHere src={imgButtonHere} />
          </Btn>

          <HiddenArrow>
            <Xarrow
              start="title"
              end="cardTwo"
              color="white"
              strokeWidth={2}
              path="small"
              path="grid"
              headShape="heart"
              curveness={0.8}
              animateDrawing={2}
              strokeWidth={2}
            />
          </HiddenArrow>
        </StyledPaper>
        <StyledPaper id="cardThree" elevation={3}>
          <IconImageThree
            src={iconMySpace}
            width="40vw"
            padding="0.1rem 2.8rem"
            height="15vh"
          />
          <StyledTypography
            variant="p"
            component="h3"
            lineHeight="1.2rem"
            color="black"
            size="1.1em"
          >
            Mais Sobre: Cadastro e Login
          </StyledTypography>
          <TextDescription>
            Como preencher? Para que servem? O que são?
          </TextDescription>
          <Btn>
            Aperte aqui!
            <ImageHere src={imgButtonHere} />
          </Btn>
          <HiddenArrow>
            <Xarrow
              start="title"
              end="cardThree"
              color="white"
              strokeWidth={2}
              path="small"
              headShape="heart"
              curveness={0.5}
              animateDrawing={2}
              path="grid"
              strokeWidth={2}
              gridBreak="2%"
            />
          </HiddenArrow>
        </StyledPaper>
      </InformationCards>
    </Container>
  );
};
