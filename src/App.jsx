import { Aside } from './Aside'
import { Container } from './Container'
import styled from 'styled-components'

const ResumePage = styled.div`
display: flex;
`

function App() {

  return (
    <div>
      <ResumePage>
        <Aside />
        <Container />
      </ResumePage>
    </div>
  )
}

export default App
