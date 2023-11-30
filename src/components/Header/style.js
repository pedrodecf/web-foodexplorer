import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 28px 32px;
  background-color: var(--dark-700);

  .menu-header {
    display: flex;
    align-items: center;
  }

  .logo-header {
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-text {
      font-size: 21px;
      margin-left: 6px;
    }

    .logo-img {
      width: 24px;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .orders-header {
    position: relative;
    display: flex;
    align-items: center;
  }

  .orders-header::after {
    content: "1";
    position: absolute;
    right: -6px;
    top: -6px;
    width: 20px;
    height: 20px;
    background: var(--tomato);
    border-radius: 50%;
    opacity: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`
