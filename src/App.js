import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="Umang" home="Home" about="About" />
    <div className="container">

      <TextForm heading="fun" />
    </div>
    </>
  );
}

export default App;
