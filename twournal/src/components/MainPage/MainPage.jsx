import React from 'react'
import Twournals from './Twounrals/Twournals';
import Sidebar from './Sidebar/Sidebar';
import './mainpage.css';
import 'bootstrap';


class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
      }
    }
    

    render() {
        return (
        <>
        <div id='mainpage'>
          <Sidebar setClear={this.props.setClear} token={this.props.sessionToken} twournals={this.props.twournal}/>
          <div id='twournalContainer'>
            <div id='heading'>
              <h3>Welcome {this.state.firstName}, expand your thoughts!</h3>
            </div>
          <div className='indyTwournal'>
            <div className='daTwourn'>
              <Twournals twournals={this.props.twournal} />
            </div>
          </div>
          </div>
        </div>
        </>
        )
    }
}
export default MainPage;