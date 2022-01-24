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
    // const token = localStorage.getItem('token');
    // if (token && !this.state.sessionToken) {
    //   this.setState({ sessionToken: token })
    // }
  }

  setSessionToken = (token) => {
    localStorage.setItem("token", token)
    this.setState({ sessionToken: token })
  }

  clearLocalStorage = () => {
    localStorage.clear()
    this.setState({sessionToken: undefined})
  }

  viewer = () => {
    return this.state.sessionToken !== '' || undefined ?
      <MainPage sessionToken={this.state.sessionToken} setToken={this.setSessionToken} clearLocalStorage={this.clearLocalStorage} /> :
      <Auth setToken={this.setSessionToken} />
  }
  render() {
  return(
    <Router>
      <div className = 'App' >
        {/* {this.viewer()} */}
      <MainPage sessionToken={this.state.sessionToken} setToken={this.setSessionToken} clearLocalStorage={this.clearLocalStorage} />
        <div style = {{ display: "flex", justifyContent: "center", paddingTop: "5vh"}}>
          <footer className="footer">2022 &copy; Created by Kyle Ketchmark</footer>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;