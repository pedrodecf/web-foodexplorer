import styled from "styled-components"

export const Container = styled.div`
  form {
    padding: 24px 48px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
      color: var(--light-300);
      font-family: Poppins;
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
    }
  }

  .first-colum {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .second-colum {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .ingredientes {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-family: "Roboto", sans-serif;
      color: var(--light-400);
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
    }

    .tags-container {
      display: grid;
      height: 48px;
      grid-template-columns: 1fr 1fr;
      background-color: var(--dark-800);
      width: 100%;
      border-radius: 8px;
    }
  }
  .form-btn {
    margin-top: 32px;
  }

  @media (min-width: 992px) {
    
    form {
      a {
        font-size: 24px;
      }
      margin-top: 24px;
      display: grid;
      max-width: var(--desktop-max-width);
      margin: 0 auto;
      height: 100%;
      gap: 42px;

      .ingredientes {
        .tags-container {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }

      .first-colum {
        display: grid;
        gap: 32px;
        grid-template-columns: 1fr 2fr 1fr;
      }

      .second-colum {
        display: grid;
        gap: 32px;
        grid-template-columns: 2fr 1fr;
      }

      .form-btn {
        display: flex;
        justify-content: end;

        button {
          width: 200px;
          height: 48px;
          margin-bottom: 100px;
        }
      }
    }

    textarea {
      height: 172px;
    }

    footer {
      position: fixed;
      bottom: 0;

      main {
        margin-top: 0px;
      }
    }
  }
`
