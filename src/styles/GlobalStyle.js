import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    ol, ul {
    list-style: none;
    }

    button{
        cursor: pointer;

    }

   

    :root{
        --primary-background: #365DA766;
        --blue: #3680C5;
        --blue-marine:#3C28AF;
        --blue-sky: #365da7;
        --green-primary:#2A7000;
        --green-secundary:#36A763;

        --button-blue:#066ba4;
        --button-white:#7D7D7D;

        --black:#000000;
        --white:#ffffff;
        --background:#364462;
        --background-input:#D9D9D9;
    }

`;

export default GlobalStyle;
