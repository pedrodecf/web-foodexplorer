import styled from "styled-components"

export const Container = styled.div`
  .tag-area {
    display: flex;
    padding: 8px;
    max-width: 100%;
    

    .tag-items {
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 6px 16px;

      input {
        display: flex;
        align-items: center;
        width: 100%;
        border: none;
        background-color: transparent;

        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }

      button {
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
      }
    }
  }
`
