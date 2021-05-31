import styled from "styled-components";

export const ArticleMediumWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

img {
  width: 31.5rem;
  height: 5.75rem;
}

div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem;

  width: 31.5rem;
  height: 10.25rem;

  background-color: #FFFFFF;
  border-radius: 0px 0px 4px 4px;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem 1rem;

    position: static;
    width: 7.875rem;
    height: 2.75rem;

    background: #2CCADF;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    margin: .75rem 0px;
  }
}
`
export const ArticleLargeWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

img {
  width: 608px;
  height: 236px;

  border-radius: 4px 4px 0px 0px;

}

div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem;

  width: 608px;
  height: 164px;

  background-color: #FFFFFF;
  border-radius: 0px 0px 4px 4px;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem 1rem;

    position: static;
    width: 7.875rem;
    height: 2.75rem;

    background: #2CCADF;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    margin: .75rem 0px;
  }
}`

export const ArticleSmallWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

position: relative;


filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

p {
  position: absolute;
  text-align: center;
  color: #FFFFFF;
  width: 151.71px;
  height: 46px;
  left: 20.14px;
  top: 53.3px;
  z-index: 100;
}

img {
  width: 192px;
  height: 152.6px;

  border-radius: 4px 4px 0px 0px;

}

div:last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  width: 192px;
  height: 37.77px;;

  background-color: #FFFFFF;
  border-radius: 0px 0px 4px 4px;

  a {
    text-decoration: none;

    color: #2CCADF;

    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 11.3311px;
    line-height: 18px;
  }
}
`
