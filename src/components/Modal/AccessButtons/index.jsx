import { useState } from "react";
import { FlexBox, ThemeButton } from "../style";

export const AccessButtons = () => {
  return (
    <FlexBox>
      <ThemeButton>Aumentar texto</ThemeButton>
      <ThemeButton>Diminuir Texto</ThemeButton>
      <ThemeButton>Contraste</ThemeButton>
      <ThemeButton>Tons de cinza</ThemeButton>
    </FlexBox>
  );
};
