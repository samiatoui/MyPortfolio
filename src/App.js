import Topbar from "./components/Topbar";
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
        <Topbar />
          <About />
          <Skills />
          <Exp />
          <RepoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
