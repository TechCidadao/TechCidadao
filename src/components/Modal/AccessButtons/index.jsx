import { useState } from "react";
import { ButtonAcess, Container } from "../style";

export const AccessButtons = () => {
  const [gray, setGray] = useState(false);
  const [font, setFont] = useState(30);

  function grayScale() {
    if (gray) {
      document.body.style.filter = "grayscale(0%)";
      setGray(false);
    } else {
      document.body.style.filter = "grayscale(100%)";
      setGray(true);
    }
  }

  function increseFont() {
    if (font < 32) {
      setFont(font + 2);
      document.body.style.fontSize = `${font}px`;
    }
  }

  function decreseFont() {
    if (font > 14) {
      setFont(font - 2);
      document.body.style.fontSize = `${font}px`;
    }
  }

  return (
    <Container>
      <ButtonAcess onClick={() => increseFont()}>Aumentar Texto</ButtonAcess>
      <ButtonAcess onClick={() => decreseFont()}>Diminuir Texto</ButtonAcess>
      <ButtonAcess onClick={() => grayScale()}>Monocromático</ButtonAcess>
    </Container>
  );
};
