import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import './login.css';
import APIURL from '../../src/helpers/environment'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [sessionToken, setSessionToken] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/user/login`, {
            method: 'POST',
            body: JSON.stringify({user: { email: email, passwordhash: passwordHash}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            console.log(data);
        })
    }

    return (
        <Container id="loginContainer">
            <Row>
                <Col md="6" id="inputs">
                    <h1 id="loginText">Login</h1>
                     <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <div id="labelEmailLogin">
                            <Label htmlFor="email">Email</Label>
                            </div>
                            <Input id="inputEntry" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                        </FormGroup>
                        <FormGroup>
                            <div id="labelPasswordLogin">
                            <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="inputEntry" onChange={(e) => setPasswordHash(e.target.value)} type="password" name="passwordhash" value={passwordHash}/>
                        </FormGroup>
                        <div id="buttonDiv">
                        <Button id="loginButton" type="submit">Login</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;