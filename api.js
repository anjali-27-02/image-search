import { useState,useEffect } from "react";
import axios from "axios";
const count=1;
function LoadImages(){
    const[state,setstate]=useState([]);
    useEffect(()=>{
    axios.get("https://api.unsplash.com/photos?client_id=j0k8OkM52lE95SUk7WlG0r0I-Ki1a5naV7fysf_IDdA")
    .then((data)=>{
        setstate(data.data)
    })
},[count])
    return state;
}
function SearchImages(query){
    const[state,setstate]=useState([]);
    useEffect(()=>{
    axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=j0k8OkM52lE95SUk7WlG0r0I-Ki1a5naV7fysf_IDdA")
    .then((data)=>{
        setstate(data.data.results)
    })
},[query])
    return state;
}
export {LoadImages,SearchImages}
