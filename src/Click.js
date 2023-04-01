import React from 'react'
import { Link } from 'react-router-dom'


function Click() {
    

  
  return (
   <>
    <h1 style={{textAlign:"center"}}>Welcome to Reusable Component</h1>
    
    <Link to="/screen1"><button  style={{backgroundColor:"red",marginLeft:"650px",marginTop:"50px",width:"200px",background:"red",textAlign:"center"}}>Screen 1</button></Link>
    <Link to="/screen2"><button  style={{backgroundColor:"lightblue",marginLeft:"650px",marginTop:"50px",width:"200px",background:"blue"}}>Screen 2</button></Link>

    </>
  )
  
}

export default Click
