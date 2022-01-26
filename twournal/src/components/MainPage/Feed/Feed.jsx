import React from 'react';
import Tweets from './Tweets/Tweets'
import Twournals from './Twournals/Twournal';
import './feed.css';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            twournals: [],
            tweets: []
        }
    }

    fetchTwournal = async (event) => {
        // event.preventDefault();

        await fetch(`http://localhost:3800/twournal/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                return this.setState({ twournals: logData })
            })
    }

    fetchTweet = async (event) => {
        // event.preventDefault();
        await fetch(`http://localhost:3800/tweet/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                return this.setState({ tweets: logData })
            })
    }

    editTwournal = (event) => {
        // event.preventDefault()
        fetch(`http://localhost:3800/twournal/update/${this.state.twournals.twournalId}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                date: this.state.date,
                twitterAct: this.state.twitterAct,
                tweetId: this.state.tweetId
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ twournals: logData })
            })
    }

    deleteTwournal = (event) => {
        // event.preventDefault()
        fetch(`http://localhost:3800/twournal/delete/${this.state.twournals.twournalId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then(logData => console.log('Deleted'))
    }

    deleteTweet = (event) => {
        // event.preventDefault()
        fetch(`http://localhost:3800/tweet/delete/${this.state.tweets.tweetId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then(logData => console.log('Deleted'))
    }

    componentDidMount() {
        this.fetchTwournal()
        this.fetchTweet()
    }

    render() {
        return (
            <>
                <div id='entireBody'>
                    <Twournals fetch={this.state.twournals} edit={this.editTwournal} delete={this.deleteTwournal} token={this.props.sessionToken}/>
                    <Tweets fetchTweet={this.state.tweets}  deleteTweet={this.deleteTweet} tweetId={this.props.twournals} token={this.props.sessionToken} />
                </div>
            </>
        )
    }
}

export default Feed;