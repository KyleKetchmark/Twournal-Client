import React from 'react'
import Feed from './Feed/Feed';
import Sidebar from './Sidebar/Sidebar';
import './mainpage.css';
import 'bootstrap';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <>
        <div id='mainpage'>
          <Sidebar setClear={this.props.setClear} sessionToken={this.props.sessionToken} twournals={this.props.twournal} />
          <div id='twournalContainer'>
            <div id='heading'>
              <h3>Welcome, expand your thoughts!</h3>
            </div>
            <Feed twournals={this.props.twournal} sessionToken={this.props.sessionToken} />
          </div>
        </div>
      </>
    )
  }
}
export default MainPage;