import styled from "styled-components"

export const Container = styled.div`
  padding: 24px;
  height: 290px;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--dark-300);
  border: 1px solid var(--dark-200);
  border-radius: 8px;
  font-family: Roboto;
  position: relative;

  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    svg {
      height: 18px;
      width: 18px;
    }
  }

  img {
    width: 60%;
  }

  .name-item {
    display: flex;
    gap: 4px;
  }

  h1 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  span {
    color: var(--cake-200);
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 18px;
  }

  .counter-btn {
    cursor: pointer;
  }
`
