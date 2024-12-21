import React from'react';
import '../styles/App.css';
import { useEffect,useState } from'react';

function App() {
  let [name, setName]=useState('');
useEffect(()=>{

},[name])

  return (
    <div className="App">
     
      <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your name" className='textarea'></input>
      <div className='preview'><p className='loading'>{name}</p></div>
    </div>
  );
}

export default App;
