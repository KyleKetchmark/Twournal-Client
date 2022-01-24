import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardFooter } from 'reactstrap';
import Tweets from './Tweets/Tweets'


class Twournals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            twournals: []
        }
    }

    fetchTwournal = () => {
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
                    <div id='twounralBody'>
                        <Card id='twournalEntry' style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {this.state.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <i>{this.state.twitterAct}</i>
                                </CardSubtitle>
                                <CardText>
                                    Body prop.
                                </CardText>
                                <CardFooter>Date prop</CardFooter>
                                <Button>Edit</Button>
                                <Button>
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