import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  .voltar-btn {
    a {
      padding: 24px 48px 0;
      font-size: 24px;
      font-weight: 500;
    }
  }

  .view-container {
    margin-bottom: 100px;

    button {
      padding: 12px;
    }
  }

  footer {
    .footer-container {
      margin-top: 0;
    }
  }

  @media (min-width: 978px) {
    .voltar-btn {
      max-width: var(--desktop-max-width);
      margin: 0 auto;

      a {
        padding: 36px 16px;
      }
    }

    footer {
      position: fixed;
      bottom: 0;
    }
    .view-container {
      height: max-content;
      max-width: var(--desktop-max-width);
      padding: 24px;
      margin: 0 auto;
      margin-bottom: 100px;
      display: flex;
      align-items: start;

      button {
        padding: 12px 24px;
      }
    }
  }
`

export const ItemV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 12px 56px;
  background-color: var(--dark-400);
  font-family: Roboto;

  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    img {
      width: 80%;
      max-width: 300px;
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    .name-item {
      h1 {
        font-family: Poppins;
        font-size: 27px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
      }
    }

    .description-item {
      h2 {
        color: var(--light-400);
        text-align: center;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
      }
    }

    .ingredientes {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .counter-and-btn {
      display: flex;
      align-items: center;
      gap: 12px;

      .counter {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 22px;
      }

      .counter-btn {
        cursor: pointer;
      }

      button {
        font-size: 11px;
      }
    }
  }

  @media (min-width: 978px) {
    flex-direction: row;
    margin-top: 36px;

    .img-container {
      img {
        width: 350px;
        max-width: 350px;
        margin-right: 12px;
      }
    }

    .details-container {
      align-items: start;

      .name-item {
        h1 {
          font-size: 40px;
          line-height: normal;
        }
      }

      .description-item {
        h2 {
          font-size: 24px;
          text-align: start;
        }
      }

      .counter-and-btn {
        button {
          font-size: 14px;
          svg {
            display: none;
          }
        }
      }
    }
  }
`

export const Tag = styled.div`
  span {
    font-family: Poppins;
    color: var(--light-100);
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    display: inline-flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    background: var(--dark-1000);
  }
`
