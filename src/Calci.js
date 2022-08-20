import React, { useState } from 'react'
import "./Calci.css"

const Calci = () => {
    const[input,setInput]=useState("");
    const[result,setResult]=useState(0)

    const handler=e=>{
        setInput(e.target.value)
    }

  return (
    <div className='container'>
        <div className='cal'>
        <h1>Calculator</h1>
        </div>
        <div className='text'>
        <input type="text" value={input} name="input"  onChange={handler} />
     
        <button onClick={()=>setResult(eval(input))}>Result</button>
        </div>
        <h4>The Result is:{result}</h4>
        <br/>
        <div className='onclick'>
        <button className='button' onClick={()=> setInput(input+ "1" )}>1</button>
        <button className='button'onClick={()=>  setInput(input+"2")}>2</button>
        <button className='button'onClick={()=>  setInput(input+"3")}>3</button>
        <button className='button'onClick={()=>  setInput(input+"4")}>4</button>
        <button className='button'onClick={()=>  setInput(input+"5")}>5</button>
        <br/>
        <button className='button'onClick={()=> setInput(input+"6")}>6</button>
        <button className='button' onClick={()=>  setInput(input+"7")}>7</button>
        <button className='button'onClick={()=>  setInput(input+"8")}>8</button>
        <button className='button'onClick={()=>  setInput(input+"9")}>9</button>
        <button className='button'onClick={()=>  setInput(input+"0")}>0</button>
        <br/>
        <button className='button'onClick={()=>  setInput(input+"+")}>+</button>
        <button className='button'onClick={()=>  setInput(input+"-")}>-</button>
        <button className='button'onClick={()=>setInput(input+"*")}>*</button>
        <button className='button'onClick={()=>setInput(input+"/")}>/</button>
        <button className='button'onClick={()=>setInput("")}>clr</button>
        <br/>
        </div>
        










    </div>
  )
}

export default Calci