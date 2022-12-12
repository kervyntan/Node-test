import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [val, setVal] = useState(false)
  useEffect( () => {
    fetch('http://localhost:3000')
    .then( (res) => res.json())
    .then( (data) => {
      console.log(data)
      setVal(true)
     })
    .catch( () => console.log("Hello"))
  }, [])

  return (
    <div className="App">
      {val && <> Hello! This works! </>}
    </div>
  )
}

export default App
