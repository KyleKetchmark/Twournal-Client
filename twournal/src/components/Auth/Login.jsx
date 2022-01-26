import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
        
        let url = `http://localhost:3800/user/login`

        fetch(url, {
            method: "POST",
            body: JSON.stringify(this.state),
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
                <h4>Welcome back!</h4>
                <br />
                <h5>Login to keep the mental expansion of thoughts never-ending.</h5>
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
                    <Button className='btn' type='submit'>Submit</Button>
                    <Button className='btn' onClick={this.props.setFormStatus}>Register here!</Button>
                </Form> 
            </div>
            
        )
    }
}

export default Login;