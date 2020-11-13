import React from 'react';
import Routes from './config/Routes'
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App" >
    <Header />
    <Routes />
    <Footer />
    </div>
  );
}

export default App;
