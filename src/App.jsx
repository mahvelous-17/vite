import './App.css'
import pizza from './assets/pizza.png'
import Practice from './practice'
import Practice from './components/Header.jsx';
import Practice from './components/Footer.jsx';
import Practice from './components/Food.jsx';


function App() {

  const yourName = "Andrew";

  const currentYear = 2026;

  const color = "black";

  return (

    <div>
      <header />
      <Practice />
      <main>
        <h2>Welcome to my website!</h2>
        <food />
      </main>
      <h1>Hello, React!</h1>

      <h2>My name is {yourName}</h2>

      <p>I’m learning React in {currentYear}.</p>

      <p>This is my first React component!</p>

      <p>My favorite color is {color}</p>

      <img src={pizza} width = "500" height = "500" alt="a yummay pizza"/>

      <footer />
    </div>

  );

}


export default App;
