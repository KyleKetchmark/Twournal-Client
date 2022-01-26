import React from 'react'
import { Card, Button, CardTitle, CardText, CardBody, CardFooter } from 'reactstrap'

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    componentDidMount() {
        // this.fetchTweet()
    }

    getTweets = () => {
        // this.fetchTwournal();
        return (
            this.props.fetchTweet.map((tweet, i) =>
                // console.log(twournal)
                <div id='tweetBody'>
                    <Card id='tweetEntry' style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle><i>{tweet.username}</i></CardTitle>
                            <CardText>{tweet.tweetBody} </CardText>
                            <CardFooter>{tweet.datePublished}</CardFooter>
                            <Button type='submit' onClick={this.props.deleteTweet}>
                                Delete
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            ))
    }

    render() {
        return (
            <>
            {this.getTweets()}
            </>
        )
    }
}

export default Tweet;