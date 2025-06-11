// import './App.css'
import { BioProvider } from './hooks/contextApi/index.jsx'
import { Home } from './hooks/contextApi/Home.jsx'
import { About } from './hooks/contextApi/About.jsx'

function App() {

  return (
    <BioProvider>
      <Home />
      <About/>
    </BioProvider>
  )
}

export default App
