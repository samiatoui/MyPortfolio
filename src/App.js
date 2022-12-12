import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import RepoList from "./components/Repos/RepoList";
import Exp from "./components/workexp/Workexp";

function App() {
  return (
    <div className="App">
      <Topbar/>  
      <div className="sections">
        <About/>
        <Skills />
        <Exp/>
        <RepoList/>
        </div>    
    </div>
  );
}

export default App;
