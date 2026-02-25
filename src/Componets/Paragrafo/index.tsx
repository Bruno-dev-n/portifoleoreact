import { P } from './styled'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  textoCentralizado?: boolean
}
const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize,
  textoCentralizado
}: Props) => (
  <P tipo={tipo} fontSize={fontSize} textoCentralizado={textoCentralizado}>
    {children}
  </P>
)
export default Paragrafo
