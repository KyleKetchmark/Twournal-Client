import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Auth from './components/Auth/Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token })
    }
  }

  setSessionState = (token) => {
    localStorage.setItem("token", token)
    this.setState({ sessionToken: token })
  }

  componentWillUnmount() {
    this.clearLocalStorage()
  }

  clearLocalStorage = () => {
    this.setState({sessionToken: '',})
    localStorage.clear()
    console.log("You've logged out!");
  }

  viewer = () => {
    return this.state.sessionToken !== '' ?
      <MainPage sessionToken={this.state.sessionToken} setToken={this.setSessionState} setClear={this.clearLocalStorage} /> :
      <Auth setToken={this.setSessionState} sessionToken={this.state.sessionToken} first={this.props.firstName} />
  }
  render() {
  return(
    <Router>
      <div className = 'App' >
        {this.viewer()}
        <div style = {{ display: "flex", justifyContent: "center", paddingTop: "5vh"}}>
          <footer className="footer">2022 &copy; Created by Kyle Ketchmark</footer>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;