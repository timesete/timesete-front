import styled from "styled-components";

export const SelectWrapper = styled.div`

display: flex;
flex-direction: column;

label {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: Nunito, sans-serif;
}

select {
  margin-top: .5rem;
  width: 100%;
  height: 2.25rem;

  display: flex;
  align-items: center;

  Padding: .5rem .75rem ;
  margin-top: .5rem;

  border-radius: 4px;
  border: 1px solid #C5C1C8;

  font-size: 1rem;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  line-height: 1.5rem;

  :focus {
    border: 2px solid #BD22F3;
  }
}
`
