import { useState } from 'react'

import './App.css'
import Article from './components/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
     
     <Article/>
      
    </>
  )
}

export default App
