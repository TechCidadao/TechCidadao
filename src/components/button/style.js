import styled from "styled-components";

export const GlobalButton = styled.button.attrs((props) => ({
  color: props.color,
  BgColor: props.BgColor,
  width: props.width,
}))`
  color: ${(props) => props.color};
  background-color: ${(props) => props.BgColor};
  width: ${(props) => props.width};
  border: none;
  box-shadow: 2px 6px 2px -1px #0000005c;
  padding: 12px;
  border-radius: 8px;
  height: 9vh;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  gap: 15px;
  img {
    width: 40px;
  }

  @media (min-width: 600px) {
    padding: 40px;
    width: 100%;
  }
`;
