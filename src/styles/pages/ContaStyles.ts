import styled from "styled-components";

export const AccountWrapper = styled.div`
height: 100vh;
width: 100vw;

position: absolute;

display: flex;
flex-direction: column;

main {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1.5rem 17.2rem;

  form {
    padding: 2rem 6.5rem;
    background-color: #FFF;

    border: 1px solid #C5C1C8;
    box-sizing: border-box;
    border-radius: 8px;
    height: 500px;

    h2 {
      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 1.75rem;
      line-height: 2.25rem;

      color: #1A2027;
    }

    fieldset {
      margin-top: 2.5rem;
      border: none;

      legend {
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;

        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.75rem;

        color: #1A2027;
      }
    }
  }
}

footer {
  bottom: 0;
}
`
export const AvatarGroup= styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 3rem;
`
