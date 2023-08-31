// import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  return (
    <>
    {/* <navbar/>
    <navnar title="TextUtils"/> */}
    <Navbar title="TextUtils" aboutText="About" />
    <div className="container">
      <Textform heading="Write a Story "/> 
      <About/>
    </div>
    
  
    </>
    
  );
}

export default App;
