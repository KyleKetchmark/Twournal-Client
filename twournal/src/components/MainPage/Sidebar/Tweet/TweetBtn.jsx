import React, { Component } from 'react';
import { Input, ModalFooter, Form, FormGroup, Label, Modal, Button } from 'reactstrap';
import APIURL from '../../../../helpers/environment';

class TweetBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTweet: false,
            tweets: [],
            username: '',
            tweetBody: '',
            datePublished: this.getDate()
        }
    }

    getDate = () => {
        let current = new Date();
        return current;
    }

    handleTweet = () => {
        this.setState({ showTweet: !this.state.showTweet })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postTweet = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/tweet/create`, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                tweetBody: this.state.tweetBody,
                datePublished: this.state.datePublished,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                return this.setState({ tweets: logData })
            })
            // .then(() => this.props.fet)
    }

    render() {
        return (
            <div id='tweet'>
                <Button
                    color="primary"
                    onClick={this.handleTweet}
                >
                    Add a Tweet
                </Button>
                {(this.state.showTweet === true) ?
                    <Modal
                        fade={false}
                        id='postModel'
                        toggle={this.handleTweet}
                        isOpen={this.state.showTweet}
                        style={{ height: '75%', width: '75%' }}
                    >
                        <Form onSubmit={this.postTweet}>
                            <FormGroup className='entryPoints'>
                                <Label>
                                    @TwitterUsername:
                                </Label>
                                <Input
                                    id="li_username"
                                    name="username"
                                    placeholder="@tweetybird"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup className='entryPoints'>
                                <label>
                                    Tweet Body:
                                </label>
                                <br />
                                <textarea
                                    id="li_tweetbody"
                                    name="tweetBody"
                                    placeholder="enter your thoughts"
                                    type="text"
                                    maxLength='240'
                                    onChange={this.handleChange}
                                >
                                </textarea>
                            </FormGroup>
                            <ModalFooter>
                                <Button type='submit'>
                                    Post
                                </Button>
                            </ModalFooter>
                        </Form>
                    </Modal> : null}
            </div>
        )
    }
}

export default TweetBtn;