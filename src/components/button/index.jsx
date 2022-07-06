import { GlobalButton } from "./style";
import BlueIcon from "../../assets/BlueIcon.svg";
import WhiteIcon from "../../assets/WhiteIcon.svg";

export const Button = ({ title, width, color, BgColor }) => {
  return (
    <>
      <GlobalButton width={width} color={color} BgColor={BgColor}>
        {title}
        {BgColor === "#365DA7" ? (
          <img src={WhiteIcon} alt="icone indicando clique" />
        ) : (
          <img src={BlueIcon} alt="icone indicando clique" />
        )}
      </GlobalButton>
    </>
  );
};
