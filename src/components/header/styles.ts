import styled from "styled-components";

export const HeaderWrapper = styled.header`
width: 100vw;
height: 8rem;

display: flex;
align-items: center;
justify-content: space-between;

padding: 0 10rem;

background-color: #FFF;

div {
  width: 80%;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;

  ul {

    a{
      display: flex;
      align-items: center;
      justify-content: center;

      gap: .5rem;

      list-style: none;
      text-decoration: none;

      li {

        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 1rem;
        line-height: 1.5rem;

        color: #F22152;
      }
    }
  }
}
`

export const HeaderHomeWrapper = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.125rem 7rem;

background: #BD22F3;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    list-style: none;

    li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 1.125rem;
        line-height: 1.75rem;

        color: #FFF;
        text-decoration: none;

        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        padding: .5rem 1rem;

        filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
        border-radius: 8px;
      }
    }
  }
}
`
export const CreateNewFriend = styled.button`
display: flex;
align-items: center;
justify-content: center;

padding: .5rem 1rem;

font-family: Nunito;
font-style: normal;
font-weight: 900;
font-size: 1.125rem;
line-height: 1.75rem;

color: #FFF;

background: #2CCADF;

box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
border-radius: 8px;
border: none;
`
