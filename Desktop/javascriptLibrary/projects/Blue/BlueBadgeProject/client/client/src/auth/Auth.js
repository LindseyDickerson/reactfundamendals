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
            <br/>
            <Button onClick={(e) => {setLogin(!login)}}>{ ! login ? 'Have an account? Login' : 'Need an account? Sign up here.'} </Button>
        </div>
    )
}
export default Auth;