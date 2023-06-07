import logo from './logo.svg';
import './App.css';
import { LoadImages,SearchImages } from './components/api';
import React, { Component, useState }  from 'react';
import Image from './components/images';

function App() {
  const [query,setquery]=useState()
  const[Search,setSearch]=useState()
  const data=LoadImages();
  const search=()=>{
    setSearch(query)
  }
  const searchData=SearchImages(Search);
  return (
    <div className="App">
    <div className='input-div'>
      <input type='text'placeholder='Type Here to Search' onChange={(e)=>setquery(e.target.value)}/>
      <button onClick={search}>Search</button>
    </div>
      <div className='contain'>
      {Search ? searchData.map((img,key)=>(
        <Image src={img.urls.thumb}
          key={key}
        />

      )):
      data.map((img,key)=>(
        <Image src={img.urls.thumb}
          key={key}
        />

      ))}
      </div>
    </div>
  );
}

export default App;
