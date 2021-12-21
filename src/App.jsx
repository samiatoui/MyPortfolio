import Topbar from "./components/Topbar/Topbar";
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="App">
      <Topbar/>  
      <div className="sections">
        <Contact/>
        </div>    
    </div>
  );
}

export default App;
