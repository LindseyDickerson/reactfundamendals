import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import { Button } from 'reactstrap';
import './Auth.css';



const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [login, setLogin] = useState(false);
    const [sessionToken, setSessionToken] = useState('');

 


    return( 
        <div>
            { login ? <Login updateToken={props.updateToken}/> : <Signup updateToken={props.updateToken}/> }
            {/* Line 21 takes the props from the login or signup screen, which is the token needed to access the page where you can create a gift. */}
            <br/>
            <div id="buttonDiv">
            <Button id="toggleLogin" onClick={(e) => {setLogin(!login)}}>{ !login ? 'Have an account? Login' : 'Need an account? Sign up here.'} </Button>
            {/* Line 25 is a ternary that shows a button. It allows you to toggle between the login screen and the signup screen, depending on what you need to do. Starting at the blue curly braces, it basically says 'Not on the login page?' (so it displays on the signup page) display for the button to say 'Have an account? Login', if not, then display 'Need an account? Sign up here.' which dislays on the login screen. Line 21 takes care of the actual switching of the screens.  */}
            </div>
        </div>
    )
}
export default Auth;