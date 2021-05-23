import styled from "styled-components";

export const RegisterWrapper = styled.div`

main {
  padding: 1.5rem 17.1875rem 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 6.5rem;
    background-color: #FFF;

    border: 1px solid #C5C1C8;
    box-sizing: border-box;
    border-radius: 8px;

    fieldset {
      width: 100%;
      font-family: Nunito, sans-serif;
      font-size: 1.12rem;
      font-weight: 700;
      color: #160E1B;
      border: none;

      & + fieldset {
        margin-top: 2rem;
      }

      legend {
        margin-bottom: 1.5rem;

      }

      div {
        width: 100%;

        & + div {
          margin-top: 2rem;
        }
      }
    }

    button {
      margin-top: 3rem;
      background: #2CCADF;
    }
  }
}
`
