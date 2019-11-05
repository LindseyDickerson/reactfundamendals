import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordhash] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3001/api/user/", {
            method: 'POST',
            body: JSON.stringify({username: username, passwordhash: passwordhash}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        console.log(username, passwordhash);
    }


    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordhash">Password</Label>
                    <Input onChange={(e) => setPasswordhash(e.target.value)} name="passwordhash" value={passwordhash}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}
export default Signup;