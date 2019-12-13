import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import './signup.css';
import APIURL from '../helpers/environment';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [sessionToken, setSessionToken] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/user/createuser`, {
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
        <Container className="signupContainer">
            <Row>
            <Col md="6" id="inputs">
            <h1 id="signup">Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <div id="labelEmail">
                    <Label htmlFor="email" id="emailLabel">Email</Label>
                    </div>
                    <Input id="inputEntry" onChange={(e) => setEmail(e.target.value)} name="email" value={email} required />
                </FormGroup>
                <FormGroup>
                    <div id="labelName">
                    <Label htmlFor="name" id="nameLabel">Name</Label>
                    </div>
                    <Input id="inputEntry" onChange={(e) => setName(e.target.value)} name="name" value={name} required />
                </FormGroup>
                <FormGroup>
                    <div id="labelPassword">
                    <Label htmlFor="passwordHash" id="passwordLabel" >Password</Label>
                    </div>
                    <Input id="inputEntry" onChange={(e) => setPasswordHash(e.target.value)} name="passwordHash" type="password" value={passwordHash} minLength="5" required/>
                </FormGroup>
                <div id="buttonDiv">
                   <Button id="signupButton" type="submit">Signup</Button>
                </div>
            </Form>
            </Col>
            </Row>
            </Container>
    )
}
export default Signup;