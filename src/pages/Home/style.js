import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--dark-640);
  height: 100%;

  main {
    margin-bottom: 100px;

    .slogan {
      height: 120px;
      background: var(--gradients-200);
      margin: 44px 16px 62px 36px;
      position: relative;

      .img-slogan-container {
        img {
          position: absolute;
          max-width: 210px;
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
          font-size: 18px;
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
          font-size: 12px;
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

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  @media (min-width: 992px) {
    main {
      max-width: var(--desktop-max-width);
      padding: var(--desktop-padding);
      margin: 0 auto;
      .slogan {
        height: 260px;
        background: var(--gradients-200);
        margin: 140px 24px 36px 24px;
        position: relative;

        .img-slogan-container {
          img {
            max-width: 600px;
            opacity: 1;
          }
        }

        .text-slogan-container {
          margin-left: 45%;
          text-align: center;

          h2 {
            font-weight: 500;
            font-size: 40px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      .category-cardapio {
        margin-top: 32px;
        font-size: 28px;
      }

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        top: 40%;
      }

      .swiper-button-disabled {
        display: none;
      }

      .swiper-button-next {
        right: 0;
      }
    }
  }
`
