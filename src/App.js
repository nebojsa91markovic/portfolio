import "./App.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Tehnologies from "./Components/Techonologies/Techonologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Services /> */}
      <Tehnologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
