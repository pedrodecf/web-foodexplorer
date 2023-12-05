import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  background-color: var(--dark-700);

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px 28px 32px;

    .menu-header {
      display: flex;
      align-items: center;
    }

    .logout-desktop {
      display: none;
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

    .search-header {
      display: none;
    }

    .orders-header {
      position: relative;
      display: flex;
      align-items: center;

      .orders-text-desktop,
      .parentheses-only-desktop {
        display: none;
      }

      .orders-counter {
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
    }
  }

  @media (min-width: 992px) {
    .header-container {
      max-width: var(--desktop-max-width);
      padding: 24px;
      margin: 0 auto;

      .menu-header {
        display: none;
      }

      .search-header {
        display: flex;
        width: 50%;
      }

      .orders-header {
        background-color: var(--tomato);
        padding: 12px 38px;
        color: var(--light-100);
        border-radius: 8px;
        cursor: pointer;

        .orders-text-desktop {
          color: var(--light-100);
          margin-left: 8px;
          display: block;
          font-family: Poppins;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          margin-right: 4px;
        }

        .parentheses-only-desktop {
          color: var(--light-100);
          display: block;
        }
      }

      .logout-desktop {
        display: block;
      }
    }
  }
`
