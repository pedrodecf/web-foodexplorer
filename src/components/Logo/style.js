import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;

  img {
    width: 43px;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    color: var(--light-100);
    font-weight: 700;
    font-size: 38px;
  }

  span {
    font-family: "Roboto", sans-serif;
    color: var(--cake-200);
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
  }
`
