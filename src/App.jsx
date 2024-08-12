import { useState } from 'react'
import Navbar from './components/navbar'
import Carousel from './components/carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Carousel/>
    </>
  )
}

export default App
