import Titulo from '../../Componets/Titulo'
import Paragrafo from '../../Componets/Paragrafo'
import Projet from '../../Componets/Projet'
import { List } from './styles'

const Projetos = () => (
  <section>
    <Titulo>Projetos</Titulo>
    <List>
      <li>
        <Projet />
      </li>
      <li>
        <Projet />
      </li>
      <li>
        <Projet />
      </li>
      <li>
        <Projet />
      </li>
      <li>
        <Projet />
      </li>
    </List>
  </section>
)
export default Projetos
