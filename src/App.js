import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import RepoList from "./components/RepoList";
import Exp from "./components/Workexp";
import Footer from "./components/Bottom";


function App() {
  return (
    <div className="App">
        
      <div className="sections">
          <About />
          <Skills />
          <RepoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
