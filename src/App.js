import Topbar from "./components/Topbar/Topbar";
import Contact from "./components/contact/Contact";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import RepoList from "./components/Repos/RepoList";
import Repo from "./components/Repos/Repo";
function App() {
  return (
    <div className="App">
      <Topbar/>  
      <div className="sections">
        <About/>
        <Contact/>
        <Skills />
        <RepoList/>
        </div>    
    </div>
  );
}

export default App;
