import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [sessionToken, setSessionToken] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3001/api/user/createuser", {
            method: 'POST',
            body: JSON.stringify({user: {email: email, name: name, passwordhash: passwordHash}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            props.updateToken(data.sessionToken)
        })
        console.log(email, name, passwordHash);
    }

    return(
        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input onChange={(e) => setName(e.target.value)} name="name" value={name} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordHash">Password</Label>
                    <Input onChange={(e) => setPasswordHash(e.target.value)} name="passwordHash" type="password" value={passwordHash} required/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}
export default Signup;