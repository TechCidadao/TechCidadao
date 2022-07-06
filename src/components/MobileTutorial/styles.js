import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Button, Paper } from "@mui/material";

export const Header = styled.header`
  background: #fff;
  text-align: center;
`;
export const Container = styled.div`
  background-color: #364462;
  @media (min-width: 426px) {
    height: 100vh;
  }
`;
export const HeaderSecondary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 426px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.71rem;
  }
`;
export const StyledTypographyTitle = muiStyles.styled(Typography)`
    font-family: 'Inter';
    letter-spacing: 0.09em;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: 600;
    order: 1;
    font-size: 2rem;
    line-height: 3rem;
    @media(min-width: 426px) {
        font-size: 3rem;
        order: 0;
    }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 426px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 40vw;
  }
`;
export const Text = styled.p`
  font-family: Poppins, sans-serif;
  order: 1;
  font-size: 1rem;
  color: #fff;
  margin-top: 2.3rem;
  @media (min-width: 426px) {
    order: 0;
    display: block;
    width: 7vw;
    padding-right: 0.5rem;
  }
`;
export const AccessBtn = muiStyles.styled(Button)({
  fontFamily: ["Poppins", "sans-serif"],
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "1.8rem",
  lineHeight: "82px",
  textAlign: "center",
  textTransform: "none",
  color: "#365DA7",
  background: "#FFFFFF",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  width: "90vw",
  height: "10vh",
  display: "flex",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "#7D7D7D",
    color: "#FFFFFF",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
  "@media(min-width: 426px)": {
    width: "27vw",
    height: "79px",
    fontSize: "45px",
  },
});
export const InformationCards = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 426px) {
    flex-direction: row;
    justify-content: space-evelyn;
    margin-top: 3rem;
    gap: 0;
  }
`;
export const StyledPaper = muiStyles.styled(Paper)({
  maxWidth: "70vw",
  height: "45vh",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.1rem",
  borderRadius: "1rem",
  margin: "0 auto",
  "@media(min-width: 426px)": {
    maxWidth: "20vw",
    height: "55vh",
    justifyContent: "space-around",
  },
});
export const IconImageOne = styled.img`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  background: #3680c5;
  border-radius: 10px;
  margin-bottom: 1rem;
  @media (min-width: 426px) {
    width: 8vw;
    height: 13vh;
    padding: 2.5rem 6rem;
    align-items: center;
  }
`;
export const StyledTypography = muiStyles.styled(Typography)`
    font-family: 'Inter';
    letter-spacing: 0.09em;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: 500;
    order: 1;
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    line-height: ${(props) => props.lineHeight};
    @media(min-width: 426px) {
        font-size: 2rem;
        line-height: 36px;
        order: 0;
    }
`;
export const TextDescription = styled.p`
  color: ${(props) => props.color};
  font-family: Inter;
  order: 1;
  margin-top: 2.3rem;
  @media (min-width: 426px) {
    font-size: 1.45rem;
    margin-top: 0.2rem;
  }
`;
export const Btn = styled.button`
  font-family: Inter;
  width: 70vw;
  height: 7vh;
  background: #3680c5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  order: 1;
  font-size: 1.6em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 426px) {
    width: 20vw;
    height: 7.4vh;
  }
`;
export const ImageBtn = styled.img`
  width: 10vw;
  height: 5vh;
  @media (min-width: 426px) {
    width: 70px;
    height: 67px;
  }
`;
export const ImageHere = styled.img`
  width: 10vw;
  heght: 12vh;
  @media (min-width: 426px) {
    width: 2vw;
    heght: 4vh;
  }
`;
export const HiddenArrow = styled.div`
  display: none;
  @media (min-width: 426px) {
    display: block;
  }
`;
export const IconImageTwo = styled.img`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  background: #3680c5;
  border-radius: 10px;
  margin-bottom: 1rem;
  @media (min-width: 426px) {
    width: 11vw;
    height: 7vh;
    padding: 4rem 4.5rem;
    align-items: center;
  }
`;
export const IconImageThree = styled.img`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  background: #3680c5;
  border-radius: 10px;
  margin-bottom: 1rem;
  @media (min-width: 426px) {
    width: 9vw;
    height: 15vh;
    padding: 2rem 5.5rem;
    align-items: center;
  }
`;
