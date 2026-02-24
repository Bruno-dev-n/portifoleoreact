import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card } from '../Projet/styles'
import { LinkButton } from '../Projet/styles'

const Projet = () => {
  return (
    <Card>
      <Titulo>Projetos Lista de Tarefas</Titulo>
      <Paragrafo>APP FEITO COM VUEJS.</Paragrafo>
      <LinkButton href="#">Ver mais</LinkButton>
    </Card>
  )
}
export default Projet
