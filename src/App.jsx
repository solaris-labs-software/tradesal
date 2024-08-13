import { useState } from 'react'
import Navbar from './components/navbar'
import Carousel from './components/carousel'
import {Cursos} from "./components/cursos/index.jsx";
import Presentation from './components/common/presentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <video src="/src/assets/background.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="z-10">
        <Navbar/>
        <Presentation title='CURSOS Y CAPACITACIONES' text='"Impulsa tu futuro con cada aprendizaje"' />
        <Carousel/>
          <Cursos/>
      </div>
    </>
  )
}

export default App
