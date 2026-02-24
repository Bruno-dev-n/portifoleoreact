import Titulo from '../../Componets/Titulo'
import Projet from '../../Componets/Projet'
import { List } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
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
