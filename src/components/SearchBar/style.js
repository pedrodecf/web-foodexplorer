import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--dark-900);
  width: 100%;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--light-500);

  > input {
    margin-left: 12px;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 400;
    background: none;
    border: none;
    width: 100%;
  }
`
