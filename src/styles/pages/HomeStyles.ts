import styled from "styled-components";

export const HomeWrapper = styled.div`
position: relative;
margin: 0 auto;
width: 90%;

background-color: #fff;

main {
  height: 36.9375rem;
  position: relative;

  >img {
    width: 100%;
  }

  >div :first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    color: #fff;

    width: 100%;
    height: 64px;

    background: rgba(22, 14, 27, 0.4);

    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
  }
}

>div {
  position: relative;
  height: 1400px;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  article {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;

    >div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      & + div {
        margin-top: 1rem;
      }
    }
  }

  >img {
    position: absolute;
    z-index: -15;
    width: 100%;

    &:first-child{
      top: 30px;
    }

    &:last-child{
      bottom: 0;
    }
  }

  section {
    position: absolute;
    margin-top: 50rem;

    h2 {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 40px;
    }

    p {
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
    }

    div {
      display: flex;
      gap: 1rem;
      margin-top: 4rem;
    }
  }

  button {
    margin-top: 6.5rem;
  }
}
`
export const LearnMoreGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1rem;
`
