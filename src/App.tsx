import Projetos from './Containes/Projetos'
import Sidbar from './Containes/Sidbar'
import Sobre from './Containes/Sobre'
import GlobalStyle, { Container } from './style'
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidbar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
