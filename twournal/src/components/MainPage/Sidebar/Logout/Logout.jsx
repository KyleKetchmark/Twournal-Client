import React, { Component } from 'react'

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <>
            <div id='logoutbtn' style={{color: 'black'}}>
                <button onClick={this.props.setClear}>Logout</button>
            </div>
            </>
        )
    }
}

export default Logout;