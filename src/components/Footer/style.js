import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  height: 77px;
  background-color: var(--dark-600);
  padding: 24px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`