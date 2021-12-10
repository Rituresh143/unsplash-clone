// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
// import React from 'react';

function App() {
  const [value,setValue] =  useState("")
  const [results, setResult] = useState([])
  // GA38tBFoyEdO65nah5fYvfLB2rVFIM5HEjDPL-qJQQQ 
  const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=GA38tBFoyEdO65nah5fYvfLB2rVFIM5HEjDPL-qJQQQ&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResult(data.results)
    })

  }
  return (
    <div className="App">
      <div className="mydiv">
       <span>Search</span>
      <input 
       style={{width:"60%"}} 
       type="text" 
       value ={value}
        onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={()=>fetchImages()}>send</button>
     </div>
     <div className="gallery">
         {
           results.map((item)=>{
             return <img className="item" key={item.id} src={item.urls.regular}/>
           })
         }
       </div>
    </div>
  );
}

export default App;
