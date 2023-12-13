import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--dark-400);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;
  footer {
    position: fixed;
    bottom: 0;
    .footer-container {
      margin-top: 0;
    }
  }
  .fechar-menu {
    padding: 64px 28px 32px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 21px;
    font-weight: 400;
    background-color: var(--dark-700);
    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
  main {
    height: 100%;
    padding: 28px 28px 0;
    .opcoes-menu {
      margin-top: 28px;
      border-bottom: 1px solid var(--dark-1000);
      a {
        color: var(--light-300);
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: 140%;
      }
    }
  }
`
