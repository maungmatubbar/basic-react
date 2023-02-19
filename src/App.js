import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Navbar Title" home="Home"  />
      <div className="container">
        <TextForm heading="Enter the text to analize" />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;

