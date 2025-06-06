import "./App.css";
import About from "./components/About";
import RepoList from "./components/RepoList";
import Services from "./components/Services";
import Footer from "./components/Bottom";


function App() {
  return (
    <div className="App">
        
      <div className="sections">
          <About />
          <Services />
          <RepoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
