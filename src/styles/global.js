import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --dark-200: #00070A;
        --dark-300: #000204;
        --dark-400: #000A0F;
        --dark-600: #00111A;
        --dark-700: #001119;
        --dark-900: #0D1D25;
        --light-100: #FFFFFF;
        --light-200: #FFFAF1;
        --light-300: #E1E1E6;
        --light-400: #C4C4CC;
        --light-500: #7C7C8A;
        --light-700: #4D585E;
        --cake: #065E7C;
        --cake-200: #82F3FF;
        --tomato: #750310;

        --gradients-200: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        --tablet-max-width: 576px;
        --desktop-max-width: 1248px;

        --mobile-padding: 0 24px;
        --desktop-padding: 0 36px;

        font-size: 62.5%;
    }    
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--dark-400);
        color: var(--light-100);
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }    

    textarea:focus, input:focus{
    outline: none;
}    
    `
