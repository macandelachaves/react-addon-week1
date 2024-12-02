import logo from "./shecodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-3" alt="logo" />
        <Dictionary />
      </header>
      <footer>
        This code was made with ♥️ by Candela.
        <br />
        <a href="https://github.com/macandelachaves/react-addon-week1">
          🪄Github
        </a>
        <br />
        <a href="https://can-dictionary.netlify.app/">🪄Netlify</a>
      </footer>
    </div>
  );
}

export default App;
