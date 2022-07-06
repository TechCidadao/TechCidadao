import styled from "styled-components";

export const HomeHeaderBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgb(28 7 162) 20%,
    rgb(54 93 167 / 55%) 100%
  );
  height: 250px;
  width: 100%;

  section {
    width: 90%;
    text-align: center;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    height: 450px;

    section {
      padding: 10px;
      width: 40%;
    }
  }
`;

export const BoxImg = styled.div.attrs((props) => ({
  position: props.position,
  space: props.space,
}))`
  margin-top: ${(props) => props.space};
  position: ${(props) => props.position};
  text-align: center;

  img {
    width: 90%;
  }

  @media (min-width: 600px) {
    display: flex;
    margin: 0;
    img {
      width: 320px;
      padding: 10px;
    }
  }
`;
