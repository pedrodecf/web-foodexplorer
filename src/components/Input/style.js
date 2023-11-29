import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-family: Roboto;
    color: var(--light-400);
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    background-color: var(--dark-900);
    color: var(--light-500);
  }
`
