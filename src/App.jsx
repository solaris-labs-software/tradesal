import Navbar from './components/navbar'
import Carousel from './components/carousel'
import {Cursos} from "./components/cursos/index.jsx";
import Presentation from './components/common/presentation'
import {AboutSection} from "./components/about/index.jsx";
import {Footer} from "./components/footer/index.jsx";

function App() {

  return (
      <>
          <video
              src="/src/assets/background.mp4"
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>
          <div className="z-10">
              <Navbar/>
              <Presentation title='CURSOS Y CAPACITACIONES' text='"Impulsa tu futuro con cada aprendizaje"'/>
              <AboutSection/>
              <Cursos/>
              <Carousel/>
              <Footer/>
          </div>
      </>
  )
}

export default App
