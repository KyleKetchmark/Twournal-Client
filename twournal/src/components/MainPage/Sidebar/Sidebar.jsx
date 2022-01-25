import React from 'react';
import Logout from './Logout/Logout';
import Expand from './ExpandBtn/Expand';
import './sidebar.css';
import { Input, ModalFooter, Form, FormText, FormGroup, Label, Modal, Button } from 'reactstrap';
import defPic from './default.png';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: '',
            body: '',
            date: this.getDate(),
            twitterAct: '', //ask TJ about
            tweetId: 0,
            twournal: {},
        }
    }

    getDate = () => {
        let current = new Date();
        return current;
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleExpand = () => {
        this.setState({ show: !this.state.show })
    }

    postTwournal = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3800/twournal/create`, {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                date: this.state.date,
                twitterAct: this.state.twitterAct,
                tweetId: this.state.tweetId
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                return this.setState({ twournal: logData })
            })
    }

    render() {
        return (
            <>
                <div id='userInfo'>
                    <div id='userProf'>
                        <h2><i>Twournal</i></h2>
                        <img id='avatar' src={defPic} alt="add a pic" />
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
                                id='postModel'
                                toggle={this.handleExpand}
                                isOpen={this.state.show}
                                style={{ height: '75%', width: '75%' }}
                            >
                                <Form onSubmit={this.postTwournal}>
                                    <FormGroup className='entryPoints'>
                                        <Label>
                                            Title:
                                        </Label>
                                        <Input
                                            id="li_title"
                                            name="title"
                                            placeholder="enter title"
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className='entryPoints'>
                                        <label>
                                            Body:
                                        </label>
                                        <br />
                                        <textarea 
                                            id="li_body"
                                            name="body"
                                            placeholder="enter your thoughts"
                                            type="text"
                                            maxLength='1000'
                                            onChange={this.handleChange}
                                            >
                                            
                                        </textarea>
                                            
                                    </FormGroup>
                                    <FormGroup className='entryPoints'>
                                        <Label>
                                            @TwitterHandle:
                                        </Label>
                                        <Input
                                            id="li_th"
                                            name="twitterAct"
                                            placeholder="@tweetybird"
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
                                        <Button type='submit'>
                                            Post
                                        </Button>
                                    </ModalFooter>
                                </Form>
                            </Modal> : null}
                    </div>
                    <div id='logout'>
                        <Logout setClear={this.props.setClear} />
                    </div>
                </div>
            </>
        )
    }
}
export default Sidebar;
