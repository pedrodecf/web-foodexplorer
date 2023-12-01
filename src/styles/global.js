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

        --swiper-navigation-size: 28px;
        --swiper-theme-color: #FFFAF1;

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

    .details {
        h1 {
            position: relative;
            padding-bottom: 4px;

            &::after {
                content: "";
                position: absolute;
                height: 1px;
                width: 0;
                bottom: 0;
                left: 0;
                background-color: var(--light-100);
                transition: all 0.2s ease-out;
      }

            &:hover::after {
                width: 100%;
      }
    }

    }

    button, a, .action {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover, .action:hover {
        filter: brightness(0.9);
    }    

    textarea:focus, input:focus{
    outline: none;
}    
    `
