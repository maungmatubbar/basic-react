import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type

    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = () =>{
    if(mode ==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#046b6b'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled','success')
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled','success')
    }
    
  }
  const bgColorChange = (color)=>{
    document.body.style.backgroundColor = color
  }
 
  return (
    <>
      <Router>
        <Navbar title="Navbar Title" home="Home" about_us ="About" mode={mode} toggleMode={toggleMode} bg_color={bgColorChange} />
        <Alert alert={alert}/>
        <div className="container">
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analize" mode={mode} />
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

