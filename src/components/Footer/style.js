import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  background-color: var(--dark-600);
  z-index: 999;

  .footer-container {
    height: 77px;
    padding: 24px;
    max-width: var(--desktop-max-width);
    margin: 0 auto;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-container {
      .logo-img,
      .logo-text {
        height: 18px;
        font-size: 16px;
        filter: grayscale(100%);
        color: var(--light-700);
      }

      .logo-text {
        margin-left: -8px;
      }
    }

    p {
      text-align: right;
      color: var(--light-200);
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 451px) {
    .footer-container {
      flex-direction: column;
      padding: 12px 24px;
      justify-content: center;
      width: 100%;
    }
  }

`
