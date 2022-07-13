import { GlobalButton } from "./style";
import BlueIcon from "../../assets/BlueIcon.svg";
import WhiteIcon from "../../assets/WhiteIcon.svg";

export const Button = ({
  title,
  width,
  color,
  BgColor,
  hoverColor,
  setModalAccess,
  setModalRegisForm,
  setModalLoginForm,
}) => {
  function handleClick(event) {
    const button = event.currentTarget.children[0].textContent;

    if (button === "Entrar") {
      setModalLoginForm(true);
    }
    if (button === "Cadastre-se") {
      setModalRegisForm(true);
    }
    if (button === "Acessibilidade") {
      setModalAccess(true);
    }
  }
  return (
    <>
      <GlobalButton
        aria-describedby={"accessibility-button-description"}
        tabIndex={"0"}
        hoverColor={hoverColor}
        width={width}
        color={color}
        BgColor={BgColor}
        onClick={(event) => handleClick(event)}
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
