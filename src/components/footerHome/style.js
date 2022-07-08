import styled from "styled-components";

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    margin-top: 110px;
    width: 100%;
    z-index: -1;
    position: absolute;
    opacity: 0.7;
  }

  @media (min-width: 550px) {
    img {
      margin-top: 20px;
      width: 500px;
    }
  }
`;

export const DivFooter = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
