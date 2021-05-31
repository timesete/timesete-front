import styled, { css } from "styled-components";

interface RedefinePasswordProps {
  currentStep: number;
}

export const RedefinePasswordWrapper = styled.div<RedefinePasswordProps>`
height: 100vh;

main {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 23.70rem 2.75rem;

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 1.38rem 6.5rem 2rem;
    background-color: #fff;

    border: 1px solid #C5C1C8;
    border-radius: 8px;

    fieldset {
      border: none;

      legend {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.5rem;

        display: flex;
        align-items: center;
        text-align: center;

        color: #160E1B;
        margin-bottom: 1rem;
      }

      section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        gap: 2.625rem;

        span {
          position: absolute;
          border: 1px solid #C5C1C8;
          background-color: #C5C1C8;
          width: 11%;

          ${props => props.currentStep === 2 && css`
          border: 1px solid #BD22F3;
          background-color: #BD22F3;
          `}
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;

          font-family: Nunito, sans-serif;
          font-style: normal;
          font-weight: 900;
          font-size: 1rem;
          line-height: 1.5rem;

          color: #C5C1C8;

          width: 2.75rem;
          height: 2.75rem;

          border-radius: 1.375rem;
          border: 2.7027px solid #C5C1C8;

          &:first-child {
            color: #FFFFFF;
            background: #D677F8;
            border: 2.7027px solid #BD22F3;
          }

          ${props => props.currentStep === 2 && css`
          &:last-child {
            color: #FFFFFF;
            background: #D677F8;
            border: 2.7027px solid #BD22F3
          }
          `}
        }
      }

      >div {

        & + div {
          margin-top: 2rem;
        }
      }
    }

    button {
      margin-top: 5.25rem;
      background-color: #2CCADF;
    }

    a{
      font-family: Nunito, sans-serif;
      font-size: 1.12rem;
      font-weight: 900;
      line-height: 1.75rem;
      color: #2CCADF;
      text-decoration: none;
      margin-top: 1rem;
    }
  }
}

footer {
  bottom: auto;

  ${props => props.currentStep === 1 && css`
  bottom: 0;
  `}
}
`;

