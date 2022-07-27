import { Aside } from './Aside'
import { Container } from './Container'
import styled from 'styled-components'

const ResumePage = styled.div`
display: flex;
justify-content: center;
@media (max-width: 1010px) {
  flex-direction: column;
  align-items: center;
}
`

function App() {

  return (
    <ResumePage>
      <Aside />
      <Container />
    </ResumePage>
  )
}

export default App
