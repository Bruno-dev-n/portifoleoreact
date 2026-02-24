import styled from 'styled-components'
import { Props } from './index'
export const Titulo = styled.h3<Props>`
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: 700;
  color: #282a35;
  margin-bottom: 16px;
`
