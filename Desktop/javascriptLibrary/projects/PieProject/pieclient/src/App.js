import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  //console.log(sessionToken);

  const viewConductor = () => {
    return sessionToken === undefined ? <Auth /> : <Pies />
  }

  return (
    <div className="App">
     <Navbar/>
     {/* <Auth/>
     <hr/>
     <Pies /> */}
     {viewConductor()}
    </div>
  );
}

export default App;
