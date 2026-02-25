import styled from 'styled-components'
export const GithubSecao = styled.section`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;

  img {
    height: 157px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    flex-direction: column;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
    }
  }
`
