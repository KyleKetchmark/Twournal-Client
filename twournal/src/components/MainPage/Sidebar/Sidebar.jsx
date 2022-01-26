import React from 'react';
import './sidebar.css';
import Logout from './Logout/Logout';
import defPic from './default.png';
import TweetBtn from '../Sidebar/Tweet/TweetBtn';
import Expand from '../Sidebar/Expand/ExpandBtn';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showTweet: false,
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

    // componentDidMount() {
    //     this.postTwournal()
    // }

    render() {
        return (
            <>
                <div id='userInfo'>
                    <div id='userProf'>
                        <h2><i>Twournal</i></h2>
                        <img id='avatar' src={defPic} alt="add a pic" />
                    </div>
                    <Expand handler={this.handleChange} token={this.props.sessionToken}/>
                    <TweetBtn handler={this.handleChange} token={this.props.sessionToken}/>
                    <div id='logout'>
                        <Logout setClear={this.props.setClear} />
                    </div>
                </div>
            </>
        )
    }
}
export default Sidebar;
