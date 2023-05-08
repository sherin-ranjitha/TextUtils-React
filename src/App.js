import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */


// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const[button, setButton] = useState('primary');
  const[text, setText] = useState('#13466e')

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setButton('primary');
      setText('#13466e')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    
   /*    setInterval(() => {
        document.title = 'TextUtils is Amazing Mode'
      }, 2000);

      setInterval(() => {
        document.title = 'Install TextUtils now'
      }, 1500); */
    }
    else{
      setMode('light');
      setButton('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    
    }
  }

  const toggleModeRed = () => {
    if(mode === 'light'){
      setMode('dark');
      setButton('danger');
      setText('#dc3545');
      document.body.style.backgroundColor = ' #800000';
      showAlert("Dark mode has been enabled", "success");
      
    }
    else{
      setMode('light');
      setButton('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    
    }
  }

  const toggleModeGreen = () => {
    if(mode === 'light'){
      setMode('dark');
      setButton('success');
      setText('#28a745');
      document.body.style.backgroundColor = ' #003300';
      showAlert("Dark mode has been enabled", "success");
    
    }
    else{
      setMode('light');
      setButton('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    
    }
  }

  return (
    <>
  



      
    {/*   <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen}/>
      <Alert alert={alert}/>
      <div className="container my-3"></div>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} button={button}/>}/>
      
         <Route path="about" element={<About/>} />
       
      </Routes>
    </BrowserRouter>
 */}

     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} button={button} text={text}/>
      </div>
    </>
  );
}

export default App;
