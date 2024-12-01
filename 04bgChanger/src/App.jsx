import { useState } from "react"


function App() {
  const [color, setColor] = useState("skyblue")

  return (
    <div className="w-full h-screen duration-500"
      style = {{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            
            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("red")}
            style={{backgroundColor: "red"}}>Red</button>
            
            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("green")}
            style={{backgroundColor: "green"}}>Green</button>
            
            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
            onClick={() => setColor("yellow")}
            style={{backgroundColor: "yellow"}}>Yellow</button>
            
            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
            onClick={() => setColor("purple")}
            style={{backgroundColor: "purple"}}>Purple</button>
            
            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
            onClick={() => setColor("orange")}
            style={{backgroundColor: "orange"}}>Orange</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
            onClick={() => setColor("indigo")}
            style={{backgroundColor: "indigo"}}>Indigo</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
            onClick={() => setColor("magenta")}
            style={{backgroundColor: "magenta"}}>Magenta</button>

          </div>
        </div>
    </div>
  )
}

export default App