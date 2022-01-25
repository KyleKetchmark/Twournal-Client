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
        event.preventDefault()

        fetch(`http://localhost:3800/twournal/${this.props.user}`, {
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

    // componentWillUnmount();
    render() {
        return (
            <>
                <div id='entireBody'>
                    <div id='twournalBody'>
                        <Card id='twournalEntry' style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {/* {this.state.title} */}
                                    title prop
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    twitteract prop
                                    {/* <i>{this.state.twournals.twitterAct}</i> */}
                                </CardSubtitle>
                                <CardText>
                                    body prop
                                    {/* {this.state.twournals.body} */}
                                </CardText>
                                <CardFooter>
                                    {/* {this.state.twournals.date}     */}
                                </CardFooter>
                                <Button type='submit' onClick={this.editTwournal}>Edit</Button>
                                <Button type='submit' onClick={this.deleteTwournal}>
                                    Delete
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div id='tweetBody'>
                        <Tweets />
                    </div>
                </div>
            </>
        )
    }
}

export default Twournals;