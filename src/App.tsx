import './App.css'
import Header from './components/header/Header'
import { LINKSDATA, LINKSDAT2, LINKSDAT3 } from './data/header'

function App() {
  return (
    <>
      <Header
        links={LINKSDATA}
      />
      

      <Header
        links={LINKSDAT2}
      />

      <Header
        links={LINKSDAT3}
      />
      
    </>
  )
}

export default App