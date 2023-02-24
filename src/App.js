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
  function removeBodyClasses()
  {
    document.body.classList.remove('primary')
    document.body.classList.remove('warning')
    document.body.classList.remove('danger')
    document.body.classList.remove('secondary')
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode ==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#046b6b'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled','success')
      document.title = 'Dark Mode Enable';
      setInterval(() => {
        document.title = 'Install text-utilities';
      }, 1500);
      setInterval(() => {
        document.title = 'Install now';
      }, 2000);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled','success')
      document.title = 'Light Mode Enable'
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
                <TextForm showAlert={showAlert} heading="TextUtils - Word counter, Character counter, Remove extra spaces, Copy text" mode={mode} />
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

