import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --dark-400: #000A0F;
        --dark-700: #001119;
        --dark-900: #0D1D25;
        --light-100: #FFFFFF;
        --light-400: #C4C4CC;
        --light-500: #7C7C8A;
        --cake: #065E7C;
        --cake-200: #82F3FF;
        --tomato: #750310;

        --tablet-max-width: 840px;
        --desktop-max-width: 1248px;

        --mobile-padding: 0 24px;
        --desktop-padding: 0 36px
    }    
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--dark-400);
        color: var(--light-100);
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
