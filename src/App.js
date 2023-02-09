import logo from './logo.svg';
import './App.css';
let name = "Mong"
function App() {
  return (
    <>
      <h1>This is me</h1>
      <h2>I am {name}</h2>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React With Mong
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
