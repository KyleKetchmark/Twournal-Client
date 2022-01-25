import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardFooter } from 'reactstrap';
import Tweets from './Tweets/Tweets'


class Twournals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            twournals: {}
        }
    }

    deleteTwournal = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3800/twournal/delete/${this.props.twournalId}`, {
            method: 'DELETE',
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

    editTwournal = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3800/twournal/update/${this.props.user}`, {
            method: 'PUT',
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

    fetchTwournal = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3800/twournal/${this.props.userId}`, {
            method: 'GET',
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


    componentDidMount() {
        // this.fetchTwournal()
    }

    // getFeed = () => {
    //     this.fetchTwournal();
    //     this.state.twournals.map((key, i) => {

    //     })
    // }
    // componentWillUnmount();
    render() {
        return (
            <>
                <div id='entireBody'>
                    <div id='twournalBody'>
                        <Card id='twournalEntry' style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {this.props.twournals}
                                    title prop
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    twitteract prop
                                    <i>{this.props.twournals}</i>
                                </CardSubtitle>
                                <CardText>
                                    body prop
                                    {this.props.twournals}
                                </CardText>
                                <CardFooter>
                                    {this.props.twournals}    
                                </CardFooter>
                                <Button type='submit' onClick={this.editTwournal}>Edit</Button>
                                <Button type='submit' onClick={this.deleteTwournal}>
                                    Delete
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div id='tweetBody'>
                        <Tweets tweetId={this.props.twournals} />
                    </div>
                </div>
            </>
        )
    }
}

export default Twournals;