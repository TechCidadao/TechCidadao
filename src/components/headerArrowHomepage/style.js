import styled from "styled-components";

export const HomeHeaderArrowContainer = styled.div.attrs((props) => ({
  BgColor: props.BgColor,
  shape: props.shape,
  transitionColor: props.transitionColor,
}))`
  .custom-shape-divider-top-1657030231 {
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: ${(props) => props.shape};
    background-color: #0a0045;
  }

  .custom-shape-divider-top-1657030231 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 160px;
    background: ${(props) => props.transitionColor};
  }

  .custom-shape-divider-top-1657030231 .shape-fill {
    fill: ${(props) => props.BgColor};
    filter: drop-shadow(0px 0px 3px black);
  }
`;
