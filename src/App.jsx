import { useState } from 'react'
import React from 'react'


import Navbar from './components/Navbar'
import Footer from './components/Footer'


// import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    {/* suppose we have to pass that count into a hero section so do that we have to pass the count prop inside navbar first,then we go inside navbar and get the count state there and then from there we pass the count to footer component and then inside footer we have our hero section we then pass that count into hero section compoenent,to avoid this prop drilling we
    have to use context hook/context api when we use context api we have direct access of each component and the components inside that components so we dont have to use prop drilling 
    so this is the problem we avoid using context api / hook and how context api works is inside the howcontextapiworks
     project in this folder */}
    <Navbar count={count}/>
    
    

    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
