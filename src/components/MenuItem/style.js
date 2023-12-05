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

  .description-item {
    display: none;
  }

  h1,
  a {
    color: var(--light-200);
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

  .counter-and-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
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

  @media (min-width: 992px) {
    max-width: 250px;
    height: 360px;

    h1,
    a {
      font-size: 18px;
    }

    .description-item {
      display: block;
      color: var(--light-400);
      text-align: center;

      h2 {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    span {
      font-size: 21px;
    }

    .counter-and-btn {
      margin-top: 12px;
      flex-direction: row;
    }
  }

  .details {
    h1 {
      position: relative;
      padding-bottom: 4px;

      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 0;
        bottom: 0;
        left: 0;
        background-color: var(--light-100);
        transition: all 0.2s ease-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`
