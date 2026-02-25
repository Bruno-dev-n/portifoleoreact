import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    body{
      @media (max-width: 768px) {
        }
        }

      `
export default GlobalStyle

export const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  column-gap: 56px;
  min-height: 100vh;
  padding-top: 80px;
  max-width: 1024px;
  margin: 0 auto;
  ul {
    list-style: none;
    padding: 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 160px 1fr;
    column-gap: 32px;
  }

  @media (max-width: 834px) {
    grid-template-columns: 140px 1fr;
    column-gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 0;
    padding-top: 16px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding-top: 8px;
    img {
      max-width: 80%;
    }
  }
`
