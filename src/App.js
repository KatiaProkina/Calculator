import { useState } from "react"


function App() {
  const [calc,setCalc] = useState('')
  const [result,setResult]=useState('')
  const [history,setHistory] = useState('')

  const ops = ['/','*','+','-','.']

  const updateCalc = value =>{
    if(
      ops.includes(value) && calc==='' ||
      ops.includes(value) && ops.includes (calc.slice(-1))
    )
    {
      return
    }
    setCalc(calc+value)
   

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString())
    }
    
  }

  const createDigits = ()=>{
    const digits = []

    for (let i = 1; i<10; i++){
      digits.push (
        <button 
        onClick={() => updateCalc(i.toString())}
        key={i}>
        {i}</button>
      )
    }
    return digits
  }

  const deleteLast = ()=>{
    if(calc == ""){
      return
    }

    const value = calc.slice(0, -1)

    setCalc(value)
  }

  const finish =  ()=>{
    setCalc(eval(calc).toString())
    let date = new Date()
    setHistory(result + " "+ date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds())
  }
  

  return (
    <div className="App">
       <div className="calculator">
         <div className="display">
           {calc || '0'}
         </div>
      

      <div className="operators">
           <button onClick={()=> updateCalc ('/')}>/</button>
           <button onClick={()=> updateCalc ('*')}>*</button>
           <button onClick={()=> updateCalc ('+')}>+</button>
           <button onClick={()=> updateCalc ('-')}>-</button>
           <button onClick={deleteLast}>DEL</button>
      </div>

      <div className="digits">
           {createDigits ()}
           <button onClick={()=> updateCalc ('0')}>0</button>
           <button onClick={()=> updateCalc ('.')}>.</button>
           <button onClick={finish}>=</button>
      </div>
      </div>
      <div>История:{history}</div>
      
      
    </div>
  );
}

export default App;
