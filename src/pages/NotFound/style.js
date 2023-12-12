import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--dark-640);
  font-family: Poppins;

  .not-found-container {
    padding: 24px;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 24px;

    .not-found-img-container {
      img {
        max-width: 300px;
      }
    }

    .not-found-info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      h1 {
        font-size: 64px;
        line-height: 100%;
        color: var(--orange);
      }

      button {
        background-color: var(--hard-orange);
        color: var(--dark-200);
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 992px) {
    .not-found-container {
      flex-direction: row;
      padding-right: 200px;
      gap: 64px;

      .not-found-img-container {
        img {
          max-width: 400px;
        }
      }
      .not-found-info-container {
        h1 {
          font-size: 98px;
          line-height: 60%;
        }

        button {
          margin-top: 24px;
          width: 80%;
        }
      }
    }
  }
`
