import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  padding: 12px 32px;
  background-color: var(--tomato);
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--light-100);

  svg {
    width: 21px;
    height: 21px;
    margin-right: 6px;
  }
`
