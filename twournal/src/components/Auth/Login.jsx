import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginSubmit = (event) => {
        event.preventDefault()
        
        let url = `http://localhost:3700/user/login`

        fetch(url, {
            method: "POST",
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(data => this.props.setToken(data.sessionToken))
            .catch(err => console.log(err))
    }

    render() {
        return (
            
            <div id='loginForm'>
                <h1>Login</h1>
                <h4>Welcome back! Login to keep the mental expansion of thoughts never-ending.</h4>
                <Form onSubmit={this.loginSubmit}>
                    <FormGroup>
                        <Label for="loginEmail">
                            Email
                        </Label>
                        <Input
                            id="li_email"
                            name="email"
                            placeholder="enter email"
                            type="email"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="loginPassword">
                            Password
                        </Label>
                        <Input
                            id="li_password"
                            name="password"
                            placeholder="enter password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type='submit'>Login</Button>
                    <Button onClick={this.props.setFormStatus}>New? Register here</Button>
                </Form> 
            </div>
            
        )
    }
}

export default Login;