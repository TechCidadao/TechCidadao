import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
        --primary-background: #365DA7;
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
