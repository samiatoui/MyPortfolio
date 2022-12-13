import Fade from "react-reveal";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import RepoList from "./components/Repos/RepoList";
import Exp from "./components/workexp/Workexp";
import Footer from "./components/bottom/Bottom";


function App() {
  return (
    <div className="App">
      <Fade top>
        <Topbar />

      </Fade>
      <div className="sections">
        <Fade top>
          <About />
        </Fade>
        <Fade>
          <Skills />
        </Fade>
        <Fade>
          <Exp />
        </Fade>
        <Fade>
          <RepoList />
        </Fade>
        <Footer />
      </div>
    </div>
  );
}

export default App;
