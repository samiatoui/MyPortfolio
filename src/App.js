import Topbar from "./components/Topbar/Topbar";
import Contact from "./components/contact/Contact";
import "./App.css";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Topbar/>  
      <div className="sections">
        <About/>
        <Contact/>
        </div>    
    </div>
  );
}

export default App;
