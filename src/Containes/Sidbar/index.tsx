import Avatar from '../../Componets/avatar'
import Paragrafo from '../../Componets/Paragrafo'
import Titulo from '../../Componets/Titulo'
import { ButtonTheme, SidbarStyled } from './styles'
const Sidbar = () => (
  <SidbarStyled>
    <Avatar />
    <Titulo fontSize={20}>Bruno Nobre</Titulo>
    <Paragrafo fontSize={16}>Bruno-dev-n</Paragrafo>
    <Paragrafo fontSize={12} tipo="secundario">
      Desenvolvedor Full Stack
    </Paragrafo>
    <ButtonTheme>Tema</ButtonTheme>
  </SidbarStyled>
)
export default Sidbar
