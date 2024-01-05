import React from "react";
import Header from './components/Header/Header'
import Poster from "./components/Body/Poster";
import Partners from "./components/Body/Partners/Partners";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <Poster/>
      <Partners/>
      <Footer/>
      
    </div>
  );
}

export default App;
