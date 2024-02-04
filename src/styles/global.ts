import { createGlobalStyle } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${e => e.theme.background};
    }

    body, input, textarea, button {
        font: normal 1rem Nunito, sans-serif;
    }
`