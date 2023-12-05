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
  }

  @media (min-width: 978px) {
    .voltar-btn {
      max-width: var(--desktop-max-width);
      margin: 0 auto;

      a {
        padding: 36px 16px;
      }
    }

    .view-container {
      height: max-content;
      max-width: var(--desktop-max-width);
      padding: 24px;
      margin: 0 auto;
    }

    footer {
      position: fixed;
      bottom: 0;

      main {
        margin-top: 0;
      }
    }
  }
`
