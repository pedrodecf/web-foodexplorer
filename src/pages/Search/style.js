import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--dark-640);

  .main-container {
    margin: 16px auto;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-bottom: 100px;

    > div {
      max-width: 170px;
    }

    .zero-result {
      margin-top: 40px;
      color: var(--light-300);
      font-family: Poppins;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
    }
  }

  footer {
    position: fixed;
    bottom: 0;

    .footer-container {
      margin-top: 0;
    }
  }

  @media (min-width: 992px) {
    .main-container {
      max-width: var(--desktop-max-width);
      padding: var(--desktop-padding);

      > div {
        max-width: 250px;
      }
    }
  }
`
