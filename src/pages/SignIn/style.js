import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  padding: var(--mobile-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  .logo-wrapper {
    margin-bottom: 41px;

    .logo-container {
      img {
        width: 36px;
        margin-right: 14px;
      }
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
    animation: opacidade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @keyframes opacidade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    h2 {
      display: none;
    }
  }

  @media (min-width: 576px) {
    padding: var(--desktop-padding);
    max-width: var(--tablet-max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 32px;

    .logo-wrapper {
      margin-bottom: 41px;
    }
  }

  @media (min-width: 992px) {
    padding: var(--desktop-padding);
    max-width: var(--desktop-max-width);
    flex-direction: row;
    justify-content: space-around;

    .info-wrapper {
      padding: 64px;
      background-color: var(--dark-700);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(348px + 64px + 64px);
      gap: 32px;

      h2 {
        display: block;
        font-family: Poppins;
        font-size: 32px;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 8px;
      }
    }

    .logo-wrapper {
      margin-bottom: 0px;
    }
  }
`
