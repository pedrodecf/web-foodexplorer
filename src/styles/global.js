import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --dark-400: #000A0F;
        --dark-900: #0D1D25;
        --light-100: #FFFFFF;
        --light-400: #C4C4CC;
        --light-500: #7C7C8A;
        --cake: #065E7C;
        --tomato: #750310;
    }    
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: red;
    }
    `
