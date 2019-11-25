import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './auth/Auth';
import Footer from './footer/Footer';
import GiftIndex from './gifts/GiftIndex';

function App() {

  const [sessionToken, setSessionToken] = useState('');
   console.log(sessionToken);
  
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

  const protectedViews = () => {
    return (sessionToken === '' ? <Auth updateToken={updateToken}/> : <GiftIndex token={sessionToken}/>)
  }
 console.log(sessionToken);


  return (
    <div className="App">
      {protectedViews()}
      {/* <Auth updateToken={updateToken} /> */}
      <Footer/>
    </div>
  );
}

export default App;
