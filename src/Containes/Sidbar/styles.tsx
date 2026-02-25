import styled from 'styled-components'

export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
`
export const SidbarStyled = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  position: sticky; /* sidebar acompanha o scroll */
  top: 80px;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    position: static;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`

export const ContentStyled = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding: 16px;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2;
  }
`
