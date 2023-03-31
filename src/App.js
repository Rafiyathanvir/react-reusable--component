import React, { useState } from "react";
import Table1 from "./Table1";
import data from "./data.json"
import Table2 from "./Table2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Click from "./Click";
import './App.css'
function App(){
  
  
  return(
<>
<BrowserRouter>
<Routes>
          
          <Route path="/" exact element={<Click/>}/>

           <Route path="/screen1" exact element={<Table1 data={data}/>}/>
           <Route path="/screen2" exact element={<Table2 />}/>
</Routes>
</BrowserRouter>
    </>
    
  )
}
export default App;