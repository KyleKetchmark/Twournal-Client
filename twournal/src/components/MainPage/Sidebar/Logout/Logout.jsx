import React, { Component } from 'react'
import './logout.css';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <>
            <div id='logoutbtn'>
                <button onClick={this.props.setClear}>Logout</button>
            </div>
            </>
        )
    }
}

export default Logout;