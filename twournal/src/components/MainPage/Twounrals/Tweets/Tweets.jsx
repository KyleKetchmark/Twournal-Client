import React from 'react'
import { Card, CardImg, CardTitle, CardText, CardBody, CardFooter} from 'reactstrap'

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetContent: {}
        }
    }

    twitterApi = '';

    fetchTweet = () => {
        fetch(this.twitterApi, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ tweetContent: logData })
            })
        console.log(this.state.tweetContent);
    }

    componentDidMount() {
        // this.fetchTweet()
    }

    render() {
        return (
                <Card style={{ width: '18rem' }}>
                    {/* <CardImg variant="top" src="holder.js/100px180" /> */}
                    <CardBody>
                        <CardTitle>@Twitter Username prop</CardTitle>
                        <CardText>
                            Tweet Body props
                        </CardText>
                        <CardFooter>Date Published prop</CardFooter>
                    </CardBody>
                </Card>
        )
    }
}

export default Tweet;