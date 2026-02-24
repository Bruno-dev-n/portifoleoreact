import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    *{margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    body{@media (max-width: 768px) {
      }}


      `
export default GlobalStyle

export const Container = styled.div`
      padding-top: 80px;
      max-width: 1024px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 180px auto;
      column-gap: 56px;
      @media (max-width: 768px) {
        padding-top: 16px;
    max-width: 80%;
    display: block;
    }
  img {
    max-width: 100%;
    border-radius: 50%;

`
