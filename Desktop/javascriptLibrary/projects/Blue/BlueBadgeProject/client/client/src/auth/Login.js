import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [sessionToken, setSessionToken] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            body: JSON.stringify({user: { email: email, passwordHash: passwordHash}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            console.log(data.sessionToken);
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPasswordHash(e.target.value)} type="password" name="passwordhash" value={passwordHash}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}
export default Login;