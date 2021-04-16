import {useState} from 'react'
import './App.css';

function App() {
  const [counterValue,setCounterValue] = useState(0);
  const sum = (value) => {
    setCounterValue(counterValue + value)
  }

  const minus = (value) => {
    setCounterValue(counterValue - value)
  }

  const reset = () => {
    setCounterValue(0)
  }
  
  return (
   <div className="container">
     <h2 className="description">Pressione os botões para aumentar ou diminuir o numero em tela</h2>
     <h3 className="counter-value">{counterValue}</h3>

     <div className="container-increase-value">
       <button className="minus-5 button-action" onClick={() => {minus( 5 )}} > -5 </button>
       <button className="minus-10 button-action" onClick={() => {minus( 10 )}}> -10</button>
       <button className="minus-1 button-action" onClick={() => {minus( 1 )}}> -1</button>
       <button className="reset button-action" onClick={() => {reset()}}> 0</button>
       <button className="plus-1 button-action" onClick={() => {sum( 1 )}}> +1</button>
       <button className="plus-5 button-action" onClick={() => {sum( 5 )}}>+5</button>
       <button className="plus-10 button-action" onClick={() => {sum( 10 )}}>+10</button>
     </div>

   </div>
  );
}

export default App;
