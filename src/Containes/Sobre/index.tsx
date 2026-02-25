import Titulo from '../../Componets/Titulo'
import Paragrafo from '../../Componets/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario" textoCentralizado={true}>
      Sou um desenvolvedor front-end apaixonado por criar experiências digitais
      incríveis. Com uma sólida formação em desenvolvimento web, tenho
      experiência em HTML, CSS e JavaScript, além de frameworks como React.
      Adoro transformar ideias em interfaces intuitivas e responsivas, sempre
      buscando a melhor experiência para os usuários. Estou constantemente
      aprendendo e me atualizando sobre as últimas tendências e tecnologias do
      setor para garantir que meus projetos sejam modernos e eficientes.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-iyr6.vercel.app/api?username=Bruno-dev-n&show_icons=true&theme=radical&include_all_commits=true&count_private=true&cache_seconds=1800" />
      <img src="https://github-readme-stats-iyr6.vercel.app/api/top-langs/?username=Bruno-dev-n&layout=compact&langs_count=7&theme=radical&cache_seconds=1800" />
    </GithubSecao>
  </section>
)
export default Sobre
