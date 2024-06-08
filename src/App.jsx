import './App.css'
import { Index } from './components/pages/Index'
import { Crear } from './components/pages/Crear'
import { Mangas } from './components/pages/Mangas'

function App() {

  return (
    <div>
      <h1>Libreria de Mangas</h1>

      <Index></Index>
      <Mangas></Mangas>
      <Crear></Crear>
    </div>
  )
}

export default App
