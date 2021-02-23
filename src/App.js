import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";


function App() {
  const names = ["Jeff", "Desi", "Nick", "Natalie"]
  const greetingElements = names.map((name) => { return <Greeting name={name} weather="sunny"/>})


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
            Welcome to React
        </h2>
        <Greeting name="Craig" weather="sunny"/>
        <Greeting name="Jerry" weather="cloudy"/>
        <Greeting name="Robert"/>
        {new Greeting({name:"Joma", weather: "snowy"}).render()}
        {greetingElements}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  
  );
}

export default App;
