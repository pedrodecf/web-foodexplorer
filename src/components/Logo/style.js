import styled from "styled-components"

export const Container = styled.div`
  width: auto;
  cursor: pointer;
  display: flex;
  align-items: center;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 43px;
    }

    .logo-text {
      font-family: "Roboto", sans-serif;
      color: var(--light-100);
      font-weight: 700;
      font-size: 38px;
      display: inline;
      white-space: nowrap;
    }
  }
  .logo-admin {
    span {
      font-family: "Roboto", sans-serif;
      color: var(--cake-200);
      font-size: 12px;
      font-weight: 400;
      line-height: 160%;
      margin: 0 8px;
    }
  }
`
