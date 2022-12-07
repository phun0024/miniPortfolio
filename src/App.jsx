import { Outlet, Link } from 'react-router-dom'

import Container from './components/Container'

function App() {

  return (
    <Container>
      <Outlet></Outlet>
    </Container>
  )
 
}

export default App
