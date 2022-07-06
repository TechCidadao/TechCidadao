import styled from "styled-components";

export const MidArrowContainer = styled.div.attrs((props) => ({
  BgColor: props.BgColor,
}))`
  background-color: ${(props) => props.BgColor};
  padding: 10px 10px;

  h1 {
    margin: 0;
    font-size: 15px;
    color: white;
    letter-spacing: 2px;
    text-shadow: 4px 3px 4px rgb(41 35 35);
  }

  @media (min-width: 600px) {
    height: 30vh;

    h1 {
      font-size: 30px;
      width: 90%;
      padding: 0px 10px px 0px 10px;
    }
  }
`;
