import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [height,setHeight]=useState(0);
  const [weight,setWeight]=useState(0);
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');

let calcBmi=(e)=>{
  e.preventDefault();
  if(weight===0 || height===0){
    alert("plese enter a valid weight and height");
  }
  else{
    let bmi=(weight/(height*height)*703)
    setBmi(bmi.toFixed(1));

    if(bmi<25){
      setMessage("you are underweight");
    }
    else if(bmi>=25 && bmi<30){
      setMessage("you are a healthy weight")
    }
    else{
      setMessage("you are overweight")
    }
  }
}

//reload

let reload=()=>{
  window.location.reload()
}


  return (
    <div className="container">
         <div className='form'>
    <h2>BMI CALCULgitATOR</h2>
   
     
     <form onSubmit={calcBmi}>
      <div>
        <label>weight (ibs)</label>
        <input type="text" placeholder="Enter Weight value" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
      </div>
      <div>
        <label>height (ibs)</label>
        <input type="text" placeholder="Enter Height value" value={height} onChange={(e)=>setHeight(e.target.value)}/>
      </div>
      <div>
        <button className='btn1' type='sumbmit'>Submit</button><br /><br />
        <button className='btn2 btn-outline' onClick={reload} type='sumbmit'>Reload</button>
      </div>
      <div className='center'>
        <h3>Your BMI is:{bmi} </h3>
        <h4>{message}</h4>
      </div>
     </form>
    </div>
    </div>
  );
}

export default App;
