import { GlobalButton } from "./style";
import BlueIcon from "../../assets/BlueIcon.svg";
import WhiteIcon from "../../assets/WhiteIcon.svg";

export const Button = ({ title, width, color, BgColor, hoverColor }) => {
  return (
    <>
      <GlobalButton
        hoverColor={hoverColor}
        width={width}
        color={color}
        BgColor={BgColor}
      >
        <p>
          {title}

          {BgColor === "var(--blue-sky)" ? (
            <img
              className="btnMobile"
              src={WhiteIcon}
              alt="icone indicando clique"
            />
          ) : (
            <img
              className="btnMobile"
              src={BlueIcon}
              alt="icone indicando clique"
            />
          )}
        </p>
      </GlobalButton>
    </>
  );
};
