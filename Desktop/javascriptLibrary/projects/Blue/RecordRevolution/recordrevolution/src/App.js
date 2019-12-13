import React from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar';
import ViewOne from './components/view/ViewOne';
import ViewTwo from './components/view/ViewTwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ViewOne />
      <h1 className="shopTitle" style={{textAlign: 'center', marginTop: '-3em'}}>Shop Records!</h1>
      <ViewTwo />
    </div>
  );
}

export default App;
