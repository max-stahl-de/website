import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 1.01em;
    }

    body {
        background-color: transparent;
    }
`;

export default GlobalStyles;
