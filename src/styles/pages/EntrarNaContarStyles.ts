import styled from "styled-components";

export const LoginWrapper = styled.div`
position: relative;
height: 100vh;

main {
  display: flex;
  justify-content: center;

  gap: 1rem;
  width: 100%;

  section {
    display: flex;
    height: 60vh;
    width: 40%;
    margin-top: 1.5rem;
    border-radius: 8px;
    background-color: #fff;


    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      position: relative;

      border: 1px solid #C5C1C8;
      border-radius: 8px;

      button {
        position: absolute;
        bottom: 2rem;
        background-color: #2CCADF;
      }

      h3 {
        font-family: Nunito, sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-top: .745rem;
        margin-bottom: 1rem;
      }
    }

    form {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      border: 1px solid #C5C1C8;
      border-radius: 8px;

      div + div {
        margin-top: 2rem;
        margin-bottom: 10rem;
      }

      a {
        position: absolute;
        right: 6rem;
        bottom: 10rem;

        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25rem;
        text-decoration: none;
        transition: color .1s;

        :hover {
          color: #BD22F3;
        }
      }

      button {
        position: absolute;
        bottom: 2rem;
      }
    }
  }
}

footer {
  bottom: 0;
}
`
