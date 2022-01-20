import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import APIURL from "../../helpers/environment";


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
    }
    function RegisterSubmit(event) async {
        event.preventDefault()

        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)

        let reqBody = {
            firstName,
            lastName,
            email,
            password
        }

        console.log(reqBody)
        let url = `${APIURL}/user/register`

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                props.updateLocalStorage(data.sessionToken);
                props.toggleFunction();
                console.log(props.show);
            })
            .catch(err => console.log(err))

    }
    
    return(
        <Form onSubmit={registerSubmit}>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">
                                Last Name
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="loginEmail">
                                Email
                            </Label>
                            <Input
                                id="loginEmail"
                                name="email"
                                placeholder="email"
                                type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="loginPassword">
                                Password
                            </Label>
                            <Input
                                id="loginPassword"
                                name="password"
                                placeholder="password"
                                type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Input type="submit" value="Register"/>
                    </Form>
    )
}

export default RegisterForm;