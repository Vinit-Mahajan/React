import { useState, useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0987654321"
    if(charAllowed) str += "!@#$%^&*()_+{};,.?/*-+`~[]<>"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  },fn, [length, numberAllowed, charAllowed, setPassword]) 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-8 text-orange-500 bg-gray-600'>
        <h1 className= 'text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
        </div>
      </div>
      
    </>
  )
}

export default App
