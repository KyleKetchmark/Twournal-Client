import React from 'react';
import Login from './Auth/Login/Login';
import RegisterForm from './Auth/Register/Register';


export class Sidebar extends React.Component {
    constructor(profPicLink, summary, Login, RegisterForm) {
        this.state = {
            this.pr
        }
    }
    
    
    render() {
        return(
        <div id='userInfo'>
            <h2><i>Twournal</i></h2>
            <img id='Avatar' src={this.props.profPicLink} alt="add a pic" />
            <input type="text" value={this.props.summary} />
            <button className='auth' onClick={() => <Login show={false ? null : show()}/>}>Login</button>
            <button className='auth' onClick={() => <RegisterForm show={false ? null : show()}/>}>Create an Account</button>
        </div>
        )
    }
}