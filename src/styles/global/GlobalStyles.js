import { createGlobalStyle } from "styled-components";
import { media } from "../theme/theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    body{
        font-family: ${(props) => props.theme.typography.fontFamily};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.6;
        background: ${(props) => props.theme.colors.seasalt};
    }

    html {
        scroll-behavior: smooth;
    }

    ul {
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
        max-width: 100%;
    }
    button{
        border: none;
        outline: 0;
        background-color: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }

    /* page settings */
    .page-wrapper{
        min-height: 100vh;
        display: flex;
        width: 100%;
    }

    .content-wrapper{
        flex: 1;
        max-width: 1600px;
        margin-right: auto;
        margin-left: auto;
    }

    
    .content-area{
        margin: 16px;

        ${media.xs`
            margin: 12px;
        `}
    }

    .text{
        color: ${(props) => props.theme.colors.gray700};
    }

`;
