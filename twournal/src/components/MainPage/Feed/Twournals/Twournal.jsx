import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardFooter } from 'reactstrap';
import './twournal.css'


class Twournal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    getFeed = () => {
        // this.fetchTwournal();
        return (
                this.props.fetch.map((twournal, i) => 
                    // console.log(twournal)
                    <div id='twournalBody'>
                        <Card id='twournalEntry' style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {twournal.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <i>{twournal.twitterAct}</i>
                                </CardSubtitle>
                                <CardText>
                                    {twournal.body}
                                </CardText>
                                <CardFooter>
                                    {twournal.date}
                                </CardFooter>
                                <Button type='submit' onClick={this.props.edit}>Edit</Button>
                                <Button type='submit' onClick={this.props.delete}>
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
            {this.getFeed()}
            </>
        )
    }
}

export default Twournal;