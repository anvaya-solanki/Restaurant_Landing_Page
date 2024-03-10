import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {
  const handleInputSubmit = (text) => {
    alert(`You submitted: ${text}`);
  };

  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
