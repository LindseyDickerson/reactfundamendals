import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './auth/Auth';
import Footer from './footer/Footer';
import GiftIndex from './gifts/GiftIndex';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {

  const [sessionToken, setSessionToken] = useState('');
  // console.log(sessionToken);
  
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    //console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
}


  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ?  <GiftIndex token={sessionToken} clearToken={clearToken} setSessionToken={setSessionToken} updateToken={updateToken}/> : <Auth updateToken={updateToken} clearToken={clearToken}/>)
  }
 console.log(sessionToken);


  return (
    <div className="App">
      <Navbar clearToken={clearToken} token={sessionToken}/>
      <Router>
      <Sidebar protectedViews={protectedViews} token={sessionToken} updateToken={updateToken}/> 
      </Router>
      {/* <Auth updateToken={updateToken} /> */}
      <Footer/>
    </div>
  );
}

export default App;
