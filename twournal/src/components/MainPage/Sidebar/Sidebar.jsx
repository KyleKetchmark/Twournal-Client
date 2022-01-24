import React from 'react';
import Logout from './Logout/Logout';
import Expand from './ExpandBtn/Expand';
import './sidebar.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup, Label } from 'reactstrap'
import defPic from './default.png'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profPicLink: '',
            summary: '',
            show: false
        }
    }

    handleExpand = () => {
        this.setState({ show: !this.state.show })
    }

    postTwournal = () => {
        fetch(`http://localhost:3800/twournal/create`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ twournals: logData })
            })
    }

    render() {
        return (
            <>
                <div id='userInfo'>
                    <div id='userProf'>
                        <h2><i>Twournal</i></h2>
                        <img id='avatar' src={defPic} alt="add a pic" />
                        {/* <input type="text" placeholder={'brief user bio'} />
                        <button id='biosubmit' onClick={null}>Submit Bio</button> */}
                    </div>
                    <div id='expand'>
                        <Button
                            color="primary"
                            onClick={this.handleExpand}
                        >
                            Ready to expand?
                        </Button>
                        {this.state.show === true ?

                            <Modal
                                fade={false}
                                toggle={this.handleExpand}
                                isOpen={this.state.show}
                                style={{ height: '75%', width: '75%' }}
                            >
                                <Form>
                                    <ModalHeader toggle={this.handleExpand}>
                                        Title:
                                    </ModalHeader>
                                    <FormGroup>
                                        
                                        <Input
                                            id="li_title"
                                            name="title"
                                            placeholder="enter title"
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <ModalBody>
                                        Body:
                                    </ModalBody>
                                    <FormGroup>
                                        <Input
                                            id="li_thoughts"
                                            name="thoughts"
                                            placeholder="enter thoughts"
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <ModalFooter>
                                        <Button
                                            color="primary"
                                            onClick={null}
                                        >
                                            Connect a Tweet?
                                        </Button>
                                        {' '}
                                        <Button onClick={this.postTwournal}>
                                            Post
                                        </Button>
                                    </ModalFooter>
                                </Form>
                            </Modal> : null}
                    </div>
                    <div id='logout'>
                        <Logout clearLocalStorage={this.props.clearLocalStorage} />
                    </div>
                </div>
            </>
        )
    }
}
export default Sidebar;
