import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--dark-400);
  height: 100vh;

  main {
    .slogan {
      height: 120px;
      background: var(--gradients-200);
      margin: 44px 16px 62px 36px;
      position: relative;

      .img-slogan-container {
        img {
          position: absolute;
          min-width: 190px;
          bottom: 0;
          left: -25px;
          background-size: cover;
          opacity: 0.8;
        }
      }

      .text-slogan-container {
        margin-left: 160px;
        height: 100%;
        padding: 4px 12px 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 1;

        h2 {
          font-family: Poppins;
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 140%;
          z-index: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        p {
          font-family: Poppins;
          font-size: 1.2rem;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          z-index: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }

    .cardapio {
      margin-left: 24px;
    }

    h3 {
      color: var(--light-300);
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      margin: 24px 0;
    }
  }
`
