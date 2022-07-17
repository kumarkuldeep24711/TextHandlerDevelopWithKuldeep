import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert ,setAlert] = useState(null);
const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },3000);
  }
  return (
   <>
<Navbar title="TextUtils" link="About"></Navbar>
<Alert alert={alert}></Alert>

<div className="container my-3">
<Textform showAlert={showAlert} heading="Enter text for analyze"></Textform> 
{/*<About></About>*/}
</div>

   </> 
  );
  
}


export default App;
