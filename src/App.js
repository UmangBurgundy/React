import "./App.css";
import Navbar from "./components/Navbar";
//import TextForm from './components/TextForm';
import About from "./components/About";
import Alerts from "./components/Alerts";

// import { useState } from "react";

function App() {
  //   const [mode, setMode] = useState("light");

  //   const toggleMode = () => {
  //     if (mode === "light") {
  //       setMode = "dark";
  //     } else {
  //       setMode = "light";
  //     }
  //   };
  return (
    <>
      <Navbar title="Umang" home="Home" about="About" />
      <Alerts Alerts="This is an alert" />
      <div className="container">
        {/* <TextForm heading="fun" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
