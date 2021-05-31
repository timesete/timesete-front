import styled from "styled-components";

export const ModalOverlay = styled.div`
position: absolute;

top: 0;

width: 100vw;
height: 100vh;

background: rgba(22, 14, 27, 0.4);

display: flex;
align-items: center;
justify-content: center;

>div {
  width: 608px;
  height: 198px;

  background: #FFFFFF;

  border: 1px solid #C5C1C8;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;

    color: #160E1B;

    width: 608px;
    height: 73px;


  }

  >div {
    width: 608px;
    height: 56px;

    padding: 16px;


  }

  footer {
    width: 608px;
    height: 69px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    padding: 1rem;

    button {
      width: 146px;
      height: 44px;

      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 28px;
    }
  }
}
`
export const ModalOverlayInfo = styled.div`
position: absolute;

top: 0;
left: 0;
bottom: 0;
right: 0;

background: rgba(22, 14, 27, 0.4);
`

export const ModalVideo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

border-radius: 8px 0 0 8px;

position: fixed;
width: 400px;
height: 591px;
right: 0;
top: 100px;

background-color: #fff;

header {
  width: 400px;
  height: 80px;
  background: #2CCADF;
  padding: 1rem;

  border-radius: 8px 0 0 0;

  button {
    background-color: transparent;
    border: none;
  }
}

main {
  >div {
    width: 400px;
    height: 255.5px;

    display: flex;
    align-items: center;
    justify-content: center;

    iframe {
      width: 400px;
    height: 255.5px;
    }

    img {
      position: absolute;
    }
  }
}

>div {
  margin: 20px;

  h2 {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #160E1B;
  }

  >div {
    display: flex;

    width: 360px;
    height: 52px;

    margin-top: 20px;

    img {
      width: 44px;
      height: 44px;
      border-radius: 22px;

      margin-right: 1rem;
    }

    >div {
      display: flex;
      flex-direction: column;

      h3 {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;

        color: #160E1B;
      }
      p {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;

        color: #554B58;
      }
    }
  }

  button {
    width: 360px;
    height: 44px;

    background: #2CCADF;

    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 28px;


    position: absolute;
    bottom: 1rem;
  }
}


`
