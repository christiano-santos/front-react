import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFF;
        --mega: #209869;
        --lotofacil: #930989;
        --lotofacilcolor: #930089;
        --quina: #260085;
        --lotomania: #F78100;
        --duplasena: #BF194E;
        --duplasenacolor: #a61324;
        --diadesorte:#cb852b;
        --supersete: #a8cf45;
        --supersetecolor: #4c546d;
        --timemaniadezcolor: #049645;
        --timemaniabgcolor: #FFF600;
        --timemania: #00ff48;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
`