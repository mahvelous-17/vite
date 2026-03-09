import './App.css'
import Practice from './practice'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Food from './components/Food.jsx';
import AboutMe from './components/AboutMe.jsx'; 
import Sen from './components/Sen.jsx';
import Interest from './components/Interest.jsx';

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

      <AboutMe />

      <Interest />
      <Sen />

      <h1 className="text-4xl font-bold text-blue-600
        bg-yellow-100 p-8 rounded-xl">
        Tailwind is working!
      </h1>

      <Footer />
    </div>
  );
}

export default App;