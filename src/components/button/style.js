import styled from "styled-components";

export const GlobalButton = styled.button.attrs((props) => ({
  color: props.color,
  BgColor: props.BgColor,
  width: props.width,
  hoverColor: props.hoverColor,
}))`
  color: ${(props) => props.color};
  background-color: ${(props) => props.BgColor};
  width: ${(props) => props.width};
  border: none;
  box-shadow: 2px 6px 2px -1px #0000005c;
  border-radius: 8px;

  img {
    width: 40px;
  }

  p {
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    font-size: 30px;
  }
  &:hover,
  &:focus,
  &:active {
    border: 4px solid ${(props) => props.hoverColor};
  }

  @media (min-width: 600px) {
    width: 320px;
  }
`;
