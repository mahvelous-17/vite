import './App.css'
import pizza from './assets/pizza.png'
import Practice from './practice'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Food from './components/Food.jsx';
import Card from './components/Card.jsx';
import sen from './components/sen.jsx';


function App() {

  const yourName = "Andrew";

  const currentYear = 2026;

  const color = "black";

  return (

    <div>
      <Header />
      <Practice />
      <main>
        <h2>Welcome to my website!</h2>
        <Food />
      </main>
     <Card />
     <Sen />

      <Footer />
    </div>

  );

}

export default App;
