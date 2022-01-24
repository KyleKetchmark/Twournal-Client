import React, {Component} from "react";
import './auth.css';
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import RegisterForm from "./Register";
import Login from "./Login";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: 'register' 
        }
    }

    setFormStatus = () => {
        this.state.formStatus === 'register' ? 
        this.setState({formStatus: 'login'}) :
        this.setState({formStatus: 'register'})
    }
    
    render() {
    return (
        <Container>
            <Row>
                {this.state.formStatus === 'register' ? <Col md='6'>
                <RegisterForm setToken={this.props.setToken} setFormStatus={this.setFormStatus} />
                </Col> : 
                <Col md='6'>
                <Login setToken={this.props.setToken} setFormStatus={this.setFormStatus}/>
                </Col>}
            </Row>
        </Container>
    )
    }
}

export default Auth;
    // loginSubmit = (event) => {
    //     event.preventDefault()

    //     let reqBody = {
    //         // email,
    //         // password
    //     }

    //     let url = `${process.env.APIURL}/user/login`
    //     console.log(reqBody)

    //     fetch(url, {
    //         method: "POST",
    //         body: JSON.stringify(reqBody),
    //         headers: new Headers({
    //             "Content-Type": "application/json"
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => this.updateLocalStorage(data.sessionToken))
    //         .catch(err => console.log(err))
    // }

    // handleShow = () => this.setState({show: true});

    // toggleFunction = () => {
    //     this.setState(prevState => ({show: !prevState.show}))
    // }
    
    // ModalIsShowing = (e) => {
    //     return (
    //         <Modal isOpen={this.state.show} toggle={this.toggleFunction} >
    //             <ModalHeader toggle={this.toggleFunction}>
    //                 Register
    //             </ModalHeader>
    //             <ModalBody>
    //                 <ReactForm toggleFunction={this.toggleFunction} show={this.show} updateLocalStorage={this.updateLocalStorage}/>
    //             </ModalBody>
    //             <ModalFooter>
    //                 <Button onClick={this.toggleFunction}>
    //                     Cancel
    //                 </Button>
    //             </ModalFooter>
    //         </Modal>
    //     )
    // }