import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import './register.css'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            admin: false,
            twitterAct: ''
        }
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    registerSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3800/user/register`, {
            method: "POST",
            body: JSON.stringify( this.state ),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then((data) => {
                this.props.setToken(data.sessionToken);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div id='registerForm'>
                    <h3>Register for a Twournal Account!</h3>
                    <Form onSubmit={this.registerSubmit}>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                            </Label>
                            <Input
                                id="reg_firstName"
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">
                                Last Name
                            </Label>
                            <Input
                                id="reg_lastName"
                                name="lastName"
                                placeholder="Last Name"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="reg_loginEmail"
                                name="email"
                                placeholder="enter email"
                                type="email"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="reg_loginPassword"
                                name="password"
                                placeholder="enter password"
                                type="password"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="twitterAct">
                                Twitter Handle
                            </Label>
                            <Input
                                id="reg_twitterAct"
                                name="twitterAct"
                                placeholder="@tweetybird"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button type='submit' >Submit</Button>
                        <Button onClick={this.props.setFormStatus}>Login here!</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default RegisterForm;